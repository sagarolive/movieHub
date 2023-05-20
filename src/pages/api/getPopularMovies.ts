import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { page } = req.query;

    const movies = await fetch(
      `${process.env.TMDB_API_BASEURL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}&language=en-US`
    ).then((res) => res.json());

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
