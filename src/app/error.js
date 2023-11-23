"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-red-500">
        Something went wrong
      </h1>
      <button
        onClick={() => reset()}
        className="bg-amber-500 hover:bg-amber-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
