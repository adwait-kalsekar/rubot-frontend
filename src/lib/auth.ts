import { cookies } from 'next/headers';

const TOKEN_AGE = 3600;
const ACCESS_TOKEN_NAME = 'auth-token';
const REFRESH_TOKEN_NAME = 'auth-refresh-token';

// api requests
export function getAccessToken() {
  const currAuthToken = cookies().get(ACCESS_TOKEN_NAME);
  return currAuthToken?.value;
}

export function getRefreshToken() {
  const currAuthToken = cookies().get(REFRESH_TOKEN_NAME);
  return currAuthToken?.value;
}

// login
export function setAccessToken(accessToken: string) {
  cookies().set({
    name: ACCESS_TOKEN_NAME,
    value: accessToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE,
  });
}

export function setRefreshToken(refreshToken: string) {
  cookies().set({
    name: REFRESH_TOKEN_NAME,
    value: refreshToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE,
  });
}

// logout
export function deleteTokens() {
  cookies().delete(ACCESS_TOKEN_NAME);
  cookies().delete(REFRESH_TOKEN_NAME);
  return;
}
