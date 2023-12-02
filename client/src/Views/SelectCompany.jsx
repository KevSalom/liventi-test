import React from "react";
import Dropdown from "../Components/Dropdown";

const SelectCompany = () => {
  return (
    <div className=" min-h-screen w-screen bg-gray-400 flex justify-center">
      <section className="text-center w-[90%]   mt-10  lg:mt-28">
        <h1 className="text-gray-950 text-5xl lg:text-6xl leading-tight">
          Select a <span className="border-b-4 border-gray-950 ">company</span>{" "}
          to view details:
        </h1>
        <div className="max-w-md mx-auto my-16 ">
          <Dropdown />
        </div>
      </section>
    </div>
  );
};

export default SelectCompany;
