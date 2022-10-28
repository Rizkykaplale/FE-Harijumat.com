import React from "react";
import hero from "../../Image/herobanner2.png";
import { Link } from "react-router-dom";
import "./Class.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ClassList from "./ClassList";
import WatchClass from "./WatchClass";
import { CartProvider } from "react-use-cart";

function Class(props) {
 
  return (
    <>
      <Navbar />
      {/* Hero Banner */}
      <div className="container col-xxl-8 px-4 pb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4 mt-5">Sekolah online yang bantu kamu jadi Top 7% Talenta Digital di Indonesia</h1>
            <p className="lead">Ayo belajar dan bertranformasi menjadi orang paling dicari di industri, Kuasai skill dan dapatkan pekerjaan impianmu.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">{/* <button href="#" type="button" className="btn btn-success btn-lg px-4 me-md-2">Temukan kelas</button> */}</div>
          </div>
        </div>
      </div>
      <hr />
      {/* Pilihan Kelas */}
      <div className="container my-5">
        <CartProvider>
          <ClassList />
        </CartProvider>
      </div>
      <Footer />
    </>
  );
}

export default Class;

{
  /* <div className="row row-cols-1 row-cols-md-3 g-5">
   Kelas 1
    <div className="col">
      <div className="card">
        <img src={class1} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title"><Link to={"kelas-web-dev"} className="text-decoration-none text-reset hoverclass">Kelas Web-Developer</Link></h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>

    Kelas 2
    <div className="col">
      <div className="card">
        <img src={class2} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title"><Link to={"kelas-ui-ux"} className="text-decoration-none text-reset hoverclass">Kelas UI/UX</Link></h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>

    Kelas 3
    <div className="col">
      <div className="card">
        <img src={class3} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kelas Data science</h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>

    Kelas 4
    <div className="col">
      <div className="card">
        <img src={class3} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kelas Data Analyst</h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>

    Kelas 5
    <div className="col">
      <div className="card">
        <img src={class5} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kelas Product Management</h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>

    Kelas 6
    <div className="col">
      <div className="card">
        <img src={class6} height="240" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kelas Mobile Developer</h5>
          <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
          <p class="badge bg-danger text-wrap ms-5 mx-3">
            Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
            <span className="text-decoration-line-through">Rp.3.000.000</span>
          </p>
          <a className="btn btn-success px-4 mx-3" href="/Checkout">
            Ikuti kelas
          </a>
          <a className="btn btn-outline-success me-2" href="/contact">
            Info lebih lanjut
          </a>
        </div>
      </div>
    </div>
</div> */
}
{
  /* Pilihan Kelas - coba2 dibuat props component masih gagal
<div className="container">
  <h3 className=" pt-5 text-center fw-bold">Kelas kami</h3>
  <p className="text-center pb-3">Jelajahi kelas terbaik dari tutor terbaik dibidangnya. Miliki skill yang paling di cari industri saat ini</p>
    <section className="container">
      <h3>Kelas Web Developer</h3>
      <ClassList
        urlImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RkvNB7TTI_WZSwQfATAJWQHaEK%26pid%3DApi&f=1&ipt=6148a064443299b04fe45557bde8de7f882fab7647812cf633b020e2f8756997&ipo=images"}
        urlVideo={"https://www.youtube.com/watch?v=kUMe1FH4CHE"}
        pathVideo={"kelas-html"}
        namaKelas="Kelas HTML"
        deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque."
        diskon="50%"
      />
      <ClassList
        urlImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EdHUxcPpfeYKK1g6IQtcSAHaEK%26pid%3DApi&f=1&ipt=16869d8abf6df8d5f0f9b330de5be479d37889917d8c93cd7ff1091f063088aa&ipo=images"}
        urlVideo={"https://www.youtube.com/watch?v=1Rs2ND1ryYc&t=40s&pp=ugMICgJpZBABGAE%3D"}
        pathVideo={"kelas-css"}
        namaKelas="Kelas CSS"
        deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque."
        diskon="50%"
      />
      <ClassList
        urlImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hW8is6A7puhzy_ZBDDEykAHaEK%26pid%3DApi&f=1&ipt=406cc6be6ddf6892c312bfb1b1a1372afdfc774b36251fb44d8708b07fa43fc5&ipo=images"}
        urlVideo={"https://www.youtube.com/watch?v=jS4aFq5-91M"}
        pathVideo={"kelas-javascript"}
        namaKelas="Kelas Javascript"
        deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque."
        diskon="50%"
      />
    </section>
  
</div> */
}
