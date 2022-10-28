import React, { useState } from "react";
import "./Login.css";
import signin from "../../Image/signin.jpg";
import {  useNavigate } from "react-router-dom";
import Axios from "axios";


function Login() {
  // const navigate = useNavigate()
  // const defaultAccount = {
  //   email: "admin@123",
  //   password: "admin123"
  // }
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email === defaultAccount.email && password === defaultAccount.password) {
  //     navigate('/home')
  //   }
  // };
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8090/login", {
        email: emailLog,
        password: passwordLog,
      });
      navigate("/home");
    } catch (error) {
      setMsg(error.msg);
    }
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
              <p>{msg}</p>
              <form
                className="p-2 p-md-5 border rounded-3 bg-dark"
                onSubmit={login}
              >
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmailLog(e.target.value);
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
                      setPasswordLog(e.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success mt-2" type="submit">
                  Sign In
                </button>
                <p className="text-center text-white pt-3 ">Belum punya akun ? <a className="text-decoration-none fw-bold" href="/regist" type="submit">
                  Daftar
                </a></p>
                <hr className="my-1" />
              </form>
            </div>
          </div>
        </div>
      </div>


{/* Eksperimen kalo login dulu baru bisa akses web */}
{/* <div className="modal modal-signin position-static d-block  py-1" tabindex="-1" role="dialog" id="modalSignin">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Login</h1>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success" type="submit">Sign up</button>
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <hr className="my-4"/>
          <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            Sign up with Twitter
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div> */}
    </>
  );
}

export default Login;
