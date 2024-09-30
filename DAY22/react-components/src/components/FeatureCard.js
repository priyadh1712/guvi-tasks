import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
                <i className={`bi ${icon} m-auto text-primary`} style={{ fontSize: '3rem' }}></i> 
            </div>
            <h3>{title}</h3>
            <p className="lead mb-0">{description}</p>
        </div>
    );
};

export default FeatureCard;
