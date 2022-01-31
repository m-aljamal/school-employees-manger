import formatTime from "src/utils/formatTime";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, notes, approved, reason, attachment } = req.body;

  const absence = await prisma.absence.create({
    data: {
      employeeId: "ckz2rf30t00053uyvlb6foz7z",
      date: new Date(date),
      notes,
      approved: false,
      reason,
      attachment,
    },
  });
  res.json(absence);
};
