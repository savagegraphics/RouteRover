import React from "react";
import Select from "./Select";
import Selectone from "./Selectone";
import Search from "./Search";
import Exoticar from "@/public/exoticar.jpg";

type Props = {};

const BreadCrumbs = (props: Props) => {
  return (
    <div className="mb-16">
      {/* <div className="bg-gray-800">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div> */}
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-900 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded-xl shadow sm:divide-y-0 sm:max-w-screen-sm md:grid-cols-3 lg:grid-cols-5 lg:max-w-screen-xl">
          <div className="inline-block p-8 text-center items-center">
            <p className="font-bold tracking-wide text-gray-800">
              <Search />
            </p>
          </div>
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
              <Selectone />
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
