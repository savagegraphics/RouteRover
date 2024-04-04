import React from "react";
import Hero from "./Home/Hero";
import First from "./MultiCard/First";
import WhyUs from "./Home/WhyUs";
import Customers from "./Home/Customers";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <First />
      <WhyUs />
      <Customers />
    </div>
  );
};

export default Home;
