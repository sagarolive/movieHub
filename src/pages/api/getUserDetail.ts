import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { session_id } = req.query;

    const user = await fetch(
      `${process.env.TMDB_API_BASEURL}/account?api_key=${process.env.TMDB_API_KEY}&session_id=${session_id}`
    ).then((res) => res.json());

    console.log("session", user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
