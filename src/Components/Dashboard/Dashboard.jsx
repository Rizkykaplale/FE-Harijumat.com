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
      <div className="container">
        <h2>My Dashboard</h2>
        <br />
        <button>
          <Link to={"/dashboard/profile"} className="mx-2 text-decoration-none text-black border-0">
            Profile
          </Link>
        </button>
        <button>
          <Link to={"/dashboard/favorite"} className="mx-2 text-decoration-none text-black">
            Favorite
          </Link>
        </button>
        <button>
          <Link to={"/dashboard/changepassword"} className="mx-2 text-decoration-none text-black">
            Change Password
          </Link>
        </button>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
