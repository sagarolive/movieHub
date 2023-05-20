import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const { username, password } = JSON.parse(req.body);

    const requestToken = await fetch(
      `${process.env.TMDB_API_BASEURL}/authentication/token/new?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json());
    console.log("requestToken", requestToken);
    const loginResponse = await fetch(
      `${process.env.TMDB_API_BASEURL}/authentication/token/validate_with_login?api_key=${process.env.TMDB_API_KEY}&username=${username}&password=${password}&request_token=${requestToken.request_token}`,
      {
        method: "POST",
      }
    ).then((res) => res.json());

    return res.status(200).json(loginResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
