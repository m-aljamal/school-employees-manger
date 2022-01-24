import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma";

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { EMPLOYEE_MANAGER: token }: any = req.cookies;

    if (token) {
      let user;
      try {
        const { id }: any = jwt.verify(token, process.env.JWT_SECRET as string);
        user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
          throw new Error("المستخدم غير موجود");
        }
      } catch (error) {
        return res.status(401).json({ message: "يجب تسجيل الدخول" });
      }
      return handler(req, res, user);
    }
    return res.status(401).json({ message: "يجب تسجيل الدخول" });
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, process.env.JWT_SECRET as string);
  return user;
};
