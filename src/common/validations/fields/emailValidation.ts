const validateEmail = (
  email: string,
): { isValid: boolean; error: string[] } => {
  const error: string[] = [];
  let isValid = true;

  if (!email) {
    return { isValid: false, error: ["Email is required"] };
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
    error.push("Email is invalid");
    isValid = false;
  }

  return { isValid, error };
};

export default validateEmail;
