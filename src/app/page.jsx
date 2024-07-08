'use client'

import { useRouter } from "next/navigation";

import Button from "./components/Button";
import Input from "./components/Input";

import useFormValidation from "./hooks/useFormValidations";

const Login = () => {
  const router = useRouter();

  const validateForm = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.password) {
      errors.password = 'Password address is required';
    }

    if (values.email && values.password) {
      errors = {};
    }

    return errors;
  }

  const { loginForm, errors, setLoginForm, handleClearLoginForm, handleSubmitMessage } = useFormValidation(
    validateForm
  );

  const handleLogin = () => {
    if (Object.keys(validateForm(loginForm)).length === 0) {
      router.push('/dashboard');
      handleClearLoginForm();

      return;
    }

    handleSubmitMessage(loginForm);
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-2 flex justify-center items-center flex-col max-w-[800px] m-auto gap-6">
        <p className="text-2xl font-bold">Log In into your account</p>
        <div className="w-full">
          <p className="mb-3">Email</p>
          <Input
            type="text"
            placeholder="Please input your email"
            onChange={(e) => setLoginForm(state => ({...state, email: e.target.value}))}
            value={loginForm.email}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-full">
          <p className="mb-3">Password</p>
          <Input
            type="password"
            placeholder="Please input your password"
            onChange={(e) => setLoginForm(state => ({...state, password: e.target.value}))}
            value={loginForm.password}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <Button
          type="primary"
          text="Login"
          onClickEvent={handleLogin}
        />
      </div>
      <div className="col-span-2 bg-blue-600">
        <img src="/assets/login-workplace.png"/>
      </div>
    </div>
  )
}

export default Login;
