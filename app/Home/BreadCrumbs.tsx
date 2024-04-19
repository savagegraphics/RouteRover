import React from "react";
import Select from "./Select";
import Selectone from "./Selectone";

type Props = {};

const BreadCrumbs = (props: Props) => {
  return (
    <div className="mb-16">
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-900 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded-xl shadow sm:divide-y-0 sm:max-w-screen-sm md:grid-cols-3 lg:grid-cols-3 lg:max-w-screen-lg">
          <div className="inline-block p-8 text-center items-center">
            <div className="font-bold tracking-wide text-gray-800">
              <div className="font-bold text-xl pb-2">Location</div>
              <Selectone />
            </div>
          </div>
          <div className="inline-block p-8 text-center items-center">
            <div className="font-bold tracking-wide text-gray-800">
              <div className="font-bold text-xl pb-2">Location</div>
              <Select />
            </div>
          </div>
          <div className="inline-block p-8 text-center items-center">
            <div className="font-bold tracking-wide text-gray-800">
              <div className="font-bold text-xl pb-2">Pick Up</div>
              <Select />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
