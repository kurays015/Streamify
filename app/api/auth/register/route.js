import { NextResponse } from "next/server";
import bcrypt, { hash } from "bcrypt";
import User from "../../../../models/user";
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("Email is already in use");
    }
    if (!email || !password) {
      throw new Error("All field are required");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await hash(password, salt);
    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "Success!" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err.message });
  }
}
