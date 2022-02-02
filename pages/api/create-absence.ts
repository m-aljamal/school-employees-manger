import formatTime from "src/utils/formatTime";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, notes, approved, reason, attachment } = req.body;

  const absence = await prisma.absence.create({
    data: {
      employeeId: "ckz5ihqii0010oayv499791f4",
      date: new Date(date),
      notes,
      reason,
      attachment,
    },
  });
  res.json(absence);
};
