// import React from 'react';
// import '../Website.css';
// import './Facilities.css';

// const Transport = () => {
//   return (
//     <div className="website-container">
//       <section className="page-banner">
//         <div className="placeholder-image">Transport Banner</div>
//         <div className="banner-overlay">
//           <h1>Transport Services</h1>
//           <p>Safe and Reliable Transportation</p>
//         </div>
//       </section>

//       <section className="content-section">
//         <div className="section-header">
//           <h2>Our Transport Facilities</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="content-container">
//           <p>Our fleet of buses provides safe and comfortable transportation for students.</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Transport;

import React from "react";
import "../Website.css";
import "./Facilities.css";

const transportInfo = [
  {
    title: "GPS-Enabled Buses",
    description:
      "All our buses are equipped with GPS tracking for real-time location updates to ensure safety and timely arrival.",
    image:
      "https://img.freepik.com/free-photo/gps-navigation-application-mobile-phone_53876-124297.jpg",
  },
  {
    title: "Experienced Drivers",
    description:
      "Our drivers are well-trained, experienced, and follow all safety protocols to ensure secure transport.",
    image:
      "https://img.freepik.com/free-photo/driver-wearing-uniform-sitting-car_1303-27928.jpg",
  },
  {
    title: "Clean and Comfortable Seating",
    description:
      "Each vehicle is cleaned daily and offers comfortable seating with proper ventilation.",
    image:
      "https://img.freepik.com/free-photo/bus-interior-with-rows-seats_23-2148786743.jpg",
  },
  {
    title: "Route Management",
    description:
      "Transport routes are optimized for efficiency and cover all major localities around the school.",
    image:
      "https://img.freepik.com/free-photo/modern-navigation-equipment-showing-different-routes-city-map-generated-by-ai_188544-10265.jpg",
  },
];

const Transport = () => {
  return (
    <div className="website-container">
      <section className="page-banner">
        <div className="placeholder-image transport-banner">
          <img
            src="https://img.freepik.com/free-photo/yellow-school-bus-city-road_23-2149367309.jpg"
            alt="Transport Banner"
            className="banner-img"
          />
        </div>
        <div className="banner-overlay">
          <h1>Transport Services</h1>
          <p>Safe and Reliable Transportation for Every Student</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Our Transport Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-container">
          <p>
            Our school's transportation service ensures that every student
            reaches school and returns home safely and comfortably. We maintain
            high standards in safety, cleanliness, and timely operations to
            deliver a trustworthy experience for parents and children alike.
          </p>
        </div>

        <div className="transport-grid">
          {transportInfo.map((item, index) => (
            <div className="transport-card" key={index}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="transport-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Transport;
