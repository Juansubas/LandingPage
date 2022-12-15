import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className=" md:col-span-5 flex items-center justify-center p-8">
        <div>
          <h1 className="text-7xl font-bold leading-[7.5rem] ">
            Web Design Impactful Digital{" "}
            <span className="text-primary py-2 px-10 border-8 border-primary relative">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-4 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p>Description</p>
          <p>Buttons</p>
        </div>
      </div>
      <div className="bg-red-600 md:col-span-3">Image</div>
    </section>
  );
};

export default Hero;
