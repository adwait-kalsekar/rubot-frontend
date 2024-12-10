import { NextResponse, NextRequest } from 'next/server';

import { BACKEND_AUTH_URL } from '@/lib/constants';
import { createApiClient } from '@/lib/apiClient';
import { Profile } from '@/types/profile';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const apiClient = createApiClient();
  const response = await apiClient.get(`${BACKEND_AUTH_URL}/profile`);

  const profile: Profile = response.data.data;

  return NextResponse.json(profile);
}
