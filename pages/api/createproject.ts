import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const project = await prisma.project.create({
    data: {
      name: req.body.name,
    },
  });
  res.json(project);
};
