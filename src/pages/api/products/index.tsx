import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../common/libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const products = db.collection("products");
    const query = req.body;

    res.status(200).json(await products.find(query).toArray());
    return;
  } else {
    res.status(403).json({ message: "method not allowed" });
  }
}
