// import React from "react";
// import "../Website.css";
// import "./Facilities.css";

// const Laboratory = () => {
//   return (
//     <div className="website-container">
//       <section className="page-banner">
//         <div className="placeholder-image">Laboratory Banner</div>
//         <div className="banner-overlay">
//           <h1>Laboratories</h1>
//           <p>State-of-the-art Scientific Facilities</p>
//         </div>
//       </section>

//       <section className="facilities-intro-section">
//         <div className="section-header">
//           <h2>Our Laboratories</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="facilities-intro-container">
//           <div className="facilities-intro-content">
//             <p>
//               Our well-equipped laboratories provide students with hands-on
//               learning experiences in various scientific disciplines. These
//               modern facilities are designed to foster practical understanding
//               and experimental learning.
//             </p>
//             <p>
//               Each laboratory is maintained to the highest safety standards and
//               is equipped with the latest scientific instruments and apparatus
//               to support both curriculum-based experiments and innovative
//               research projects.
//             </p>
//           </div>
//           <div className="facilities-intro-image">
//             <div className="placeholder-image">Laboratory Overview</div>
//           </div>
//         </div>
//       </section>

//       <section className="facilities-overview-section">
//         <div className="section-header">
//           <h2>Laboratory Facilities</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="facilities-overview-container">
//           <div className="facility-category">
//             <div className="category-icon">
//               <i className="fas fa-flask"></i>
//             </div>
//             <h3>Chemistry Laboratory</h3>
//             <ul className="facility-list">
//               <li>Advanced analytical instruments</li>
//               <li>Fume hoods and safety equipment</li>
//               <li>Chemical storage facilities</li>
//               <li>Individual workstations</li>
//               <li>Digital weighing scales</li>
//             </ul>
//           </div>

//           <div className="facility-category">
//             <div className="category-icon">
//               <i className="fas fa-atom"></i>
//             </div>
//             <h3>Physics Laboratory</h3>
//             <ul className="facility-list">
//               <li>Mechanics equipment</li>
//               <li>Optics and laser apparatus</li>
//               <li>Electrical instruments</li>
//               <li>Data logging systems</li>
//               <li>Modern measurement tools</li>
//             </ul>
//           </div>

//           <div className="facility-category">
//             <div className="category-icon">
//               <i className="fas fa-dna"></i>
//             </div>
//             <h3>Biology Laboratory</h3>
//             <ul className="facility-list">
//               <li>High-power microscopes</li>
//               <li>Specimen collection</li>
//               <li>Dissection kits</li>
//               <li>Biotechnology equipment</li>
//               <li>Environmental testing tools</li>
//             </ul>
//           </div>

//           <div className="facility-category">
//             <div className="category-icon">
//               <i className="fas fa-laptop-code"></i>
//             </div>
//             <h3>Computer Laboratory</h3>
//             <ul className="facility-list">
//               <li>High-performance computers</li>
//               <li>Scientific software</li>
//               <li>Data analysis tools</li>
//               <li>Programming environments</li>
//               <li>Virtual lab simulations</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="featured-facilities-section">
//         <div className="section-header">
//           <h2>Featured Laboratories</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="featured-facilities-container">
//           <div className="featured-facility">
//             <div className="facility-image">
//               <div className="placeholder-image">Advanced Chemistry Lab</div>
//             </div>
//             <div className="facility-details">
//               <h3>Advanced Chemistry Laboratory</h3>
//               <p>
//                 Our state-of-the-art chemistry laboratory is equipped with
//                 modern analytical instruments and safety features to facilitate
//                 both basic and advanced chemical experiments.
//               </p>
//               <ul className="facility-features">
//                 <li>Advanced spectrophotometers</li>
//                 <li>Digital pH meters and conductivity meters</li>
//                 <li>Modern distillation apparatus</li>
//                 <li>Chemical synthesis equipment</li>
//                 <li>Advanced safety systems</li>
//               </ul>
//             </div>
//           </div>

//           <div className="featured-facility reverse">
//             <div className="facility-image">
//               <div className="placeholder-image">Research Lab</div>
//             </div>
//             <div className="facility-details">
//               <h3>Research Laboratory</h3>
//               <p>
//                 A dedicated space for advanced research projects and
//                 experiments, equipped with specialized instruments and
//                 facilities for conducting innovative scientific investigations.
//               </p>
//               <ul className="facility-features">
//                 <li>Advanced research equipment</li>
//                 <li>Data analysis workstations</li>
//                 <li>Project presentation area</li>
//                 <li>Research documentation center</li>
//                 <li>Collaborative workspace</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Laboratory;
import React from "react";
import "../Website.css";
import "./Facilities.css";
import { FaFlask, FaAtom, FaDna, FaLaptopCode } from "react-icons/fa";

