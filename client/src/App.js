import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";
import RegisterComponent from "./components/register-component";
// import LoginComponent from "./components/login-component";

const App = () => {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/register" element={<RegisterComponent />}></Route>
        {/* <Route path="/login" element={<LoginComponent />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
