import React from 'react';
import AppIdComponent from '../components/AppIdComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

const GetAppId: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl mb-4 flex items-center space-x-2 text-white">
        <FontAwesomeIcon icon={faIdBadge} />
        <span>Get App ID</span>
      </h2>
      <AppIdComponent />
    </div>
  );
};

export default GetAppId;
