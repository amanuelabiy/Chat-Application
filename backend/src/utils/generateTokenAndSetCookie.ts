import jwt from "jsonwebtoken";
import { Response } from "express";

const generateTokenAndSetCookie = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevents XSS cross site scripting
    sameSite: "strict", //CSRF attack prevention
    secure: process.env.NODE_ENV !== "development", //In production site will be HTTPS
  });

  return token;
};

export default generateTokenAndSetCookie;
