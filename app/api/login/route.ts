import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password } = body;

    const user = await prismadb.user.findUnique({
      where: { email: email }
    })
    if (!user) {
      return NextResponse.json({ user: null, message: 'User not found!' }, { status: 401 })
    }

    if (user.hashedPassword === null) {
      return NextResponse.json({ message: 'Password not set for this user' }, { status: 401 });
    }

    const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordsMatch) {
      return NextResponse.json({ message: "Invalid credentials. Please try again!" }, { status: 401 })
    }

    return NextResponse.json({ message: 'Logged in successfully!' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Server error, please try again" }, { status: 500 })
  }
}