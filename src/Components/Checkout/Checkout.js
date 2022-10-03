import React from "react";

function Checkout() {
  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Form Pendaftaran Kelas</h2>
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-success">Total Harga</span>
                <span className="badge bg-success rounded-pill">2</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Investasi Kelas batch xx</h6>
                    <small className="text-muted">Kelas Oktober</small>
                  </div>
                  <span className="text-muted">Rp.3.000.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Spesial Promo</h6>
                    <small>DISCONTALLCLASS</small>
                  </div>
                  <span className="text-success">−Rp. 1.500.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (Rp.)</span>
                  <strong>1.500.000</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code(optional)" />
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Informasi Pribadi</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Nama Depan
                    </label>
                    <input type="text" className="form-control" id="firstName" placeholder="John" required />
                    <div className="invalid-feedback">Valid first name is required.</div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Nama Belakang
                    </label>
                    <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                    <div className="invalid-feedback">Valid last name is required.</div>
                  </div>
                  <div className="col-md-15">
                    <label htmlFor="state" className="form-label">
                      Status Pekerjaan
                    </label>
                    <select className="form-select" id="state" required>
                      <option value>Pilih Status</option>
                      <option>Belum Bekerja</option>
                      <option>Karyawan</option>
                      <option>Mahasiswa</option>
                      <option>Wiraswasta</option>
                    </select>
                    <div className="invalid-feedback">Please provide a valid state.</div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted"></span>
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                    <div className="invalid-feedback">Please enter a valid email addresss.</div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Alamat Lengkap
                    </label>
                    <input type="text" className="form-control" id="address" placeholder="Jl. Manggis No.xx" required />
                    <div className="invalid-feedback">Please enter your address.</div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="Kota" className="form-label">
                      Kota/Kabupaten
                    </label>
                    <input type="text" className="form-control" id="Kota" placeholder required />
                    <div className="invalid-feedback">Kota required.</div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="Provinsi" className="form-label">
                      Provinsi
                    </label>
                    <input type="text" className="form-control" id="Provinsi" placeholder required />
                    <div className="invalid-feedback">Provinsi required.</div>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="Kode pos" className="form-label">
                      Kode pos
                    </label>
                    <input type="text" className="form-control" id="Kode pos" placeholder required />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Informasi Kelas</h4>
                <div className="col-md-15">
                  <label htmlFor="state" className="form-label">
                    Kelas yang ingin diikuti
                  </label>
                  <select className="form-select" id="state" required>
                    <option value>Pilih kelas</option>
                    <option>Kelas Web Developer</option>
                    <option>Kelas Data Science</option>
                    <option>Kelas Data Analyst</option>
                    <option>Kelas Product Managemnt</option>
                    <option>Kelas Mobile Developer</option>
                  </select>
                  <div className="invalid-feedback">Please provide a valid state.</div>
                </div>
                <div className="mt-2 col-md-15">
                  <label htmlFor="Ekspektasi" className="form-label">
                    Ekspektasi mengikuti kelas
                  </label>
                  <input type="text" className="form-control" id="Ekspektasi" placeholder="Saya ingin...." required />
                  <div className="invalid-feedback">Ekspektasi required.</div>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Payment</h4>
                <h6>Nama : PT.Harijumatberkah</h6>
                <h6>No rekening : 4801210</h6>
                <h6>Bank BCA</h6>
                <small className="text-muted">Pastikan Nomor rekening dan jumlah transfer sesuai</small>
                <div className="row gy-3">
                  <div className="col-md-15">
                    <label htmlFor="cc-name" className="form-label mt-3">
                      Nama Pengirim
                    </label>
                    <input type="text" className="form-control" id="cc-name" placeholder required />
                    <div className="invalid-feedback">Name on card is required</div>
                  </div>
                  <div className="col-md-15">
                    <label htmlFor="cc-number" className="form-label">
                      Nomor Rekening Pengirim
                    </label>
                    <input type="text" className="form-control" id="cc-number" placeholder required />
                    <div className="invalid-feedback">Credit card number is required</div>
                  </div>
                  <div className="col-md-15">
                    <label htmlFor="cc-number" className="form-label">
                      Bank Pengirim
                    </label>
                    <input type="text" className="form-control" id="cc-number" placeholder required />
                    <div className="invalid-feedback">Credit card number is required</div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02" />
                    <label class="input-group-text" for="inputGroupFile02">
                      Upload Bukti Transfer
                    </label>
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-success btn-lg" type="submit">
                  Ikuti Kelas
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Checkout;
