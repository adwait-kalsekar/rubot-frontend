import { NextResponse, NextRequest } from 'next/server';

import { BACKEND_CHAT_URL } from '@/lib/constants';
import { createApiClient } from '@/lib/apiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const apiClient = createApiClient();
  const response = await apiClient.get(`${BACKEND_CHAT_URL}/conversations`);

  const conversations = response.data.data;

  return NextResponse.json(conversations);
}
