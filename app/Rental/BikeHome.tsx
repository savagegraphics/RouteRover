import React from "react";
import TheHero from "./CarStore/TheHero";
import Card from "./CarStore/Card";
import Footer from "../Home/Footer";

type Props = {};

const BikeHome = (props: Props) => {
  return (
    <div>
      <TheHero />
      {/* <Product /> */}
      <Card />
      <Footer />
    </div>
  );
};

export default BikeHome;
