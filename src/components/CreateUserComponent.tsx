import React, { useState } from 'react';
import { createUser } from '../api/create_a_new_user/route';

const CreateUserComponent: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);

  const handleCreateUser = async () => {
    const response = await createUser();
    if (response) {
      setUserId(response.userId);
      setStatus(response.status);
    } else {
      setUserId('Error creating user');
      setStatus(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleCreateUser}
      >
        Create User
      </button>
      {userId && <p className="mt-4 text-white">User ID: {userId}</p>}
      {status !== null && <p className="mt-2 text-white">Status: {status}</p>}
    </div>
  );
};

export default CreateUserComponent;
