import React, { useState } from 'react';
import { initializeUser } from '../api/initialize_user/route';

const InitializeUserComponent: React.FC = () => {
  const [challengeId, setChallengeId] = useState<string | null>(null);

  const handleInitializeUser = async () => {
    const response = await initializeUser();
    if (response) {
      setChallengeId(response.challengeId);
    } else {
      setChallengeId('Error initializing user');
    }
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleInitializeUser}
      >
        Initialize User
      </button>
      {challengeId && <p className="mt-4">Challenge ID: {challengeId}</p>}
    </div>
  );
};

export default InitializeUserComponent;
