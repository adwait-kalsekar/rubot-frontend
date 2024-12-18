'use server';

import axios, { AxiosError } from 'axios';
import { NextResponse, NextRequest } from 'next/server';

import { BACKEND_AUTH_URL } from '@/lib/constants';

const BACKEND_SIGNUP_URL = `${BACKEND_AUTH_URL}/users/register`;

export async function POST(request: NextRequest) {
  // const currAccessToken = getAccessToken();
  // const currRefreshToken = getRefreshToken();

  const requestData = await request.json();

  try {
    const response = await axios.post(BACKEND_SIGNUP_URL, requestData);

    console.log(response.status);

    if (response.status === 201) {
      console.log('registration successful');
      const data = response.data.data;

      return NextResponse.json(
        {
          data,
        },
        { status: 201 }
      );
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.status === 409) {
        return NextResponse.json(
          {
            error: 'User with email or username already exists',
          },
          { status: 409 }
        );
      } else {
        return NextResponse.json(
          {
            error: 'Something went wrong',
          },
          { status: 500 }
        );
      }
    }
  }
}
