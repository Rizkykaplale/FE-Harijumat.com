import React, { useState } from "react";
import "./Regist.css";
import signup from "../../Image/signup.jpg";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Regist(props) {
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const registers = async (e) => {
    e.preventDefault();
    console.log({
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passwordReg,
    })
    try {
      await Axios.post("http://localhost:8090/register", {headers: {
        'Content-Type': 'application/json',
    },}, {
        firstName: firstNameReg,
        lastName: lastNameReg,
        email: emailReg,
        password: passwordReg,
      });
      navigate("/login");
    } catch (error) {
      setMsg(error.response.data.msg);
      // console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 w-100">
          <div className="row align-items-center g-lg-5 pb-5 ">
            <div className="col-lg-7 ">
              <img src={signup} alt="" width="500" height="500" />
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <h1 className="text-center fw-bold">Sign Up</h1>
              <p>{msg}</p>
              <form
                className="p-4 p-md-5 border rounded-3 bg-dark"
                onSubmit={registers}
              >
                <div className="form-floating mb-3">
                  <input
                    type="firstName"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstNameReg(e.target.value);
                    }}
                  />
                  <label>First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="lastName"
                    className="form-control"
                    id="floatinglname"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastNameReg(e.target.value);
                    }}
                  />
                  <label>Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                  <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                  <label>Password</label>
                </div>
                <div className="checkbox mb-3 text-white">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button
                  className="w-100 btn btn-lg btn-outline-success"
                  type="submit"
                >
                  Sign Up
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ini nyoba push github */}
      {/* percobaan push branch cabang1 */}
    </>
  );
}

export default Regist;
