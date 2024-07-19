import React, { useState } from 'react';
import "../../app/community.css"; // Import your CSS file for styles

function PasscodeForm({ onAuthentication }: any) {
  const [passcode, setPasscode] = useState(''); // State for the passcode input
  const [isLoading, setIsLoading] = useState(false); // State for loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication status

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    // Simulate authentication delay
    setTimeout(() => {
      // Replace '1234' with your actual passcode
      if (passcode.trim() === '1234') {
        setIsAuthenticated(true); // Set authentication status to true
        onAuthentication(); // Callback function passed as prop on successful authentication
      } else {
        alert('Incorrect passcode. Please try again.');
        setPasscode(''); // Clear passcode input on incorrect entry
      }
      setIsLoading(false); // Set loading state back to false after authentication attempt
    }, 3000); // Simulate a delay of 3 seconds for authentication
  };

  return (
    <>
      <div className="flex justify-center items-center pb-10 lg:pt-32 min-h-screen w-screen px-4 lg:px-16 lg:bg-[url('/images/bgGradient.png')] bg-[length:100vw_150vh] bg-no-repeat bg-[#d6b3d2]">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-[#E591C5] mb-4 text-center">Protected Content</h1>
          <p className="text-gray-600 mb-6 text-center">Enter your passcode please.</p>

          <div className='flex justify-center'>
            {isLoading ? <i className="gg-lock-unlock text-green-500"></i> : <i className="gg-lock"></i>}
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full"
              placeholder="Enter passcode"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`w-full mt-4 px-6 py-3 bg-[#E591C5] text-white tracking-wider font-semibold rounded-lg shadow-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Unlock'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasscodeForm;
