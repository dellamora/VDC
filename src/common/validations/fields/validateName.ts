const validateName = (
  name: string,
  settings: { fieldName: string; minLength: number; maxLength: number },
): {
  isValid: boolean;
  error: string[];
} => {
  const error: string[] = [];
  const { minLength, maxLength, fieldName } = settings;
  let isValid = true;

  if (!name) {
    return { isValid: false, error: [`${fieldName} is required`] };
  }

  if (name.length < minLength) {
    error.push(`${fieldName} must be at least ${minLength} characters`);
    isValid = false;
  }

  if (name.length > maxLength) {
    error.push(`${fieldName} must be less than ${maxLength} characters`);
    isValid = false;
  }

  return { isValid, error };
};

export default validateName;
