import React, { useState } from 'react';
import { acquireToken } from '../api/acquire_session_token/route';

const AcquireTokenComponent: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [encryptionKey, setEncryptionKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAcquireToken = async () => {
    if (userId) {
      const response = await acquireToken(userId);
      if (response) {
        setUserToken(response.userToken);
        setEncryptionKey(response.encryptionKey);
        setError(null);
      } else {
        setUserToken(null);
        setEncryptionKey(null);
        setError('Error acquiring token');
      }
    } else {
      setError('User ID is required');
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Enter user ID"
        value={userId || ''}
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 rounded bg-gray-800 text-gray-100 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleAcquireToken}
      >
        Acquire Token
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {userToken && <p className="mt-4 text-white">User Token: {userToken}</p>}
      {encryptionKey && <p className="mt-4 text-white">Encryption Key: {encryptionKey}</p>}
    </div>
  );
};

export default AcquireTokenComponent;
