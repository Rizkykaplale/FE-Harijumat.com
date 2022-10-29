import React from "react";
import "./Home.css";
import hero from "../../Image/herobanner.jpg";
import logo1 from "../../Image/logo1.png";
import logo2 from "../../Image/logo2.png";
import logo3 from "../../Image/logo3.jpg";
import testi1 from "../../Image/testi-1.jpg";
import testi2 from "../../Image/testi-2.jpg";
import testi3 from "../../Image/testi-3.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home(props) {
  return (
    <>
      <Navbar />
      {/* Hero Banner */}
      <div className="container px-4 pb-5">
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
  

      {/* Testimoni */}
      <div className="container my-5 p-5 rounded shadow">
        <h1 className="text-center my-3 fw-bold">Apa Kata Alumni Kami?</h1>
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


      {/* table kenapa milih harijumat.com */}
      <div className="container pb-5 shadow">
        <h1 className="text-center py-5 fw-bold">Mengapa harus harijumat.com?</h1>
        <table className="table">
          <thead>
            <tr className="text-center table-secondary fs-4">
              <th scope="col">harijumat.com</th>
              <th scope="col">Other Bootcamp</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="table-success">GRATIS</td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-success">Materi super lengkap</td>
              <td className="table-danger">Tergantung harga yang di bayar</td>
            </tr>
            <tr>
              <td className="table-success">Final Project untuk Portofoliomu</td>
              <td className="table-danger">Belum tentu ada</td>
            </tr>
            <tr>
              <td className="table-success">Akan mendapatkan kesempatan magang</td>
              <td className="table-danger">Tidak ada</td>
            </tr>
            <tr>
              <td className="table-success">Bebas Konsultasi diluar jam kelas</td>
              <td className="table-danger">Hanya pada saat jam kelas</td>
            </tr>
            <tr>
              <td className="table-success">Bimbingan karir hingga diterima bekerja</td>
              <td className="table-danger">Hanya bimbingan biasa</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />


      {/* lulusan harijumat */}
      <div className="container py-5 mt-5 shadow">
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
      <br />


      {/* FAQ */}

      <div className="container mt-5 py-5 shadow">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold mb-3 ms-5">F A Q</h1>
          </div>
          <div className="col-9">
            <div id="accordion">
              <div class="card">
                <div class="card-header bg-success bg-opacity-50">
                  <a class="btn text-black fw-bold" data-bs-toggle="collapse" href="#collapseOne">
                  Bagaimana cara mendaftarkan akun di harijumat.com?
                  </a>
                </div>
                <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                  <div class="card-body text-black bg-secondary bg-opacity-25">
                  Kamu perlu mengunjungi website harijumat.com terlebih dahulu kemudian pilih tombol <b>“Daftar“</b> di pojok kanan atas. Agar lebih mudah, kamu juga dapat mendaftar dengan akun Google yang kamu miliki. Setelah itu kamu akan masuk ke page untuk mengisi data yang diperlukan. Jika data sudah terisi, tekan tombol <b>“Daftar Sekarang”</b> . Kamu akan diarahkan untuk melakukan verifikasi melalui email. Setelah verifikasi berhasil, Selamat! Kamu telah menjadi bagian dari Harisenin.com.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-success bg-opacity-50">
                  <a class="collapsed btn text-black fw-bold" data-bs-toggle="collapse" href="#collapseTwo">
                  Bagaimana cara log in akun harijumat.com?
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body text-black bg-secondary bg-opacity-25">
                  Kamu perlu mengunjungi website Harisenin.com terlebih dahulu kemudian pilih tombol <b>“Masuk“</b> di pojok kanan atas. Setelah itu, Kamu bisa log in melalui google atau dengan langsung memasukan email dan kata sandi yang sudah kamu daftarkan sebelumnya ke website Harisenin.com.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-success bg-opacity-50">
                  <a class="collapsed btn text-black fw-bold" data-bs-toggle="collapse" href="#collapseThree">
                  Bagaimana Cara Keluar (logout) dari harijumat.com?
                  </a>
                </div>
                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body text-black bg-secondary bg-opacity-25">
                   Yaelah bang tinggal log out aja itu dipojok kanan atas kan tombolnya gede banget masa masih galiat juga sih lu bang
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-success bg-opacity-50">
                  <a class="collapsed btn text-black fw-bold" data-bs-toggle="collapse" href="#collapseFour">
                  Bagaimana jika akun saya dinonaktifkan?
                  </a>
                </div>
                <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body text-black bg-secondary bg-opacity-25">
               Makanya bang jangan bandel. Lu jadi orang cari perkara aja buset. Muhasabah diri bang kiamat udah deket.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-success bg-opacity-50">
                  <a class="collapsed btn text-black fw-bold" data-bs-toggle="collapse" href="#collapseFive">
                  Apakah biodata saya di akun Harisenin.com terjamin kerahasiaannya?
                  </a>
                </div>
                <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body text-black bg-secondary bg-opacity-25">
            Ohhh engga dong. Kita jual data-data lu ke pinjol ama admin judi slot hahahahha sukurin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
