import React, { useState } from "react";
import "./Login.css";
import signin from "../../Image/signin.jpg";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("http://localhost:3001/test", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log("LOOOOL");
    //     console.log(res);
    //     alert(res.msg);
    //   });
  };

  return (
    <>
      {/* Form Login */}
      <div className="container">
        <div className="container ">
          <div className="row ">
            <div className="col mt-">
              <img src={signin} alt="" width="500" height="500" />
            </div>
            <div className="col justify-content-center">
              
              {/* input user */}
              <form
                className="p-4 p-md-5 border rounded-3 bg-dark w-75 geserkiri"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <h1 className="fw-bold text-center text-white mb-4">Sign In</h1>
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
                  <label for="floatingInput">Email address</label>
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
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3 text-white">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success" type="submit">
                  Sign In
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
