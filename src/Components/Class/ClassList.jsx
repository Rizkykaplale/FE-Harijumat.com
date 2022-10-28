import React from "react";
import { Link } from "react-router-dom";
import ClassItem from "./ClassItem";
import data from './Data'


function ClassList(props) {

  return (
    <>
       <h1 className='text-center mt-3'>Our Class</h1>
       <p className="text-center pb-3">Jelajahi kelas terbaik dari tutor terbaik dibidangnya. Miliki skill yang paling di cari industri saat ini</p>

            <section className='py-4 container'>
                <div className="row justify-content-center">
                    {data.productClass.map((item, index) => {
                        return (
                            <ClassItem 
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc} 
                                price={item.price}
                                item={item}
                                key={index}
                                urlPath={item.urlPath}
                                urlVideo={item.urlVideo}
                            />
                        )
                    })}

                </div>
            </section>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <div className="card d-inline-block mx-3" style={{ width: "20rem" }}>
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
      <img src={props.urlImage} alt="" height="240"/>
            <h3>{props.namaKelas}</h3>
            <p>{props.deskripsi}</p>
            <p>{props.diskon}</p>
            <button>Ikuti Kelas</button>
            <button>Info Lebih Lanjut</button> */}
    </>
  );
}

export default ClassList;
