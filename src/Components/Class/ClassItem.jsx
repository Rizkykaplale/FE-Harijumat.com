import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import WatchClass from "./WatchClass";

function ClassItem(props) {
  const { addItem } = useCart();
  const navigate = useNavigate()
  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
        <div class="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} class="card-img-top img-fluid" alt="..." />
          <div class="card-body text-start">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <h5 class="card-title">$ {props.price}</h5>
            <button class="btn btn-outline-danger" onClick={() => addItem(props.item)}>
              <i class="fa-solid fa-heart"></i>
            </button>
            <button class="btn btn-outline-success me-5" onClick={() => {
                return (
                    navigate(props.urlPath)
                )
            }
            }>
              Watch Class
            </button>
            {/* <a className="btn btn-success px-4 mx-3" href="/Checkout">
              Ikuti kelas
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassItem;
