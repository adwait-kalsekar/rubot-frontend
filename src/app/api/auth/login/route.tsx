'use server';

import axios, { AxiosError } from 'axios';
import { NextResponse, NextRequest } from 'next/server';

import {
  getAccessToken,
  // getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/lib/auth';
import { BACKEND_AUTH_URL } from '@/lib/constants';
import { LoginResponse } from '@/types/auth';

const BACKEND_LOGIN_URL = `${BACKEND_AUTH_URL}/users/login`;

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
  // const currAccessToken = getAccessToken();
  // const currRefreshToken = getRefreshToken();

  const requestData = await request.json();

  try {
    const response = await axios.post(BACKEND_LOGIN_URL, requestData);
    console.log(response.data);
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
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.status === 401) {
        return NextResponse.json(
          {
            loggedIn: false,
          },
          { status: 401 }
        );
      } else {
        return NextResponse.json(
          {
            loggedIn: false,
          },
          { status: 500 }
        );
      }
    }
  }

  // if (response.status === 500) {
  //   return NextResponse.json(
  //     {
  //       loggedIn: false,
  //     },
  //     { status: 500 }
  //   );
  // }
}
