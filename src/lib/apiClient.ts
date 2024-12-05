import axios from 'axios';

import { getAccessToken } from './auth';

const createApiClient = () => {
  const accessToken = getAccessToken();
  // const refreshToken = getRefreshToken();

  const apiClient = axios.create({
    headers: {
      Authorization: `${accessToken}`,
    },
  });

  return apiClient;
};

export { createApiClient };
