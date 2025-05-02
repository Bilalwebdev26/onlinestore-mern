import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layouts/UserLayout.jsx";
import Home from "./pages/Home.jsx";
import {Toaster} from "sonner"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
const App = () => {
  return (
    <div>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/collection/:collection" element={<CollectionPage/>}/>
        </Route>
        {/* User Layout */}
        <Route />
        {/* Admin Layout */}
      </Routes>
    </div>
  );
};

export default App;
