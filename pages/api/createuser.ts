import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/utils/prisma";
import bcrypt from "bcrypt";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, username, password } = req.body;

  const salt = bcrypt.genSaltSync();
  let user;
  user = await prisma.user.findUnique({ where: { username } });
  if (user) {
    return res.status(401).json({ message: "المستخدم موجود مسبقا" });
  }
  try {
    user = await prisma.user.create({
      data: {
        name,
        username,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (error) {
    return res.status(401).json({ message: "المستخدم موجود مسبقاً" });
  }
  res.json(user);
};
