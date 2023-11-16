import React from "react";

const Currency = () => {
  return (
    <div className="h-sreen w-full">
      <div className="gap-12">
        <div className="flex">
          <img src="vector.png" />
          <img src="Geld.svg" className=" md:drop-shadow-xl px-2" />
        </div>
        <div className="flex-col">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div>
        <img src="" />
        <div>Select base currency</div>
      </div>
      <div>
        <input
          type=""
          placeholder=""
          className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-lg p-4"
        />
      </div>
      <p className="text-slate-600">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </p>
    </div>
  );
};

export default Currency;
