import React from 'react';
import img1 from '../assets/img/bg-showcase-1.jpg';
import img2 from '../assets/img/bg-showcase-2.jpg';
import img3 from '../assets/img/bg-showcase-3.jpg';

const FeatureData = [
  {
    title: 'Fully Responsive Design',
    description:
      "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image: img1,
    order: 'order-lg-2',
  },
  {
    title: 'Updated For Bootstrap 5',
    description:
      'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    image: img2,
    order: '',
  },
  {
    title: 'Easy to Use & Customize',
    description:
      'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    image: img3,
    order: 'order-lg-2',
  },
];

const FeatureDetailed = () => {
  return (
    <section className="showcase">
      <div className="container-fluid p-0">
        {FeatureData.map((data, index) => (
          <div className="row g-0" key={index}>
            <div className={`col-lg-6 ${data.order} text-white`}>
              <img src={data.image} alt={data.title} className="img-fluid h-100" style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>{data.title}</h2>
              <p className="lead mb-0">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDetailed;
