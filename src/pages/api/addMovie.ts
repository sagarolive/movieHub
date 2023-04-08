import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const {
      title,
      releaseYear,
      description,
      genre,
      director,
      country,
      runtime,
      video,
      thumbNailUrl,
    } = req.body;

    const movie = await prismadb.movie.create({
      data: {
        title,
        description,
        director,
        releaseYear,
        runtime,
        thumbNailUrl,
        video,
        rating: 0.0,
      },
    });

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
