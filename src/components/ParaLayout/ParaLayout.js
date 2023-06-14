import React from "react";

const ParaLayout = (props) => {
  return (
    <div className={`flex gap-10 flex-col text-lg lg:flex-row ${props.className}`}>
      {props.image && props.imagePos === "left" && (
        <img src={props.image} className="w-1/2 mx-auto" />
      )}
      <div className="flex flex-col gap-6 w-full">
        {props.title && (
          <>
            <h3 className="text-4xl font-semibold">{props.title}</h3>
          </>
        )}
        <div className="flex gap-8 justify-between text-justify">
          {props.description && (
            <p className="text-gray-600">{props.description}</p>
          )}
        </div>

        {props.children}
      </div>
      {props.image && props.imagePos === "right" && (
        <img src={props.image} className="w-1/2 mx-auto" />
      )}
    </div>
  );
};

export default ParaLayout;
