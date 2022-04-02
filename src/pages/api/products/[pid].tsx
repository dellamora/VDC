import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../common/libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    const products = db.collection("products");
    const productId = req.query.pid;
    const product = await products.findOne({ id: productId });
    res.status(200).json(product);
    return;
  } else {
    res.status(403).json({ message: "method not allowed" });
  }
}
