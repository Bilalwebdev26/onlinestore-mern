import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layouts/UserLayout.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "sonner";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import BestSeller from "./components/Products/BestSeller.jsx";
import Checkout from "./components/Cart/Checkout.jsx";
import OrderConfigration from "./pages/OrderConfigration.jsx";
import OrderDetail from "./pages/OrderDetail.jsx";
import MyOrderPage from "./pages/MyOrderPage.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import AdminHomePage from "./pages/AdminHomePage.jsx";
import UserManagement from "./components/Admin/UserManagement.jsx";
import ProductManagment from "./components/Admin/ProductManagment.jsx";
import EditProductPage from "./components/Admin/EditProductPage.jsx";
import OrderManagment from "./components/Admin/OrderManagment.jsx";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collection/:collection" element={<CollectionPage />} />
          <Route path="/product/:id" element={<BestSeller />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order-configration" element={<OrderConfigration/>}/>
          <Route path="/order/:id" element={<OrderDetail/>}/>
          <Route path="/my-orders" element={<MyOrderPage/>}/>
        </Route>
        {/* User Layout */}
        <Route path="/admin"  element={<AdminLayout/>}>
        {/* Admin Layout */}
         <Route index element={<AdminHomePage/>}/>
         <Route path="/admin/users" element={<UserManagement/>}/>
         <Route path="/admin/products" element={<ProductManagment/>}/>
         <Route path="/admin/products/:id/edit" element={<EditProductPage/>}/>
         <Route path="/admin/orders" element={<OrderManagment/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
