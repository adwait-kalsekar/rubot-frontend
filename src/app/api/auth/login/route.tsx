'use server';

import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/lib/auth';
import { LoginResponse } from '@/types/auth';
import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

const BACKEND_LOGIN_URL = `${process.env.BACKEND_API_URL}/users/login`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const currAccessToken = getAccessToken();
  console.log(currAccessToken);
  if (currAccessToken) {
    return NextResponse.json(
      {
        loggedIn: true,
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      loggedIn: false,
    },
    { status: 400 }
  );
}

export async function POST(request: NextRequest) {
  const currAccessToken = getAccessToken();
  const currRefreshToken = getRefreshToken();

  console.log(`accessToken: ${currAccessToken}`);
  console.log(`refreshToken: ${currRefreshToken}`);
  const requestData = await request.json();

  const response = await axios.post(BACKEND_LOGIN_URL, requestData);

  if (response.status === 200) {
    console.log('logged in');
    const data: LoginResponse = response.data.data;
    const { accessToken, refreshToken } = data;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    return NextResponse.json(
      {
        loggedIn: true,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      loggedIn: false,
    },
    { status: 400 }
  );
}
