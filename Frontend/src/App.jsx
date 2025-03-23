import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layouts/UserLayout.jsx";
import Home from "./pages/Home.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index path="" element={<Home />} />
        </Route>
        {/* User Layout */}
        <Route />
        {/* Admin Layout */}
      </Routes>
    </div>
  );
};

export default App;
