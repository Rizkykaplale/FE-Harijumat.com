import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Class from "./Components/Class/Class";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Regist from "./Components/Regist/Regist";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import WatchClass from "./Components/Class/WatchClass";


function App() {
  return (
    <>
      <Navbar />
      <br/>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/:slug" element={<WatchClass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
