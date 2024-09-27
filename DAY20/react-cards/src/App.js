import React from 'react';
import './App.css';

const plans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      { feature: "Single User", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: false },
      { feature: "Dedicated Phone Support", available: false },
      { feature: "Free Subdomain", available: false },
      { feature: "Monthly Status Reports", available: false }
    ],
  },
  {
    name: "PLUS",
    price: "$9/month",
    features: [
      { feature: "5 Users", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: true },
      { feature: "Dedicated Phone Support", available: true },
      { feature: "Free Subdomain", available: true },
      { feature: "Monthly Status Reports", available: false }
    ],
  },
  {
    name: "PRO",
    price: "$49/month",
    features: [
      { feature: "Unlimited Users", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: true },
      { feature: "Dedicated Phone Support", available: true },
      { feature: "Free Subdomain", available: true },
      { feature: "Monthly Status Reports", available: true }
    ],
  }
];

function App() {
  return (
    <div className="App">
      <div className="container">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h3 className="plan-name">{plan.name}</h3>
            <h2 className="plan-price">{plan.price}</h2>
            <ul className="features-list">
              {plan.features.map((item, idx) => (
                <li
                  key={idx}
                  className={item.available ? "available" : "unavailable"}
                >
                  {item.available ? "✔" : "✖"} {item.feature}
                </li>
              ))}
            </ul>
            <button className="choose-button">BUTTON</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