const Laboratory = () => {
  // Image URLs from free image services
  const labBanner =
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const labOverview =
    "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const chemLab =
    "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const physicsLab =
    "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const bioLab =
    "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const compLab =
    "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const researchLab =
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <div className="website-container">
      {/* Hero Banner */}
      <section className="page-banner lab-banner">
        <img
          src={labBanner}
          alt="School Laboratories"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>Advanced Science Laboratories</h1>
          <p>Where Theory Meets Practical Discovery</p>
          <div className="opening-hours">
            <span>Supervised Access: Monday-Friday: 8:00 AM - 5:00 PM</span>
            <span>Safety Certification Required for Independent Use</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section intro-section">
        <div className="section-header">
          <h2>Our Scientific Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-container two-column">
          <div className="text-content">
            <p>
              Our cutting-edge laboratories provide students with hands-on
              learning experiences across all scientific disciplines. These
              modern facilities are designed to foster practical understanding,
              experimental learning, and innovative research.
            </p>
            <p>
              Each laboratory is maintained to the highest safety standards and
              equipped with the latest scientific instruments to support both
              curriculum-based experiments and advanced research projects.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Specialized Labs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Modern Instruments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Safety Monitoring</span>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src={labOverview}
              alt="Laboratory overview"
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="content-section facilities-section">
        <div className="section-header">
          <h2>Laboratory Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facilities-grid">
          <div className="facility-card">
            <div className="facility-icon">
              <FaFlask className="icon" />
            </div>
            <img
              src={chemLab}
              alt="Chemistry laboratory"
              className="facility-image"
            />
            <h3>Chemistry Laboratory</h3>
            <ul className="facility-list">
              <li>Advanced analytical instruments</li>
              <li>Fume hoods and safety equipment</li>
              <li>Chemical storage facilities</li>
              <li>Individual workstations</li>
              <li>Digital weighing scales</li>
            </ul>
          </div>

          <div className="facility-card">
            <div className="facility-icon">
              <FaAtom className="icon" />
            </div>
            <img
              src={physicsLab}
              alt="Physics laboratory"
              className="facility-image"
            />
            <h3>Physics Laboratory</h3>
            <ul className="facility-list">
              <li>Mechanics equipment</li>
              <li>Optics and laser apparatus</li>
              <li>Electrical instruments</li>
              <li>Data logging systems</li>
              <li>Modern measurement tools</li>
            </ul>
          </div>

          <div className="facility-card">
            <div className="facility-icon">
              <FaDna className="icon" />
            </div>
            <img
              src={bioLab}
              alt="Biology laboratory"
              className="facility-image"
            />
            <h3>Biology Laboratory</h3>
            <ul className="facility-list">
              <li>High-power microscopes</li>
              <li>Specimen collection</li>
              <li>Dissection kits</li>
              <li>Biotechnology equipment</li>
              <li>Environmental testing tools</li>
            </ul>
          </div>

          <div className="facility-card">
            <div className="facility-icon">
              <FaLaptopCode className="icon" />
            </div>
            <img
              src={compLab}
              alt="Computer laboratory"
              className="facility-image"
            />
            <h3>Computer Laboratory</h3>
            <ul className="facility-list">
              <li>High-performance computers</li>
              <li>Scientific software</li>
              <li>Data analysis tools</li>
              <li>Programming environments</li>
              <li>Virtual lab simulations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Labs Section */}
      <section className="content-section featured-section">
        <div className="section-header">
          <h2>Featured Laboratories</h2>
          <div className="section-divider"></div>
        </div>

        <div className="featured-lab">
          <div className="featured-image">
            <img src={chemLab} alt="Advanced Chemistry Lab" />
          </div>
          <div className="featured-content">
            <h3>Advanced Chemistry Laboratory</h3>
            <p>
              Our state-of-the-art chemistry laboratory is equipped with modern
              analytical instruments and safety features to facilitate both
              basic and advanced chemical experiments.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🔬</span>
                <span>Advanced spectrophotometers</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Digital pH meters</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚗️</span>
                <span>Modern distillation apparatus</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🧪</span>
                <span>Chemical synthesis equipment</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span>Advanced safety systems</span>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-lab reverse">
          <div className="featured-image">
            <img src={researchLab} alt="Research Laboratory" />
          </div>
          <div className="featured-content">
            <h3>Research Laboratory</h3>
            <p>
              A dedicated space for advanced research projects and experiments,
              equipped with specialized instruments and facilities for
              conducting innovative scientific investigations.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span>Advanced research equipment</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💻</span>
                <span>Data analysis workstations</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Project presentation area</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span>Research documentation center</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Collaborative workspace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="content-section safety-section">
        <div className="section-header">
          <h2>Safety First</h2>
          <div className="section-divider"></div>
        </div>
        <div className="safety-content">
          <div className="safety-message">
            <h3>Our Commitment to Safety</h3>
            <p>
              All laboratory activities are conducted under strict safety
              protocols with certified instructors. Students receive
              comprehensive safety training before working in any laboratory
              environment.
            </p>
            <ul className="safety-features">
              <li>24/7 emergency response systems</li>
              <li>Regular safety audits and equipment checks</li>
              <li>Certified safety officers on staff</li>
              <li>Personal protective equipment provided</li>
              <li>Chemical spill containment systems</li>
            </ul>
          </div>
          <div className="safety-badge">
            <div className="badge-icon">🛡️</div>
            <div className="badge-text">Certified Safe Laboratories</div>
            <div className="badge-subtext">
              ISO 9001 Safety Standards Compliant
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
