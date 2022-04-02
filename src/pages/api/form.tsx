import type { NextApiRequest, NextApiResponse } from "next";
import FormInterface from "../../common/interfaces/form";
import dbConnect from "../../common/libs/mongodb";
import FormModel from "../../common/libs/mongodb/Form";
import validateCard from "../../common/validations/fields/cardValidation";
import validateEmail from "../../common/validations/fields/emailValidation";
import validateMembers from "../../common/validations/fields/membersValidation";
import validateName from "../../common/validations/fields/validateName";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === "GET") {
    await dbConnect();
    const find = await FormModel.find({});
    return res.status(200).json(find);
  } else {
    // try {
    const { cardVariation, email, members, name, image, tag } =
      req.body as FormInterface & { cardVariation: string };

    const validations = [
      validateEmail(email),
      validateName(name, { minLength: 5, maxLength: 15, fieldName: "Name" }),
      validateName(tag, { minLength: 3, maxLength: 5, fieldName: "Tag" }),
      validateCard(cardVariation),
      validateMembers(members),
    ];

    const isValid = validations.every(validation => validation.isValid);
    if (!isValid) {
      const errors = validations
        .filter(validation => !validation.isValid)
        .map(validation => validation.error)
        .flat();
      return res.status(400).json({
        status: 400,
        message: "Invalid form data",
        errors,
      });
    }
    await dbConnect();
    const create = await FormModel.create({
      cardVariation,
      email,
      members,
      name,
      image,
      tag,
    });
    return res.status(200).json(create);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(500).json(error);
    // }
  }
}
