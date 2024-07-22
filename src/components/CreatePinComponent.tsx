import React, { useState } from 'react';
import { createPin } from '../api/create_pin/route';

const CreatePinComponent: React.FC = () => {
  const [pin, setPin] = useState<string>('');
  const [status, setStatus] = useState<string | null>(null);

  const handleCreatePin = async () => {
    if (pin) {
      const response = await createPin(pin, process.env.NEXT_PUBLIC_USER_TOKEN as string);
      if (response) {
        setStatus('PIN created successfully');
      } else {
        setStatus('Error creating PIN');
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="password"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="border p-2 rounded bg-gray-800 text-gray-100 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleCreatePin}
      >
        Create PIN
      </button>
      {status && <p className="mt-4 text-white">{status}</p>}
    </div>
  );
};

export default CreatePinComponent;
