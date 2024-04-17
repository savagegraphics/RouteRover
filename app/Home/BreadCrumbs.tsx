import React from "react";
import Select from "./Select";
import Selectone from "./Selectone";

type Props = {};

const BreadCrumbs = (props: Props) => {
  return (
    <div className="mb-16">
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-900 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded-xl shadow sm:divide-y-0 sm:max-w-screen-sm md:grid-cols-3 lg:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center items-center">
            <p className="font-bold tracking-wide text-gray-800">
              <Selectone />
            </p>
          </div>
          <div className="inline-block p-8 text-center items-center">
            <p className="font-bold tracking-wide text-gray-800">
              <Select />
            </p>
          </div>
          <div className="inline-block p-8 text-center items-center">
            <p className="font-bold tracking-wide text-gray-800">
              <Select />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
