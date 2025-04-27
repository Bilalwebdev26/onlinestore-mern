import React from "react";
import Hero from "../components/Layouts/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import BestSeller from "../components/Products/BestSeller";
import ProductGrid from "../components/Products/ProductGrid";
import FeatureCollection from "../components/Products/FeatureCollection";
import FeatureSection from "../components/Products/FeatureSection";

const placeolderProducts=[
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=20" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=30" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=40" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=50" }],
  },
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=20" }],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=30" }],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=40" }],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500/?random=50" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection/>
      <NewArrivals/>
      {/* best seller  */}
      <h2 className="text-center text-black font-bold text-3xl mb-0 md:mb-4">Best Seller</h2>
      <BestSeller/>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Womer</h2>
        <ProductGrid products={placeolderProducts}/>
      </div>
      <FeatureCollection/>
      <FeatureSection/>
    </div>
  );
};

export default Home;
