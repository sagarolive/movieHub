import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { peopleId } = req.query;

    const people = await fetch(
      `${process.env.TMDB_API_BASEURL}/person/${peopleId}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=changes,combined_credits,external_ids,images,movie_credits,tagged_images,tv_credits`
    ).then((res) => res.json());

    return res.status(200).json(people);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
