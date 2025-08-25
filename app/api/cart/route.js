import connectDB from '@/lib/db';
import Cart from '@/models/Cart';
import { verifyToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = verifyToken(token);
    await connectDB();
    const cart = await Cart.findOne({ userId: id }).populate('items.productId');
    return NextResponse.json(cart || { items: [] });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = verifyToken(token);
    await connectDB();
    const { productId, quantity } = await request.json();

    let cart = await Cart.findOne({ userId: id });
    if (!cart) {
      cart = new Cart({ userId: id, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }
    await cart.save();
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}