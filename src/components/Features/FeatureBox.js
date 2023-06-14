import React from "react";

const FeatureBox = (props) => {
  return (
    <div className="p-4 lg:w-1/2 h-inherit cursor-pointer text-lg md:w-full">
      <div className="flex border-2 h-full rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <img src={props.image} alt="feature-image" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
            {props.title}
          </h2>
          <p className="leading-relaxed text-lg">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
