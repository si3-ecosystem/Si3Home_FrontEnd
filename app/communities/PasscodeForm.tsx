import React, { useState } from 'react';
import "../../app/community.css";

function PasscodeForm({ onAuthentication }: any) {
  const [passcode, setPasscode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      if (passcode.trim() === '1234') {
        setIsAuthenticated(true);
        onAuthentication();
      } else {
        alert('Incorrect passcode. Please try again.');
        setPasscode('');
      }
      setIsLoading(false);
    }, 3000);
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
