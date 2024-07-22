import React, { useState } from 'react';
import { createRecovery } from '../api/create_recovery/route';

const CreateRecoveryComponent: React.FC = () => {
  const [recoveryPhrase, setRecoveryPhrase] = useState<string>('');
  const [status, setStatus] = useState<string | null>(null);

  const handleCreateRecovery = async () => {
    if (recoveryPhrase) {
      const response = await createRecovery(recoveryPhrase, process.env.NEXT_PUBLIC_USER_TOKEN as string);
      if (response) {
        setStatus('Recovery method created successfully');
      } else {
        setStatus('Error creating recovery method');
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Enter Recovery Phrase"
        value={recoveryPhrase}
        onChange={(e) => setRecoveryPhrase(e.target.value)}
        className="border p-2 rounded bg-gray-800 text-gray-100 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleCreateRecovery}
      >
        Create Recovery Method
      </button>
      {status && <p className="mt-4 text-white">{status}</p>}
    </div>
  );
};

export default CreateRecoveryComponent;
