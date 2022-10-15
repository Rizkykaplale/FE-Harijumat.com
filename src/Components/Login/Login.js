import React, { useState } from "react";
import "./Login.css";
import signin from "../../Image/signin.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
           {/* Form Login */}
           <div className="container my-1">
        <div className="container col-xl-10 col-xxl-8 px-4 w-100">
          <div className="row align-items-center g-lg-5 py-1 ">
            <div className="col-lg-7 ">
              <img src={signin} alt="" width="420" height="420" />
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <h1 className="text-center fw-bold">Sign In</h1>
              <form
                className="p-2 p-md-5 border rounded-3 bg-dark"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2 mt-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox my-3 text-white">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success mt-2" type="submit">
                  Sign In
                </button>
                <p className="text-center text-white pt-3">Belum memiliki akun? <a className="text-decoration-none" href="/regist" type="submit">
                  Daftar
                </a></p>
                <hr className="my-1" />
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
