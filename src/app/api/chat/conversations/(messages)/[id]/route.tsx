import { NextResponse, NextRequest } from 'next/server';

import { BACKEND_CHAT_URL } from '@/lib/constants';
import { createApiClient } from '@/lib/apiClient';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const conversationId = params.id;
  const apiClient = createApiClient();
  const response = await apiClient.get(
    `${BACKEND_CHAT_URL}/conversations/${conversationId}`
  );

  const conversation = await response.data.data;

  console.log(conversation);

  return NextResponse.json(conversation);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let conversationId = params.id;

  const requestData = await request.json();

  const apiClient = createApiClient();

  if (conversationId === 'new') {
    const conversationResponse = await apiClient.post(
      `${BACKEND_CHAT_URL}/conversations`,
      requestData
    );

    if (conversationResponse.status !== 201) {
      throw new Error('Error in creating message');
    }

    console.log(conversationResponse);

    conversationId = await conversationResponse.data.data.id;
  }

  const messageResponse = await apiClient.post(
    `${BACKEND_CHAT_URL}/conversations/${conversationId}`,
    requestData
  );

  if (messageResponse.status !== 201) {
    throw new Error('Error in creating message');
  }

  const message = await messageResponse.data.data;

  const aiMessageResponse = await apiClient.post(
    `${BACKEND_CHAT_URL}/conversations/${conversationId}/get-response`,
    requestData
  );

  const aiMessage = await aiMessageResponse.data.data;

  console.log(`Ai Message: `, aiMessage);

  if (messageResponse.status !== 201) {
    throw new Error('Could not get Response');
  }

  return NextResponse.json({
    statusCode: 200,
    data: {
      conversationId,
      message,
      aiMessage,
    },
    message: 'Response for the user Message',
    success: true,
  });
}
