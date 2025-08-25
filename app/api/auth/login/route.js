import connectDB from '@/lib/db';
import User from '@/models/User';
import { verifyPassword, generateToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateToken(user);
    return NextResponse.json({ token, user: { id: user._id, email: user.email, name: user.name } });
} catch (error) {
  console.error("Login API error:", error);  // ✅ log real error
  return NextResponse.json({ error: 'Server error' }, { status: 500 });
}

}