import type { NextApiRequest, NextApiResponse } from "next";

import admin from "../../common/libs/firebase/admin";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not Allowed" });
    return;
  }
  const idToken = req.headers.token;
  if (!idToken) {
    res.status(406).json({ message: "Authentication Failed" });
    return;
  }
  return new Promise(resolve => {
    admin
      .auth()
      .verifyIdToken(idToken as string)
      .then(decodedToken => {
        const uid = decodedToken.uid;
        res.status(200).json({ message: uid });
        resolve();
      })
      .catch(error => {
        res.status(500).json({ message: "Authentication Failed", error });
        resolve();
      });
  });
}
