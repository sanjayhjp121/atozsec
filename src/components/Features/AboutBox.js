import React from "react";

const AboutBox = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-20 items-center">
      {props.imgPos === "right" && (
        <p className="text-lg text-gray-600 order-1 md:order-[0]">{props.description}</p>
      )}
      <img src={props.image} className="w-[250px]  mx-auto" />
      {props.imgPos === "left" && (
        <p className="text-lg text-gray-600 mt-8">{props.description}</p>
      )}
    </div>
  );
};

export default AboutBox;
