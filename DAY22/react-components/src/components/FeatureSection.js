import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Fully Responsive', description: 'This theme will look great on any device, no matter the size!', icon: 'bi-laptop' },
  { title: 'Bootstrap 5 Ready', description: 'Featuring the latest build of the new Bootstrap 5 framework!', icon: 'bi-layers-fill' },
  { title: 'Easy to Use', description: 'Ready to use with your own content, or customize the source files!', icon: 'bi-terminal' },
];


const FeatureSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
