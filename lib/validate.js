const login_validate = (values) => {
  const errors = {};
  // kiểm tra có mail hay k
  if (!values.email) {
    // sau đó trả lại lỗi
    errors.email = "Required";
  } else if (
    // kiểm tra định dang email có hợp lệ hay k
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    //
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "required";
  } else if (values.password.includes("")) {
    errors.password = "Invalid password";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be grater then 8 and less than 20 characters";
  }
  return errors;
};

export default login_validate;
