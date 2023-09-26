import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: { email: email }
    })
    if (existingUser) {
      return NextResponse.json({ user: null, message: 'Email is taken!' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await prismadb.user.create({
      data: {
        email, username, hashedPassword, image: '', emailVerified: new Date()
      }
    })

    return NextResponse.json({ user: newUser, message: 'User created successfully!' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "server error, please try again" }, { status: 500 })
  }
}