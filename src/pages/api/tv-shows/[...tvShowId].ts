import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { tvShowId } = req.query;
    const movie = await fetch(
      `${process.env.TMDB_API_BASEURL}/tv/${tvShowId}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=credits,recommendations,videos`
    ).then((res) => res.json());

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
