import React from 'react';
import './index.css'
function Card({ data }) {
  return (
    <>
      <div className="col d-flex justify-content-center">
        <div className="card card-hover h-100">
          <img
            src={data.img}
            className="card-img-top"
            height="200"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-read text-primary" style={{ cursor: "pointer" }}>
              Read more »
            </p>
          </div>
          <div className="card-footer text-muted text-center">
            <small className="custom-card-footer">
              {data.date}
              <li style={{ display: "inline", marginLeft: "10px" }}>No Comments</li>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
