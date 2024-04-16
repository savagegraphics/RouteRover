import { Avatar } from "@nextui-org/react";
import React from "react";

type Props = {};

const Customers = (props: Props) => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yY3ljbGUlMjBhbmQlMjAlMjBleG90aWNjYXJ8ZW58MHx8MHx8fDA%3D",
      name: "Ian McArthur",
      title: "Business Manager",
      quote:
        'I love using RouteRover for my adventures. Their vehicles are always in top condition, and the booking process is a breeze. Five stars!"',
    },
    {
      avatar:
        "https://media.istockphoto.com/id/1831623882/photo/mechanic-driving-a-car-at-a-car-dealership.webp?b=1&s=170667a&w=0&k=20&c=Oo2nMybiRik8009gK_6CJMlo2MH-6M7h1E2ya3mVqP4=",
      name: "Juan Angel",
      title: "IT Consultant",
      quote:
        "RouteRover exceeded my expectations! Seamless booking, friendly service, and a fantastic ride. Highly recommend!",
    },
    {
      avatar:
        "https://plus.unsplash.com/premium_photo-1667520158382-e05cf39670df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JjeWNsZSUyMGFuZCUyMCUyMGV4b3RpY2NhcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Micheal Abimbola",
      title: "UFC Fighter",
      quote:
        "Amazing experience with RouteRover. From start to finish, everything was smooth and hassle-free. Will definitely be using them again!",
    },
  ];

  return (
    <section className="relative py-14">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What Our Customers Saying
          </h3>
          <p className="mt-3 text-gray-600">
            Elevate your journey with RouteRover. From our diverse vehicle
            options to our commitment to excellence, we&apos;re dedicated to
            making every mile memorable for you.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <div key={idx} className="">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                  <div>
                    <img
                      src={item.avatar}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                    <h3 className="text-xl font-medium text-white">
                      {" "}
                      {item.name}
                    </h3>
                    <p className="mb-1 text-sm text-white text-opacity-80">
                      {item.title}
                    </p>
                    <p className="mt-1 text-white text-opacity-80">
                      {" "}
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
export default Customers;
