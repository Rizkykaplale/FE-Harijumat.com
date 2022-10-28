import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div class="container bg-light">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/home" class="nav-link px-2 text-success">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/class" class="nav-link px-2 text-success">
                Class
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-success">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-success">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
