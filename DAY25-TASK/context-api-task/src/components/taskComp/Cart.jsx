import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

const Cart = () => {
  let { product, setProduct } = useContext(UserContext);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        minHeight: "100vh",
      }}
    >
      <div className="container my-5">
        <h2 className="text-center mb-4 text-white">Your Cart</h2>
        {product.map((e, i) => {
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          };

          const removebtnQuantity = () => {
            setProduct((prevProducts) =>
              prevProducts.filter((item) => item.id !== e.id)
            );
          };

          return (
            <div
              key={i}
              className="card mb-4 shadow-sm border-0"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={e.image}
                    className="img-fluid p-3"
                    alt={e.title}
                    style={{ borderRadius: "15px 0 0 15px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="card-title text-primary">{e.title}</h5>
                      <h4 className="card-title text-danger">${e.price}</h4>
                    </div>
                    <p className="text-muted mb-2">
                      <b>Category:</b> {e.category}
                    </p>
                    <p className="text-muted mb-2">
                      <b>Description:</b> {e.description}
                    </p>
                    <p className="text-success mb-2">
                      <b>Rating:</b> {e.rating.rate} ★ ({e.rating.count} reviews)
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex">
                        <button
                          type="button"
                          className="btn btn-outline-danger me-2"
                          onClick={removeQuantity}
                        >
                          -
                        </button>
                        <div
                          className="px-3 py-1 bg-light text-center"
                          style={{
                            borderRadius: "10px",
                            width: "50px",
                            lineHeight: "30px",
                          }}
                        >
                          {quantity}
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-success ms-2"
                          onClick={addQuantity}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={removebtnQuantity}
                      >
                        Remove
                      </button>
                    </div>

                    <hr />
                    <div className="bottom">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-muted">Price (1 item):</p>
                        <p className="fw-bold">${e.price}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-muted">Total:</p>
                        <h5 className="text-primary">${e.price * quantity}</h5>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary w-100 mt-3"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
