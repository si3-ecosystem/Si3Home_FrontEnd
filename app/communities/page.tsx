"use client"
import React, { useState, useEffect } from 'react';
import PasscodeForm from './PasscodeForm';
import HomePage from './HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate loading time for demonstration purposes
    setTimeout(() => {
      const storedAuth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(storedAuth === 'true');
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  }, []); // Empty dependency array to run only once on mount

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  // While loading, show a loading indicator or nothing
  if (isLoading) {
    return null; // or render a loading indicator if needed
  }

  // Once loaded, show either HomePage or PasscodeForm based on authentication status
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

