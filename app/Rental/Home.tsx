import React from "react";
import Hero from "./Content/Hero";
import Select from "./Single/Select";
import Selectone from "./Single/Selectone";
import BreadCrumbs from "../Home/BreadCrumbs";
import TheHero from "./TheHero";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      {/* <BreadCrumbs /> */}
      <TheHero />
    </div>
  );
};

export default Home;
