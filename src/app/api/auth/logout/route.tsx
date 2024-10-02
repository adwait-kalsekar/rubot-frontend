import { deleteTokens } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
  deleteTokens();
  return NextResponse.json({ message: 'User Logged Out' }, { status: 200 });
}
