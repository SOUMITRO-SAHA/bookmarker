import { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.status(200).json({ message: "Welcome to the API route!" });
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
}
