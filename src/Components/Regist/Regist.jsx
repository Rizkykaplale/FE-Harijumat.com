import React, { useState } from "react";
import "./Regist.css";
import signup from "../../Image/signup.jpg";

function Regist(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
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
              <form
                className="p-4 p-md-5 border rounded-3 bg-dark"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="form-floating mb-3">
                  <input
                    type="firstName"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
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
                      setLastName(e.target.value);
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
                      setEmail(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                  />
                  <label>Password</label>
                </div>
                <div className="checkbox mb-3 text-white">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success" type="submit" onClick={(e) => handleSubmit(e)}>
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
