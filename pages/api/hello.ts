// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  token?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const authHeader: string = req.headers.authorization || "";

  const token = authHeader.substring(7); // 'Bearer ' uzunluğu kadar olan kısmı atla

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const fakeUserData: Data = { name: "Fake User", token };

  res.status(200).json(fakeUserData);
}
