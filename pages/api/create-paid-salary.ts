import formatTime from "src/utils/formatTime";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, notes, amount } = req.body;

  const inOut = await prisma.paidSalary.create({
    data: {
      date: new Date(date),
      notes,
      amount: parseFloat(amount),
      employeeId: "ckyvwrbaw00218cyvg36igd6c",
    },
  });
  res.json(inOut);
};
