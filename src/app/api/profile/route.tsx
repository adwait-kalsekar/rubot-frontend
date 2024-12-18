import { NextResponse, NextRequest } from 'next/server';

import { BACKEND_AUTH_URL } from '@/lib/constants';
import { createApiClient } from '@/lib/apiClient';
import { Profile } from '@/types/profile';
import { User } from '@/types/auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const apiClient = createApiClient();
  const response = await apiClient.get(`${BACKEND_AUTH_URL}/profile`);

  const profile: Profile = response.data.data;

  return NextResponse.json(profile);
}

export async function POST(request: NextRequest) {
  const apiClient = createApiClient();

  const user = await request.json();

  const userProfile = {
    email: user.email,
    username: user.username,
    fullName: user.fullName,
    profile: {
      avatar: user.avatar,
      canvasApiKey: user.canvasApiKey,
      isStudent: user.isStudent,
    },
  };

  console.log(userProfile);
  const response = await apiClient.put(
    `${BACKEND_AUTH_URL}/profile`,
    userProfile
  );
  return NextResponse.json(
    {
      message: 'Profile Updated Successfully',
    },
    { status: 200 }
  );
}
