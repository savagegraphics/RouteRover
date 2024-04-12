import React from "react";
import { Button } from "@nextui-org/react";

const Card = () => {
  // Array of card details
  const cardDetails = [
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "4" },
        { label: "Luggage", value: "4" },
        { label: "Door", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "500" },
        { label: "Engine", value: "3000" },
        { label: "Drive", value: "4" },
        { label: "Type", value: "Hatchback" },
      ],
      price: "$56",
    },
    // Add more card details as needed
  ];

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
        {cardDetails.map((card, index) => (
          <a
            key={index}
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src={card.image}
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              {card.leftDetails.map((detail, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="w-1/2 text-left">
                    {detail.label}: {detail.value}
                  </p>
                  {/* Only display value on the right */}
                  {index < card.rightDetails.length && (
                    <p className="w-1/2 text-right">
                      {card.rightDetails[index].label}:{" "}
                      {card.rightDetails[index].value}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <p className="w-1/2  text-left">Per Hours</p>
              </div>

              <div className="flex justify-between mt-2">
                <p className="w-1/2 text-left font-bold">{card.price}</p>
                <p className="w-1/2 text-right">
                  <Button className="bg-black text-white">Button</Button>
                </p>
              </div>
            </div>
          </a>
        ))}
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
