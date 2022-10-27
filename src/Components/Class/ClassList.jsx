import React from "react";
import { Link, useNavigate } from "react-router-dom";
function ClassList(props) {
    const navigate = useNavigate();
  
    const clickedButton = () => {
      return navigate(props.pathVideo)
    };

  return (
    <>
      <div className="card d-inline-block mx-3" style={{ width: "20rem" }}>
        <img src={props.urlImage} className="card-img-top" alt="Webdev" height={"212px"} width={"300px"} />
        <div className="card-body">
          <h5 className="card-title">{props.namaKelas}</h5>
          <p className="card-text">{props.deskripsi}</p>
          <button className="btn btn-success">
          <Link to={props.pathVideo} className="mx-2 text-decoration-none text-light border-0">
            Watch Class
          </Link>
          </button>

        </div>
      </div>
      {/* <img src={props.urlImage} alt="" height="240"/>
            <h3>{props.namaKelas}</h3>
            <p>{props.deskripsi}</p>
            <p>{props.diskon}</p>
            <button>Ikuti Kelas</button>
            <button>Info Lebih Lanjut</button> */}
    </>
  );
}

export default ClassList;
