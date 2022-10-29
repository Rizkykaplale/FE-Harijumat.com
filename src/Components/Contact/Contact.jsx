import React from "react";
import contactUs from "../../Image/contact-us.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import logo from "../../Image/jumbotronwa.png";
function Contact(props) {
  return (
    <>
    <Navbar/>
      {/* Jumbotron WA (kalo sewaktu-waktu perlu) */}
      <div className="container my-5 py-5 shadow">
        <div className="container-fluid py-3 bg-light text-black rounded-2 ">
          <div className="row">
            <div className="col pt-5 ps-5"><br />
              <h1 className="display-6 fw-bold">Masih bingung?</h1>
              <p className=" fs-3 ">Konsultasikan tujuan karirmu dengan expert terbaik kami</p>
              <button className="btn btn-success btn-lg" type="button">
              <a href="https://wa.me/6282211373658/?text=Halo Admin, mau nanya dong." target="_blank" className="text-decoration-none text-white gede">WhatsApp</a>
              </button>
            </div>
            <div className="col text-center">
              <img src={logo} alt="" width="363" height="363"/>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Contact;
