import React from "react";
import { useCart } from "react-use-cart";

function ClassFavorite(props) {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your Cart is Empty</h1>;
  }

  return (
    <div>
      <section className="container py-4 shadow">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* <h5>
              Cart ({totalUniqueItems}) total Items: ({totalItems})
            </h5> */}
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "8rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      {/* <td>Quantity({item.quantity})</td> */}
                      <td>
                        {/* <button className="btn btn-outline-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <button className="btn btn-outline-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                          +
                        </button> */}
                        <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal}</h2>
        </div> */}
          <div className="col-auto">
            <button className="btn btn-outline-danger m-2" onClick={() => emptyCart()}>
              Clear All
            </button>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassFavorite;
