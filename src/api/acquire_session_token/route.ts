import axios from 'axios';

interface AcquireTokenResponse {
  userToken: string;
  encryptionKey: string;
}

export const acquireToken = async (userId: string): Promise<AcquireTokenResponse | undefined> => {
  const url = 'https://api.circle.com/v1/w3s/users/token';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  };
  const data = { userId };

  try {
    const response = await axios.post<{ data: AcquireTokenResponse }>(url, data, { headers });
    return response.data.data;
  } catch (error) {
    console.error('Error acquiring session token:', error);
    return undefined;
  }
};
