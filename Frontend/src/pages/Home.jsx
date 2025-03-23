import React from "react";
import Hero from "../components/Layouts/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection/>
      <NewArrivals/>
    </div>
  );
};

export default Home;
