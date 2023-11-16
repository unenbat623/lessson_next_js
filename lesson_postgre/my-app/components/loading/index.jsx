import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex gap-12">
        <img src="vector.png" />
        <img src="Geld.svg" className=" md:drop-shadow-xl px-2" />
        <div className="flex-col justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
          <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
