import { prisma } from "src/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username, time: Date.now() },
      process.env.JWT_SECRET as string,
      { expiresIn: "12h" }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("EMPLOYEE_MANAGER", token, {
        httpOnly: true,
        maxAge: 12 * 60 * 60 * 1000,
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
    );
    res.json(user);
  } else {
    res.status(401).json({ message: "خطأ في اسم المتسخدم او كلمة السر" });
  }
};
