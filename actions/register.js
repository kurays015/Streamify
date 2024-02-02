"use server";
import { mongoDbConnection } from "@/lib/mongoose";
import User from "../models/user";
import bcrypt, { hash } from "bcrypt";
import { registerSchema } from "@/models/register";

export default async function handleRegister(data) {
  try {
    await mongoDbConnection();

    const result = registerSchema.parse({
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    const user = await User.findOne({ username: result.username });

    if (user) {
      throw new Error("Username is already in use");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await hash(result.password, salt);

    const newUser = await User.create({
      username: result.username,
      password: hashedPassword,
    });

    return {
      success: true,
      username: newUser.username,
    };
  } catch (error) {
    return { error: error.message };
  }
}
