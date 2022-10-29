import React, { useState } from "react";
import ava from "../../Image/testi-1.jpg";

function ProfilDashb(props) {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("johndoe@gmail.com");
    const [birth, setBirth] = useState("29/2/92");
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("Rembrandtplein 31, Amsterdam, NL");
    const [city, setCity] = useState("Amsterdam");
    const [provence, setProvence] = useState("Amsterdam");
  
    // function handleName(e) {
    //   setName(e.target.value);
    // }
    // function handleEmail(e) {
    //   setEmail(e.target.value);
    // }
    // function handleBirth(e) {
    //   setBirth(e.target.value);
    // }
    // function handleGender(e) {
    //   setGender(e.target.value);
    // }
    // function handleAddress(e) {
    //   setAddress(e.target.value);
    // }
    // function handleCitu(e) {
    //   setCity(e.target.value);
    // }
    // function handleProvence(e) {
    //   setProvence(e.target.value);
    // }
  return (
    <div className="p-5 rounded shadow">
      <div className="container text-center w-auto lh-1 mb-5">
              <img src={ava} width="180px" height="140px" alt="avatar" className="rounded-circle shadow-4" />
              <h3 className="my-3">{`${firstName} ${lastName}`}</h3>
            </div>
            <h3>Email</h3>
            <p className="mb-4">{email}</p>
            <h3>Date Lahir</h3>
            <p className="mb-4">{birth}</p>
            <h3>Gender</h3>
            <p className="mb-4">{gender}</p>
            <h3>Address</h3>
            <p className="mb-4">{address}</p>
            <h3>City</h3>
            <p className="mb-4">{city}</p>
            <h3>Provence</h3>
            <p className="mb-4">{provence}</p>
    </div>
  );
}

export default ProfilDashb;
