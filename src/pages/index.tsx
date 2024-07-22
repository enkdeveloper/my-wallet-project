import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faUserPlus, faKey, faWallet } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
            <h1 className="text-3xl mb-6 font-bold">Wallet Project</h1>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link to="/getAppId" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                            <FontAwesomeIcon icon={faIdBadge} className="mr-2" />
                            <span>Get App ID</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/createUser" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                            <span>Create User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/acquireToken" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                            <FontAwesomeIcon icon={faKey} className="mr-2" />
                            <span>Acquire Token</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/initializeUser" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                            <FontAwesomeIcon icon={faWallet} className="mr-2" />
                            <span>Initialize User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/completeWallet" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                            <FontAwesomeIcon icon={faWallet} className="mr-2" />
                            <span>Complete Wallet</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
