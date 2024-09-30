import React from 'react';

const HeroSection = () => {
  return (
    <header className="py-5" style={{ background: `url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold text-white">Generate more leads with a professional landing page!</h1>
            <form className="d-flex justify-content-center mt-4">
              <input className="form-control form-control-lg me-2" type="email" placeholder="Email Address" />
              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
