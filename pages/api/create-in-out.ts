import formatTime from "src/utils/formatTime";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, notes, in: inTime, out, attachment, employeeId } = req.body;

  const inOut = await prisma.inOut.create({
    data: {
      date: new Date(date),
      notes,
      in: formatTime(inTime),
      out: formatTime(out),
      attachment,
      employeeId,
    },
  });
  res.json(inOut);
};
