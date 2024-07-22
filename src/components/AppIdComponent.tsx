import React, { useState } from 'react';
import { getAppId } from '../api/get_app_id/route';

const AppIdComponent: React.FC = () => {
  const [appId, setAppId] = useState<string | null>(null);

  const fetchAppId = async () => {
    try {
      const data = await getAppId();
      setAppId(data || 'Error fetching App ID');
    } catch (error) {
      console.error('Failed to fetch App ID:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300 w-full"
        onClick={fetchAppId}
      >
        Get App ID
      </button>
      {appId && <p className="mt-4 text-white">App ID: {appId}</p>}
    </div>
  );
};

export default AppIdComponent;
