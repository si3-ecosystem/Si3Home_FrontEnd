"use client"
import React, { useState } from 'react';
import PasscodeForm from './PasscodeForm';
import HomePage from './HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen z-50 flex items-center justify-center bg-gray-100">
      <div className="">
        {isAuthenticated ? (
          <HomePage />
        ) : (
          <PasscodeForm onAuthentication={handleAuthentication} />
        )}
      </div>
    </div>
  );
}

export default App;
