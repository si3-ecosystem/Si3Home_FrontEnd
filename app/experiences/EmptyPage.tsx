// EmptyPage.tsx
import React from 'react';

const EmptyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[100vh] overflow-hidden p-5 ">
      <h2 className="text-center text-2xl font-bold mb-4">No Experiences Found</h2>
      <p className='text-center'> Check back later.</p>
    </div>
  );
};

export default EmptyPage;
