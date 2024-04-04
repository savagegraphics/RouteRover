import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

type Props = {};

const First = (props: Props) => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video rounded-xl"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, it&apos;s free
            </span>
            <h3 className="text-3xl font-bold">Rent A Car</h3>
            <div className="flex gap-4 items-center mt-4">
              <Button size="sm">COMFORT</Button>
              <Button size="sm">LUXURY</Button>
              <Button size="sm">PRESTIGE</Button>
            </div>
            <p className="my-6 dark:text-gray-600">
              Unlock your journey&apos;s potential with RouteRover&apos;s
              Rent-A-Car feature. Select from a range of reliable vehicles
              tailored to your needs and preferences. Enjoy seamless booking and
              transparent pricing, backed by our dedicated support team. Your
              adventure begins here.
            </p>
            <button
              type="button"
              className="self-start text-white bg-blue-500 px-6 py-2 rounded-lg"
            >
              Rent Car
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video rounded-xl"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, it&apos;s free
            </span>
            <h3 className="text-3xl font-bold">Rent A Bike </h3>
            <div className="flex gap-4 items-center mt-4">
              <Button size="sm">COMFORT</Button>
              <Button size="sm">LUXURY</Button>
              <Button size="sm">PRESTIGE</Button>
            </div>
            <p className="my-6 dark:text-gray-600">
              Discover the freedom of the open road with RouteRover&apos;s
              Rent-A-Bike feature. Choose from a variety of high-quality bikes
              to suit your adventure, whether it&apos;s exploring the city
              streets or tackling rugged trails. With easy booking and
              transparent pricing, renting a bike with RouteRover is a breeze.
              Start your journey today
            </p>
            <button
              type="button"
              className="self-start text-white bg-blue-500 px-6 py-2 rounded-lg"
            >
              Rent Car
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video rounded-xl"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600"></span>
            <h3 className="text-3xl font-bold">
              Do Yo Want To Share Your Vehicle
            </h3>
            <p className="my-6 dark:text-gray-600">
              Ready to share your vehicle? With RouteRover&apos;s Vehicle
              Sharing feature, you can put your idle car to work and earn extra
              income. Our platform makes it easy to list your vehicle, set your
              own schedule, and connect with potential renters. Whether
              you&apos;re looking to offset ownership costs or simply help out
              fellow travelers, vehicle sharing with RouteRover is a win-win
              solution. Join our community of vehicle owners today.
            </p>
            <button
              type="button"
              className="self-start text-white bg-blue-500 px-6 py-2 rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
