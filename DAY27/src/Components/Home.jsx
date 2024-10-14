import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  // Destructure
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{
      backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)", 
      backgroundSize: "cover",
    }}>
      {/*Form input*/}
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-body p-5">
            <h2 className="text-center mb-4">
              Enter Your <span className="text-primary">Details</span>
            </h2>

      <form
              onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
            >
     <div className="form-floating mb-3">
       <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
     <label htmlFor="nameInput">Name</label>
     </div>

              <div className="form-floating mb-3">
           <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailInput">Email address</label>
         </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="phoneInput"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phoneInput">Phone Number</label>
              </div>

              <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
                style={{ border: "2px solid #000", width: "20px", height: "20px" }}
              />

                <label className="form-check-label" htmlFor="rememberCheck">
                  Remember me
                </label>
              </div>
              {/*Add button*/}
              <button className="btn btn-primary w-100" type="submit">
                Add To List
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
