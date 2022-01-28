import { NextApiRequest, NextApiResponse } from "next";
import formatTime from "src/utils/formatTime";
import { prisma } from "src/utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    jobTitle,
    salary,
    startDate,
    endDate,
    workContract,
    avatar,
    workHours,
    startTime,
    endTime,
  } = req.body;
  const employee = await prisma.employee.create({
    data: {
      name,
      jobTitle,
      avatar,
      salary: +salary,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      workContract,
      workHours: +workHours,
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      projectId: "ckyvw8vm9001464yve6lin8wy",
    },
  });
  res.json("employee");
};
