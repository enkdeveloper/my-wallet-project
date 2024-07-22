import React from 'react';
import CreateUserComponent from '../components/CreateUserComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const CreateUser: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl mb-4 flex items-center space-x-2 text-white">
        <FontAwesomeIcon icon={faUserPlus} />
        <span>Create User</span>
      </h2>
      <CreateUserComponent />
    </div>
  );
};

export default CreateUser;
