import axios from 'axios';

interface CreateRecoveryResponse {
  status: string;
}

export const createRecovery = async (recoveryPhrase: string, userToken: string): Promise<CreateRecoveryResponse | undefined> => {
  const url = 'https://api.circle.com/v1/w3s/user/recovery';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'X-User-Token': userToken,
  };
  const data = { recoveryPhrase };

  try {
    const response = await axios.post<{ data: CreateRecoveryResponse }>(url, data, { headers });
    return response.data.data;
  } catch (error) {
    console.error('Error creating recovery method:', error);
    return undefined;
  }
};
