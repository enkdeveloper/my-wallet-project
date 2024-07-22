import React from 'react';
import CreatePinComponent from '../components/CreatePinComponent';
import CreateRecoveryComponent from '../components/CreateRecoveryComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const CompleteWallet: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4 bg-gray-800 rounded-lg shadow-lg w-full">
      <div className="w-full">
        <h2 className="text-2xl mb-4 flex items-center space-x-2 text-white">
          <FontAwesomeIcon icon={faKey} />
          <span>Create PIN</span>
        </h2>
        <CreatePinComponent />
      </div>
      <div className="w-full">
        <h2 className="text-2xl mb-4 flex items-center space-x-2 text-white">
          <FontAwesomeIcon icon={faShieldAlt} />
          <span>Create Recovery Method</span>
        </h2>
        <CreateRecoveryComponent />
      </div>
    </div>
  );
};

export default CompleteWallet;

