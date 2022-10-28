import React, { useState } from "react";
import ava from "../../Image/testi-1.jpg";

function ProfilDashb(props) {
    const [firstName, setFirstName] = useState("Saya");
    const [lastName, setLastName] = useState("Siapa");
    const [email, setEmail] = useState("namasaya@gmail.com");
    const [birth, setBirth] = useState("29/2/92");
    const [gender, setGender] = useState("Laki");
    const [address, setAddress] = useState("Kp. Sunda Empire RT.004/05 Kel. Sunda Kec. Empire");
    const [city, setCity] = useState("Bandung");
    const [provence, setProvence] = useState("Jawa Timur");
  
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
              <h3 className="my-3">{firstName + lastName}</h3>
            </div>
            <h3>Email</h3>
            <p className="mb-4">{email}</p>
            <h3>Tanggal Lahir</h3>
            <p className="mb-4">{birth}</p>
            <h3>Jenis Kelamin</h3>
            <p className="mb-4">{gender}</p>
            <h3>Alamat</h3>
            <p className="mb-4">{address}</p>
            <h3>Kota</h3>
            <p className="mb-4">{city}</p>
            <h3>Provinsi</h3>
            <p className="mb-4">{provence}</p>
    </div>
  );
}

export default ProfilDashb;
