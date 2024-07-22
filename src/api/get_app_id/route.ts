import axios from 'axios';

interface AppIdResponse {
  data: {
    appId: string;
  };
}

export const getAppId = async (): Promise<string | undefined> => {
  const options = {
    method: 'GET',
    url: 'https://api.circle.com/v1/w3s/config/entity',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  try {
    const response = await axios.request<AppIdResponse>(options);
    return response.data.data.appId;
  } catch (error) {
    console.error('Error fetching App ID:', error);
    return undefined;
  }
};
