import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const {
      page,
      sort_by,
      genre,
      release_date_gte,
      keyword,
      release_date_lte,
      vote_average_gte,
      vote_average_lte,
    } = req.query;

    const query = `&sort_by=${sort_by}&with_genres=${genre}&vote_average.lte=${vote_average_lte}&vote_average.gte=${vote_average_gte}&with_keywords=${keyword}&release_date.lte=${release_date_lte}&release_date.gte=${release_date_gte}`;

    const movies = await fetch(
      `${process.env.TMDB_API_BASEURL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&page=${page}&include_adult=false&language=en-US${query}`
    ).then((res) => res.json());

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
