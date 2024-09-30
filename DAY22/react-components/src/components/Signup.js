import React from 'react';

const SignupSection = () => {
  return (
    <section className="py-5 text-white text-center">
        <header className="py-5" style={{ background: `url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            <form className="form-inline justify-content-center">
            <div className="form-group mb-2">
                <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2 ml-2">
                Submit
            </button>
            </form>
        </div>
      </header>
    </section>
  );
};

export default SignupSection;
