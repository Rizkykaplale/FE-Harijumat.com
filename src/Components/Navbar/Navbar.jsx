import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo_hari_jumat.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top warna-navbar">
      <div className="container-fluid ">
        <Link to={"/"}>
          <img src={logo} width="128" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto gap-4 px-3">
            <li className="nav-item sorot">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item sorot">
              <Link to={"/dashboard/profile"} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item sorot">
              <Link to={"/class"} className="nav-link">
                Class
              </Link>
            </li>
            <li className="nav-item sorot">
              <Link to={"/contact"} className="nav-link">
                Contact Us
              </Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item logout">
              <Link to={"/login"} className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
       
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../Image/logo_hari_jumat.jpeg";
// import "./Navbar.css";

// function Navbar() {
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     let token = localStorage.getItem("token");
//     if (token) {
//       setIsLogin(true);
//     } else {
//       setIsLogin(false);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLogin(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-md navbar-dark fixed-top warna-navbar">
//       <div className="container-fluid">
//         <a className="navbar-brand" href=".">
//           <img src={logo} width="128" alt="" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//           aria-controls="navbarCollapse"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <ul className="navbar-nav ms-auto gap-4 px-3">
//             <li className="nav-item">
//               <Link to={"/"} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/class"} className="nav-link">
//                 Class
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/contact"} className="nav-link">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <ul className="navbar-nav">
//             {isLogin ? (
//             <li class="btn btn-success btn-sm">
//               <Link to={"/logout"} className="nav-link" onClick={logout}>
//                 Logout
//               </Link>
//             </li>
//             ) : (
//             <>
//               <li class="btn btn-success btn-sm mx-3">
//                 <Link to={"/login"} className="nav-link">
//                   Sign In
//                 </Link>
//               </li>
//               <li class="btn btn-secondary btn-sm ">
//                 <Link to={"/regist"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

{/* <form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form> */}