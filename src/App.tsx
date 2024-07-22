import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GetAppId from './pages/getAppId';
import CreateUser from './pages/createUser';
import AcquireToken from './pages/acquireToken';
import InitializeUser from './pages/initializeUser';
import CompleteWallet from './pages/completeWallet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faIdBadge, faUserPlus, faKey, faWallet, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/logo.png'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-row items-start justify-start bg-gray-900 text-gray-100 p-4">
        <nav className="w-1/4">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Wallet Project Logo" className="h-16" />
          </div>
          <ul className="space-y-4">
            <li>
              <Link to="/getAppId" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faIdBadge} />
                <span>Get App ID</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/createUser" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create User</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/acquireToken" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faKey} />
                <span>Acquire Token</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/initializeUser" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faWallet} />
                <span>Initialize User</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/completeWallet" className="border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>Complete Wallet</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-3/4 p-4">
          <Routes>
            <Route path="/getAppId" element={<GetAppId />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/acquireToken" element={<AcquireToken />} />
            <Route path="/initializeUser" element={<InitializeUser />} />
            <Route path="/completeWallet" element={<CompleteWallet />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
