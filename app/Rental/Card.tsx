import React from "react";
import Link from "next/link";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Blog
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          See how game-changing companies are making the most of every
          engagement with Preline.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco="
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Jeep Renegade
            </h3>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Seats: 4</p>
              <p className="w-1/2 text-right">Horsepower: 500</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Luggage: 4</p>
              <p className="w-1/2 text-right">Engine: 3000</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Door: 4</p>
              <p className="w-1/2 text-right">Drive: 4</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Fuel: Petrol</p>
              <p className="w-1/2 text-right">Type: Hatchback</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Per Hours</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left font-bold">$56</p>
              <p className="w-1/2 text-right">right paragraph.</p>
            </div>
          </div>
        </a>

        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Jeep Renegade
            </h3>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Seats: 4</p>
              <p className="w-1/2 text-right">Horsepower: 500</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Luggage: 4</p>
              <p className="w-1/2 text-right">Engine: 3000</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Door: 4</p>
              <p className="w-1/2 text-right">Drive: 4</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Fuel: Petrol</p>
              <p className="w-1/2 text-right">Type: Hatchback</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Per Hours</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left font-bold">$56</p>
              <p className="w-1/2 text-right">right paragraph.</p>
            </div>
          </div>
        </a>

        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Jeep Renegade
            </h3>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Seats: 4</p>
              <p className="w-1/2 text-right">Horsepower: 500</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Luggage: 4</p>
              <p className="w-1/2 text-right">Engine: 3000</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Door: 4</p>
              <p className="w-1/2 text-right">Drive: 4</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Fuel: Petrol</p>
              <p className="w-1/2 text-right">Type: Hatchback</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Per Hours</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left font-bold">$56</p>
              <p className="w-1/2 text-right">right paragraph.</p>
            </div>
          </div>
        </a>
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Jeep Renegade
            </h3>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Seats: 4</p>
              <p className="w-1/2 text-right">Horsepower: 500</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Luggage: 4</p>
              <p className="w-1/2 text-right">Engine: 3000</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Door: 4</p>
              <p className="w-1/2 text-right">Drive: 4</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left">Fuel: Petrol</p>
              <p className="w-1/2 text-right">Type: Hatchback</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="w-1/2  text-left">Per Hours</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2  text-left font-bold">$56</p>
              <p className="w-1/2 text-right">right paragraph.</p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Read more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
