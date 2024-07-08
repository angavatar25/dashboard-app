'use client'

import Button from "./Button";
import Input from "./Input";
import useFormValidation from "../hooks/useFormValidations";

const CommentPopup = (props) => {
  const validateForm = (values) => {
    let errors = {};

    if (!values.body) {
      errors.body = 'Body is required';
    }

    if (!values.email) {
      errors.email = 'Email address is required';
    }

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.name && !values.email && !values.body) {
      errors = {};
    }

    return errors;
  }

  const { formData, errors, setFormData, handleSubmitMessage, handleClearModal } = useFormValidation(
    validateForm
  );

  const handleSubmit = () => {
    if (Object.keys(validateForm(formData)).length === 0) {
      props.addComment(formData);
      handleClearModal();

      return;
    }

    handleSubmitMessage(formData);
  };

  const closeModal = () => {
    props.closeModal();
    handleClearModal();
  }

  return (
    <>
      {props.show ? (
        <div className="popup-container">
          <div className="content-container">
            <p className="text-xl font-medium">Add new comment</p>
            <div className="mt-4">
              <p>Enter email</p>
              <Input
                type="text"
                placeholder="Enter email"
                onChange={(e) => setFormData(state => ({...state, email: e.target.value}))}
                value={formData.email || ''}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mt-4">
              <p>Enter body</p>
              <Input
                type="text"
                placeholder="Enter body"
                onChange={(e) => setFormData(state => ({...state, body: e.target.value}))}
                value={formData.body || ''}
              />
              {errors.body && <p className="text-red-500">{errors.body}</p>}
            </div>
            <div className="mt-4">
              <p>Enter name</p>
              <Input
                type="text"
                placeholder="Enter name"
                onChange={(e) => setFormData(state => ({...state, name: e.target.value}))}
                value={formData.name || ''}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mt-4 flex gap-3">
              <Button
                type="primary"
                text="Add comment"
                onClickEvent={handleSubmit}
              />
              <Button
                type="danger"
                text="Cancel"
                onClickEvent={closeModal}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
};

export default CommentPopup;