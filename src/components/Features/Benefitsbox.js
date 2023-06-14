import React from "react";

const Benefitsbox = (props) => {
  return (
    <div className="flex w-full items-center  mx-auto border-b pb-10 mb-10 border-gray-200 gap-4 lg:gap-0 lg:flex-row flex-col">
      <div
        className={`sm:w-48 ${
          props.imagePos === "left" ? "block" : "hidden"
        } sm:h-48 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0`}
      >
        <img src={props.image} alt="feature-image" className="rounded-full" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 order-1 lg:order-[0]">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
          {props.title}
        </h2>
        <p className="leading-relaxed text-lg">{props.description}</p>
      </div>

      <div
        className={`sm:w-48 ${
          props.imagePos === "right" ? "block" : "hidden"
        } sm:h-48 h-32 w-32 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0`}
      >
        <img src={props.image} alt="feature-image" className="rounded-full" />
      </div>
    </div>
  );
};

export default Benefitsbox;
