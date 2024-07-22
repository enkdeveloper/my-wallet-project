import React from 'react';
import AcquireTokenComponent from '../components/AcquireTokenComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const AcquireToken: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl mb-4 flex items-center space-x-2 text-white">
        <FontAwesomeIcon icon={faKey} />
        <span>Acquire Token</span>
      </h2>
      <AcquireTokenComponent />
    </div>
  );
};

export default AcquireToken;
