import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen p-6 bg-sky-300">
        <div className="text-center bg-white rounded-xl">
          <div className=" text-yellow-500 w-800 font-bold rounded-lg border shadow-lg p-20">
            <p className="mb-4 text-5xl">Sorry, page not found</p>
            <div className="flex items-center justify-center">
              <img
                width={400}
                height={400}
                src="https://pbs.twimg.com/media/FNU7vUNVEAMM0PA.jpg"
                alt="sorry"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
