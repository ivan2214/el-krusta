import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className=" h-16 w-16 animate-spin rounded-full border-8  border-b-red-500  ease-linear"></div>
    </div>
  );
};

export default Loading;
