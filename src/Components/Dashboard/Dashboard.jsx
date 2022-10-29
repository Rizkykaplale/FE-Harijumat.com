import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import EditData from "./EditData";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />
      {/* Bagian Body */}
      <div className="container p-5">
        <h2>My Dashboard</h2>
        <br />
        <button className="btn btn-success mx-1 border-dark mb-2">
          <Link to={"/dashboard/profile"} className="mx-2 text-decoration-none text-white border-0">
            Profile
          </Link>
        </button>
        <button className="btn btn-success mx-1 border-dark mb-2">
          <Link to={"/dashboard/favorite"} className="mx-2 text-decoration-none text-white">
            Favorite
          </Link>
        </button>
        {/* <button className="btn btn-success mx-1 border-dark mb-2">
          <Link to={"/dashboard/changepassword"} className="mx-2 text-decoration-none text-white">
            Change Password
          </Link>
        </button> */}
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
