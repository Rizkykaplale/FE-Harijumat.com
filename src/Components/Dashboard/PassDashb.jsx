import React from "react";

function PassDashb(props) {
  return (
    <div>
      <div className="container">
        <h1>Change Password</h1>
        <form action="" className="backgroundDashboard p-5 rounded">
          <label className="mt-3 fw-bolder" for="currpass">Current Password</label><br />
          <input className="rounded" type="password" size={50} id="currpass" />
          <br />
          <label className="mt-3 fw-bolder">New Password</label><br />
          <input className="rounded" type="password" size={50} />
          <br />
          <label className="mt-3 fw-bolder">Confirm New Password</label><br />
          <input className="rounded" type="password" size={50} /><br />
          <input className="my-4 btn btn-dark" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default PassDashb;
