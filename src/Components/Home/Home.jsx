import React from "react";
import "./Home.css";
import hero from "../../Image/herobanner.jpg";
import logo1 from "../../Image/logo1.png";
import logo2 from "../../Image/logo2.png";
import logo3 from "../../Image/logo3.jpg";
import logo4 from "../../Image/jumbotronwa.png";
import testi1 from "../../Image/testi-1.jpg";
import testi2 from "../../Image/testi-2.jpg";
import testi3 from "../../Image/testi-3.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home(props) {
  return (
    <>
    <Navbar/>
      {/* Hero Banner */}
      <div className="container col-xxl-8 px-4 pb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4 mt-5">Bingung mau kemana? Raih karir impianmu sekarang!</h1>
            <p className="lead">
              Kuasai skill dan dapatkan pekerjaan impianmu. <span className="fw-semibold">Lebih dari 2380 alumni sudah berhasil meraih karir impian</span> impian mereka. Apabila kamu setelah lulus belum bekerja dalam 365 hari, kamu berhak
              mendapatkan <span className="fw-semibold">refund up to 110%</span> dari investasimu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button href="#" type="button" className="btn btn-success btn-lg px-4 me-md-2">Temukan kelas</button> */}
              <a className="btn btn-success btn-lg mt-2 px-4 me-md-2" href="/class">
                Temukan Kelas Terbaikmu!
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Testimoni */}
      <div className="container my-5 py-1 rounded">
        <h1 className="text-center my-5 fw-bold">Apa Kata Alumni Kami?</h1>
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card text-black bg-white">
              <img src={testi1} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Roberto Carlos</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  UI/UX Designer at
                  <img src={logo1} width="50" alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-black bg-white">
              <img src={testi2} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lesty</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  Associate Product Manager at
                  <img src={logo2} width="70" alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-black bg-white ">
              <img src={testi3} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Johnny Singh</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  Back End Engineer at
                  <img src={logo3} width="30" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* table kenapa milih harijumat.com */}
      <div className="container pb-5">
        <h1 className="text-center py-5 fw-bold">Mengapa harus harijumat.com?</h1>
        <table className="table">
          <thead>
            <tr className="text-center table-secondary fs-4">
              <th scope="col"></th>
              <th scope="col">harijumat.com</th>
              <th scope="col">Other Bootcamp</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="bg-transparent">Start dari 1 Jutaan Perbulan</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="bg-transparent">Materi Lengkap Dengan harga Terjangkau</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Tergantung harga yang di bayar</td>
            </tr>
            <tr>
              <td className="bg-transparent">Final Project untuk Portofoliomu</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Belum tentu ada</td>
            </tr>
            <tr>
              <td className="bg-transparent">Akan mendapatkan kesempatan magang</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Tidak ada</td>
            </tr>
            <tr>
              <td className="bg-transparent">Bebas Konsultasi diluar jam kelas</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Hanya pada saat jam kelas</td>
            </tr>
            <tr>
              <td className="bg-transparent">Bimbingan karir hingga diterima bekerja</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Hanya bimbingan biasa</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />

      {/* lulusan harijumat */}
      <div className="container pt-3 mt-5">
        <div className="row">
          <h1 className="mb-5 text-capitalize text-center fw-bold">Lulusan harijumat.com telah bekerja di:</h1>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_air-asia-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_bukalapak-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_shopee-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_unilever-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_gojek-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_bri-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_nestle-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_mandiri-sekuritas-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_pwc-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_telkom-indonesia_2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_viu-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_link-aja-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_ey-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_jnt-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_astra-2.png&w=256&q=75" alt="" />
          </div>
        </div>
      </div>
      <br />

      {/* Jumbotron WA (kalo sewaktu-waktu perlu) */}
      {/* <div className="my-5 py-5">
        <div className="container-fluid py-3 bg-dark text-white rounded-2 ">
          <div className="row">
            <div className="col pt-5 ps-5"><br />
              <h1 className="display-6 fw-bold">Masih bingung?</h1>
              <p className=" fs-3 ">Konsultasikan tujuan karirmu dengan expert terbaik dibidangnya</p>
              <button className="btn btn-success btn-lg" type="button">
              <a href="https://wa.me/6282211373658/?text=Halo Admin, mau nanya dong." target="_blank" className="text-decoration-none text-white gede">WhatsApp</a>
              </button>
            </div>
            <div className="col text-center">
              <img src={logo4} alt="" width="363" height="363"/>
            </div>
          </div>
        </div>
      </div> */}
      <Footer/>
    </>
  );
}

export default Home;
