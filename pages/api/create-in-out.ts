import formatTime from "src/utils/formatTime";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
import { discountText } from "src/utils/appText";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, notes, discount, attachment, employeeId } = req.body;

  const inOut = await prisma.inOut.create({
    data: {
      date: new Date(date),
      notes,
      attachment,
      employeeId,
      discount: caclulateDiscount(discount),
    },
  });
  res.json(inOut);
};

const caclulateDiscount = (discount: string): number => {
  const { oneClass, twoClass, oneDay } = discountText;
  if (discount === oneClass) return 20;
  if (discount === twoClass) return 40;
  if (discount === oneDay) return 100;
  else return 0;
};
