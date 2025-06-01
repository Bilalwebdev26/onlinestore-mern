import React from "react";
import Hero from "../components/Layouts/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import BestSeller from "../components/Products/BestSeller";
import ProductGrid from "../components/Products/ProductGrid";
import FeatureCollection from "../components/Products/FeatureCollection";
import FeatureSection from "../components/Products/FeatureSection";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProduct } from "../redux/slices/product.slice";
import axios from "axios";

const placeolderProducts = [
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
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);
  useEffect(() => {
    dispatch(
      fetchProduct({
        gender: "Female",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    //fetch best seller Product
    const bestSellerProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/products/bestSellerProduct`
        );
        console.log("Best Res : ", response.data.data);
        setBestSellerProduct(response.data.data);
      } catch (error) {
        console.log("Best Eror : ", error);
      }
    };

    bestSellerProduct();
  }, [dispatch]);
  console.log("Best Seller Product : ", bestSellerProduct);
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* best seller  */}
      <h2 className="text-center text-black font-bold text-3xl mb-0 md:mb-4">
        Best Seller
      </h2>
      {bestSellerProduct ? (
        <BestSeller productId={bestSellerProduct?.[0]?._id} />
      ) : (
        <p className="text-center">Loading Best Seller Product....</p>
      )}
      {console.log("Bestseller id : ", bestSellerProduct?.[0]?._id)}

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Bottom Wears for Women
        </h2>
        {console.log("Products :", products)}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <FeatureCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
