import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface InitializeUserResponse {
  challengeId: string;
}

export const initializeUser = async (): Promise<InitializeUserResponse | undefined> => {
  const idempotencyKey = uuidv4();

  const url = 'https://api.circle.com/v1/w3s/user/initialize';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'X-User-Token': `${import.meta.env.VITE_USER_TOKEN}`,
  };
  const data = {
    idempotencyKey,
    blockchains: ['MATIC-AMOY'],
  };

  try {
    const response = await axios.post<{ data: InitializeUserResponse }>(url, data, { headers });
    console.log('idempotency key:', idempotencyKey);
    return response.data.data;
  } catch (error) {
    console.error('Error initializing user:', error);
    return undefined;
  }
};
