import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    const { keyword, page } = req.query;
    const genres = await fetch(
      `${process.env.TMDB_API_BASEURL}/search/keyword?api_key=${process.env.TMDB_API_KEY}&page=${page}&query=${keyword}`
    ).then((res) => res.json());

    return res.status(200).json(genres);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
