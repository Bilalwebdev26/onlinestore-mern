import React from "react";
import{Route,Routes} from "react-router-dom"
import UserLayout from "./components/Layouts/UserLayout.jsx";
const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<UserLayout/>}/>
      {/* User Layout */}
      <Route />
      {/* Admin Layout */}
     </Routes>
    </div>
  );
};

export default App;
