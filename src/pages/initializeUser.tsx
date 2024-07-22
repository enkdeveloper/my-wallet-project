import React from 'react';
import InitializeUserComponent from '../components/InitializeUserComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const InitializeUser: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4 flex items-center space-x-2">
        <FontAwesomeIcon icon={faWallet} />
        <span>Initialize User</span>
      </h2>
      <InitializeUserComponent />
    </div>
  );
};

export default InitializeUser;
