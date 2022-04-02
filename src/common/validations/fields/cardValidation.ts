const validateCard = (
  cardNumber: string,
): {
  isValid: boolean;
  error: string[];
} => {
  const error: string[] = [];
  let isValid = true;

  if (cardNumber === undefined) {
    return { isValid: false, error: ["cardVariation is required"] };
  }
  if (![0, 1, 2].includes(parseInt(cardNumber))) {
    error.push("cardVariation is invalid");
    isValid = false;
  }
  return { isValid, error };
};

export default validateCard;
