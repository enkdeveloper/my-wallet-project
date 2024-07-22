import axios from 'axios';

interface CreatePinResponse {
  status: string;
}

export const createPin = async (pin: string, userToken: string): Promise<CreatePinResponse | undefined> => {
  const url = 'https://api.circle.com/v1/w3s/user/pin';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'X-User-Token': userToken,
  };
  const data = { pin };

  try {
    const response = await axios.post<{ data: CreatePinResponse }>(url, data, { headers });
    return response.data.data;
  } catch (error) {
    console.error('Error creating PIN:', error);
    return undefined;
  }
};
