import React from 'react';

const testimonials = [
  { name: 'Margaret E.', text: '“This is fantastic! Thanks so much guys!”', image: require('../assets/img/testimonials-1.jpg') },
  { name: 'Fred S.', text: '“Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages.”', image: require('../assets/img/testimonials-2.jpg') }, 
  { name: 'Sarah W.', text: '“Thanks so much for making these free resources available to us!”', image: require('../assets/img/testimonials-3.jpg') },
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">What people are saying...</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <img src={testimonial.image} className="card-img-top" alt={testimonial.name} />
                <div className="card-body">
                  <h5 className="card-title">{testimonial.name}</h5>
                  <p className="card-text">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
