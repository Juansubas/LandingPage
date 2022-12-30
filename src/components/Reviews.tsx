import React from "react";

//Import Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] font-black text-center">
        Let’s hear What they says
      </h1>
      <div className="flex justify-center gap-4">
        <span>
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span>
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Reviews;
