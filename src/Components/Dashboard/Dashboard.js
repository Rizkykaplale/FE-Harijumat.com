import React from "react";
import "./Dashboard.css"

function Dashboard(props) {
  return (
    <>
      <div className="container mt-3">
        <h2>My Dashboard</h2>
        <br />
        {/* Nav tabs  */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active text-dark" data-bs-toggle="tab" href="#home">
              My Class
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" data-bs-toggle="tab" href="#menu1">
              Wishlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" data-bs-toggle="tab" href="#menu2">
              Favorite
            </a>
          </li>
        </ul>

        {/* Tab panes  */}
        <div className="tab-content">
          <div id="home" className="container tab-pane active fade">
            <br />
            <h3>My Class</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div id="menu1" className="container tab-pane fade">
            <br />
            <h3>Wishlist</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div id="menu2" className="container tab-pane fade">
            <br />
            <h3>Favorite</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Dashboard;
