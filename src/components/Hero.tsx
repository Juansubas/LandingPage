import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankFill,
  RiPlayFill,
  RiRestartFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className=" md:col-span-5 flex items-center justify-center p-8">
        <div className="flex flex-col gap-8">
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
          <p className="text-gray-500 text-2xl leading-[2.5rem] ">
            Help find solutions with intitutive and in accoordance with cliente
            business goals. we provide a high-quality services.
          </p>
          <div className="flex items-center gap-4 ">
            <button className="bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="flex items-center text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="../../public/hero.png"
            alt=""
            className="w-[450px] h-[450px] object-cover -mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center max-w-[250px] gap-2 mx-auto">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 bg-white"
              />
              <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
              />
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
              />
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
              />
              <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
              />
            </div>
            <h2 className="text-xl font-medium traking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className=" text-primary text-8xl "/>
                <RiCheckboxBlankFill className="absolute -left-7 -top-7 text-white text-8xl"/>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-white border-[10px] border-primary rounded-full  -z-10  ">
          {" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;
