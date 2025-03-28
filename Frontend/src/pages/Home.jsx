import React from "react";
import Hero from "../components/Layouts/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import BestSeller from "../components/Products/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection/>
      <NewArrivals/>
      {/* best seller  */}
      <h2 className="text-center text-black font-bold text-3xl mb-0 md:mb-4">Best Seller</h2>
      <BestSeller/>
    </div>
  );
};

export default Home;
