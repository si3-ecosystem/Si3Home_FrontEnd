// components/AccessControl.tsx

import React, { useState } from 'react';

const AccessControl: React.FC = () => {
  const [code, setCode] = useState('');
  const [accessAllowed, setAccessAllowed] = useState(false);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleAccessAttempt = () => {
    if (code === '1234') {
      setAccessAllowed(true);
    } else {
      alert('Incorrect code. Please try again.');
      setCode('');
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pink-100">
      {!accessAllowed && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-800 mb-4">Please enter the access code:</p>
          <input
            type="password"
            value={code}
            onChange={handleCodeChange}
            className="border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-pink-500"
          />
          <button
            onClick={handleAccessAttempt}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessControl;
