import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { type } = req.query;

    const latestMovies = await fetch(
      `${process.env.TMDB_API_BASEURL}/trending/${type}/week?api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=en-US`
    ).then((res) => res.json());

    return res.status(200).json(latestMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
