import React from "react";
import Banner from "../../assets/featured.webp";
import { Link } from "react-router-dom";
function FeatureCollection() {
  return (
    <section className="py-16 px-4 lg:px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-bold">Comfort and Style</h2>
          <h3 className="text-4xl lg:text-5xl mb-6 font-bold">
            Apparel made for your everyday life
          </h3>
          <p className="text-lg mb-3 text-gray-800">
            Discover high-quality,comfotable clothing that effortlessly blends
            fashion and function . Designed to make you look and feel great
            every day.
          </p>
          <Link to='/collection/all' className="py-3 px-6 bg-black  text-white text-lg rounded-lg transition-all hover:bg-gray-800">
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full object-cover rounded-tr-3xl rounded-tl-3xl lg:rounded-tl-[0px] lg:rounded-br-3xl "
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureCollection;
