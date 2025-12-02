import React from "react";

const Video = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="text-start mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4">
          Learn About Plant Care
        </h1>
        <p className="text-lg text-gray-600 mx-auto">
          Watch our comprehensive guide to keeping your plants healthy
        </p>
      </div>
      <div className="flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl w-2xl max-w-4xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MucqGCYA2H8"
            title="Plant Care Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
