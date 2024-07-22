import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface CreateUserResponse {
  userId: string;
  status: number;
}

interface CreateUserData {
  userId: string;
}

export const createUser = async (): Promise<CreateUserResponse | undefined> => {
  const userId = uuidv4();

  const options = {
    method: 'POST',
    url: 'https://api.circle.com/v1/w3s/users',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    data: { userId } as CreateUserData,
  };

  try {
    const response = await axios.request(options);
    console.log('user id: ', userId);
    console.log('status:', response.status);
    return {
      userId,
      status: response.status,
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return undefined;
  }
};
