import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { page, search } = req.query;

    const results = await fetch(
      `${process.env.TMDB_API_BASEURL}/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${search}&page=${page}&language=en-US`
    ).then((res) => res.json());

    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
