import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 lg:flex">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Why Choose US
          </h3>
          <p className="mt-3 max-w-xl mx-auto lg:mx-0">
            At RouteRover, we&apos;re dedicated to your journey. With a focus on
            excellence and innovation, we provide top-notch service and
            convenience. From our diverse vehicle options to our easy booking
            platform, RouteRover is designed with you in mind. Whether
            you&apos;re renting, booking, or sharing, trust us to make your
            journey seamless. Experience the difference with RouteRover.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center w-full px-4 py-6 sm:w-auto lg:py-4"
              >
                <h4 className="text-4xl text-indigo-600 font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
