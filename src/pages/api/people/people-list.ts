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

    const peopleList = await fetch(
      `${process.env.TMDB_API_BASEURL}/person/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}&language=en-US`
    ).then((res) => res.json());

    return res.status(200).json(peopleList);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
