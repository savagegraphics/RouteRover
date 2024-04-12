import React from "react";
import Hero from "./Content/Hero";
import Select from "./Single/Select";
import Selectone from "./Single/Selectone";
import BreadCrumbs from "./Single/BreadCrumbs";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Select />
      <div className="mt-4"></div>
      <Selectone />
      <BreadCrumbs />
    </div>
  );
};

export default Home;
