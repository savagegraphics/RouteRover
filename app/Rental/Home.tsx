import React from "react";
import Hero from "./Content/Hero";
import Select from "./Single/Select";
import Selectone from "./Single/Selectone";
import BreadCrumbs from "../Home/BreadCrumbs";
import TheHero from "./TheHero";
import Card from "./Card";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      {/* <BreadCrumbs /> */}
      <TheHero />
      <Card />
    </div>
  );
};

export default Home;
