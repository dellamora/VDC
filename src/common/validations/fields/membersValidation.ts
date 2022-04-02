import FormInterface from "../../interfaces/form";

export const validateIndividualMember = (
  member: FormInterface["members"][0],
  index: number,
): {
  isValid: boolean;
  error: string[];
} => {
  const error: string[] = [];
  let isValid = true;
  if (!member.twitter) {
    error.push(`Member ${index + 1} twitter is required`);
    isValid = false;
  }
  if (!member.username) {
    error.push(`Member ${index + 1} Valorant Username is required`);
    isValid = false;
  } else {
    if (
      member.username.split(" ").length !== 2 ||
      member.username.split("#").length !== 2
    ) {
      error.push(
        `Member ${
          index + 1
        } Valorant Username is invalid. Valid Example: dellamora #bzz`,
      );
      isValid = false;
    }
  }

  return {
    isValid,
    error,
  };
};

const validateMembers = (
  members: FormInterface["members"],
): {
  isValid: boolean;
  error: string[];
} => {
  const error: string[] = [];
  let isValid = true;
  if (!members || members.length === 0) {
    return { isValid: false, error: ["Members are required"] };
  }

  if (members.length !== 5) {
    error.push("A team must have 5 members.");
    isValid = false;
  }

  const uniqueMembers = members.reduce((acc, curr) => {
    if (!acc.includes(curr.username)) {
      acc.push(curr.username);
    }
    return acc;
  }, []);

  if (uniqueMembers.length !== 5) {
    error.push("Each member must be unique.");
    isValid = false;
  }

  members.forEach((member, index) => {
    const response = validateIndividualMember(member, index);
    if (!response.isValid) {
      error.push(...response.error);
      isValid = false;
    }
  });

  return {
    isValid,
    error,
  };
};

export default validateMembers;
