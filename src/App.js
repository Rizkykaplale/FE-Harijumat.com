import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Class from "./Components/Class/Class";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Regist from "./Components/Regist/Regist";
// import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import WatchClass from "./Components/Class/WatchClass";
import NotFound from "./Components/NotFound";
import ProfilDashb from "./Components/Dashboard/ProfilDashb";
import FavDashb from "./Components/Dashboard/FavDashb";
import PassDashb from "./Components/Dashboard/PassDashb";


function App() {
  return (
    <>
      <br/>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<ProfilDashb />} />
            <Route path="favorite" element={< FavDashb/>} />
            <Route path="changepassword" element={<PassDashb />} />
          </Route>
          <Route path="/class" element={<Class />} />
          <Route path="/class/:slug" element={<WatchClass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    
      

    
      {/* <br/>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/:slug" element={<WatchClass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
