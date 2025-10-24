import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <div className="h-16 w-16 border-4 border-emerald-200 rounded-full animate-spin border-t-emerald-600"></div>
        <div className="absolute inset-0 rounded-full blur-md bg-emerald-300 opacity-40 animate-pulse"></div>
      </div>
      <p className="mt-6 text-emerald-700 text-lg font-semibold tracking-wide animate-fadeIn">
        Loading, please wait...
      </p>
      <div className="flex space-x-1 mt-2">
        <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default Loading;
