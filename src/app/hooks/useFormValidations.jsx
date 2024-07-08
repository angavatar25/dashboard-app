'use client'

import { useState } from "react";

const useFormValidation = (validate) => {
  const [formData, setFormData] = useState({
    email: '',
    body: '',
    name: '',
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({});

  const handleSubmitMessage = (form) => {
    setErrors(validate(form));
  };

  const handleClearModal = () => {
    setFormData({
      email: '',
      body: '',
      name: '',
    })
  };

  const handleClearLoginForm = () => {
    setLoginForm({
      email: '',
      password: '',
    })
  }

  return {
    formData,
    errors,
    loginForm,
    setLoginForm,
    setFormData,
    handleSubmitMessage,
    handleClearModal,
    handleClearLoginForm,
  }
};

export default useFormValidation;