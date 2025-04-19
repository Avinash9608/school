// import React from "react";
// import { Link } from "react-router-dom";
// import "../Website.css";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="website-container">
//       {/* Banner Section */}
//       <section className="page-banner">
//         <div className="placeholder-image">About Us Banner</div>
//         <div className="banner-overlay">
//           <h1>About Us</h1>
//           <p>Learn about our history, vision, and achievements</p>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="about-intro-section">
//         <div className="section-header">
//           <h2>Welcome to Excellence Academy</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="about-intro-container">
//           <div className="about-intro-content">
//             <p>
//               Excellence Academy is a premier educational institution committed
//               to providing high-quality education in a nurturing environment.
//               Established in 1995, our school has been a beacon of academic
//               excellence and holistic development for over 25 years.
//             </p>
//             <p>
//               At Excellence Academy, we believe that education is not just about
//               academic achievement, but also about developing character,
//               creativity, and compassion. Our comprehensive curriculum and
//               dedicated faculty ensure that students receive a well-rounded
//               education that prepares them for future success.
//             </p>
//             <p>
//               Our state-of-the-art facilities, including modern classrooms,
//               well-equipped laboratories, extensive library, and sports complex,
//               provide an ideal learning environment for students to discover and
//               develop their potential.
//             </p>
//           </div>
//           <div className="about-intro-image">
//             <div className="placeholder-image">School Building</div>
//             <div className="about-stats">
//               <div className="about-stat">
//                 <h3>25+</h3>
//                 <p>Years of Excellence</p>
//               </div>
//               <div className="about-stat">
//                 <h3>5000+</h3>
//                 <p>Students</p>
//               </div>
//               <div className="about-stat">
//                 <h3>200+</h3>
//                 <p>Faculty Members</p>
//               </div>
//               <div className="about-stat">
//                 <h3>100%</h3>
//                 <p>Board Results</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="vision-mission-section">
//         <div className="section-header">
//           <h2>Our Vision & Mission</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="vision-mission-container">
//           <div className="vision-card">
//             <div className="vision-icon">
//               <i className="fas fa-eye"></i>
//             </div>
//             <h3>Our Vision</h3>
//             <p>
//               To be a center of excellence in education that nurtures
//               individuals to become lifelong learners, critical thinkers, and
//               responsible global citizens who contribute positively to society.
//             </p>
//           </div>
//           <div className="mission-card">
//             <div className="mission-icon">
//               <i className="fas fa-bullseye"></i>
//             </div>
//             <h3>Our Mission</h3>
//             <ul className="mission-list">
//               <li>
//                 Provide quality education that balances academic rigor with
//                 holistic development
//               </li>
//               <li>Foster a supportive and inclusive learning environment</li>
//               <li>
//                 Develop critical thinking, creativity, and problem-solving
//                 skills
//               </li>
//               <li>
//                 Instill values of integrity, respect, and social responsibility
//               </li>
//               <li>
//                 Embrace innovation and continuous improvement in teaching
//                 methodologies
//               </li>
//               <li>Build strong partnerships with parents and the community</li>
//             </ul>
//           </div>
//         </div>
//         <div className="vision-mission-link">
//           <Link to="/about/vision-mission" className="btn btn-primary">
//             Learn More
//           </Link>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="core-values-section">
//         <div className="section-header">
//           <h2>Our Core Values</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="core-values-container">
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-star"></i>
//             </div>
//             <h3>Excellence</h3>
//             <p>Striving for the highest standards in all endeavors</p>
//           </div>
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-balance-scale"></i>
//             </div>
//             <h3>Integrity</h3>
//             <p>Upholding honesty, ethics, and moral principles</p>
//           </div>
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-hands-helping"></i>
//             </div>
//             <h3>Respect</h3>
//             <p>Valuing diversity and treating all with dignity</p>
//           </div>
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-lightbulb"></i>
//             </div>
//             <h3>Innovation</h3>
//             <p>Embracing creativity and forward-thinking approaches</p>
//           </div>
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-users"></i>
//             </div>
//             <h3>Collaboration</h3>
//             <p>Working together to achieve common goals</p>
//           </div>
//           <div className="core-value-card">
//             <div className="core-value-icon">
//               <i className="fas fa-globe-asia"></i>
//             </div>
//             <h3>Global Citizenship</h3>
//             <p>Developing awareness and responsibility towards the world</p>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <section className="leadership-section">
//         <div className="section-header">
//           <h2>Our Leadership</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="leadership-container">
//           <div className="leadership-card">
//             <div className="leadership-image">
//               <div className="placeholder-image">Chairman Photo</div>
//             </div>
//             <div className="leadership-info">
//               <h3>Dr. Rajesh Kumar</h3>
//               <p className="leadership-position">Chairman</p>
//               <p className="leadership-quote">
//                 "Education is the most powerful tool we can use to change the
//                 world."
//               </p>
//               <p className="leadership-description">
//                 Dr. Rajesh Kumar, with over 30 years of experience in education,
//                 leads our institution with a vision to transform education and
//                 empower students to become future leaders.
//               </p>
//             </div>
//           </div>
//           <div className="leadership-card">
//             <div className="leadership-image">
//               <div className="placeholder-image">Principal Photo</div>
//             </div>
//             <div className="leadership-info">
//               <h3>Dr. Sarah Johnson</h3>
//               <p className="leadership-position">Principal</p>
//               <p className="leadership-quote">
//                 "At Excellence Academy, we nurture not just academic excellence
//                 but also character, creativity, and compassion."
//               </p>
//               <p className="leadership-description">
//                 Dr. Sarah Johnson brings her extensive experience in educational
//                 leadership to create an environment where students thrive
//                 academically and personally.
//               </p>
//               <Link to="/about/principal-message" className="btn btn-sm">
//                 Read Principal's Message
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* History Timeline Section */}
//       <section className="history-section">
//         <div className="section-header">
//           <h2>Our Journey</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="timeline-container">
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">1995</div>
//               <div className="timeline-content">
//                 <h3>Foundation</h3>
//                 <p>
//                   Excellence Academy was established with a vision to provide
//                   quality education.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">2000</div>
//               <div className="timeline-content">
//                 <h3>Expansion</h3>
//                 <p>
//                   The school expanded its campus and introduced senior secondary
//                   classes.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">2005</div>
//               <div className="timeline-content">
//                 <h3>Technology Integration</h3>
//                 <p>
//                   Smart classrooms and computer labs were introduced to enhance
//                   learning.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">2010</div>
//               <div className="timeline-content">
//                 <h3>Sports Complex</h3>
//                 <p>
//                   A state-of-the-art sports complex was inaugurated to promote
//                   physical fitness.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">2015</div>
//               <div className="timeline-content">
//                 <h3>International Recognition</h3>
//                 <p>
//                   The school received international accreditation for its
//                   educational standards.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-date">2020</div>
//               <div className="timeline-content">
//                 <h3>Digital Transformation</h3>
//                 <p>
//                   Successfully implemented online learning during the pandemic
//                   and beyond.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="history-link">
//           <Link to="/about/history" className="btn btn-primary">
//             Explore Our Full History
//           </Link>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section className="achievements-section">
//         <div className="section-header">
//           <h2>Our Achievements</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="achievements-container">
//           <div className="achievement-card">
//             <div className="achievement-icon">
//               <i className="fas fa-trophy"></i>
//             </div>
//             <h3>Academic Excellence</h3>
//             <ul className="achievement-list">
//               <li>
//                 100% pass rate in board examinations for the last 10 years
//               </li>
//               <li>Over 75% students scoring above 90% in board examinations</li>
//               <li>National toppers in various competitive examinations</li>
//             </ul>
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">
//               <i className="fas fa-medal"></i>
//             </div>
//             <h3>Sports Achievements</h3>
//             <ul className="achievement-list">
//               <li>
//                 National champions in inter-school cricket tournament (2019,
//                 2021)
//               </li>
//               <li>State-level basketball champions for 5 consecutive years</li>
//               <li>
//                 Multiple students selected for national-level sports
//                 competitions
//               </li>
//             </ul>
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">
//               <i className="fas fa-award"></i>
//             </div>
//             <h3>Co-curricular Excellence</h3>
//             <ul className="achievement-list">
//               <li>Winners of National Science Exhibition (2018, 2020)</li>
//               <li>
//                 First prize in Inter-school Cultural Festival (2019, 2021)
//               </li>
//               <li>Recognition for environmental conservation initiatives</li>
//             </ul>
//           </div>
//         </div>
//         <div className="achievements-link">
//           <Link to="/about/achievements" className="btn btn-primary">
//             View All Achievements
//           </Link>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <div className="section-header">
//           <h2>What People Say</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="testimonials-slider">
//           <div className="testimonial-card">
//             <div className="testimonial-content">
//               <i className="fas fa-quote-left"></i>
//               <p>
//                 "Excellence Academy has provided my child with not just academic
//                 knowledge but also valuable life skills. The teachers are caring
//                 and the facilities are excellent."
//               </p>
//             </div>
//             <div className="testimonial-author">
//               <h4>Mrs. Priya Sharma</h4>
//               <p>Parent of Aarav Sharma, Class 8</p>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <div className="testimonial-content">
//               <i className="fas fa-quote-left"></i>
//               <p>
//                 "We chose Excellence Academy for its holistic approach to
//                 education. Our daughter has flourished academically and has
//                 developed confidence through various co-curricular activities."
//               </p>
//             </div>
//             <div className="testimonial-author">
//               <h4>Mr. Rajesh Patel</h4>
//               <p>Parent of Ananya Patel, Class 5</p>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <div className="testimonial-content">
//               <i className="fas fa-quote-left"></i>
//               <p>
//                 "As an alumnus of Excellence Academy, I can confidently say that
//                 the values and education I received here have shaped my career
//                 and life in the most positive way."
//               </p>
//             </div>
//             <div className="testimonial-author">
//               <h4>Dr. Amit Verma</h4>
//               <p>Alumnus, Batch of 2010</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Join Excellence Academy</h2>
//           <p>Take the first step towards a bright future for your child.</p>
//           <div className="cta-buttons">
//             <Link to="/admissions" className="btn btn-primary">
//               Apply Now
//             </Link>
//             <Link to="/contact" className="btn btn-secondary">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { Link } from "react-router-dom";
import "../Website.css";
import "./About.css";

const About = () => {
  return (
    <div className="website-container">
      {/* Hero Banner Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover Excellence Academy</h1>
            <p className="hero-subtitle">
              Where Tradition Meets Innovation in Education
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">University Acceptance</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Extracurricular Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Navigation */}
      <section className="about-quick-links">
        <div className="quick-links-container">
          <Link to="#history" className="quick-link">
            <i className="fas fa-history"></i> Our History
          </Link>
          <Link to="#leadership" className="quick-link">
            <i className="fas fa-users"></i> Leadership
          </Link>
          <Link to="#facilities" className="quick-link">
            <i className="fas fa-building"></i> Facilities
          </Link>
          <Link to="#testimonials" className="quick-link">
            <i className="fas fa-quote-left"></i> Testimonials
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="section-header">
          <h2>Welcome to Excellence Academy</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Established in 1995 | CBSE Affiliated | ISO 9001 Certified
          </p>
        </div>
        <div className="about-intro-container">
          <div className="about-intro-content">
            <p className="intro-highlight">
              Excellence Academy is more than just a school - it's a vibrant
              learning community where students from Kindergarten to Grade 12
              discover their potential, pursue their passions, and prepare for
              success in an ever-changing world.
            </p>
            <p>
              Our sprawling 10-acre campus in the heart of the city provides the
              perfect environment for academic rigor and creative exploration.
              With a student-teacher ratio of 12:1, we ensure personalized
              attention and mentorship for every child.
            </p>
            <div className="accolades">
              <div className="accolade">
                <i className="fas fa-award"></i>
                <span>
                  Ranked #1 School in the State (Education Today 2023)
                </span>
              </div>
              <div className="accolade">
                <i className="fas fa-leaf"></i>
                <span>Green School Award Winner (2020, 2022)</span>
              </div>
            </div>
          </div>
          <div className="about-intro-image">
            <div className="image-gallery">
              <div
                className="main-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
                }}
              ></div>
              <div className="thumbnail-row">
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                  }}
                ></div>
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                  }}
                ></div>
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence Section */}
      <section className="pillars-section">
        <div className="section-header">
          <h2>Our Pillars of Excellence</h2>
          <div className="section-divider"></div>
        </div>
        <div className="pillars-container">
          <div className="pillar-card">
            <div className="pillar-icon academic-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Academic Rigor</h3>
            <ul>
              <li>CBSE curriculum with STEM focus</li>
              <li>Advanced Placement courses</li>
              <li>Research opportunities</li>
              <li>University partnerships</li>
            </ul>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon creative-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Creative Expression</h3>
            <ul>
              <li>Visual and performing arts</li>
              <li>Innovation lab</li>
              <li>Creative writing program</li>
              <li>Digital media studio</li>
            </ul>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon athletic-icon">
              <i className="fas fa-running"></i>
            </div>
            <h3>Athletic Development</h3>
            <ul>
              <li>Olympic-size swimming pool</li>
              <li>Indoor sports complex</li>
              <li>Professional coaching</li>
              <li>Sports scholarships</li>
            </ul>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon global-icon">
              <i className="fas fa-globe-americas"></i>
            </div>
            <h3>Global Citizenship</h3>
            <ul>
              <li>International exchange programs</li>
              <li>Model UN</li>
              <li>Language immersion</li>
              <li>Social impact projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="vm-container">
          <div className="vision-box">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <div className="vision-text">
                <p>
                  To be a transformative educational institution that develops
                  compassionate leaders and innovative thinkers who will shape a
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
          <div className="mission-box">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <div className="mission-points">
                <div className="mission-item">
                  <div className="mission-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <p>
                    Ignite intellectual curiosity through inquiry-based learning
                  </p>
                </div>
                <div className="mission-item">
                  <div className="mission-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <p>Nurture emotional intelligence and ethical values</p>
                </div>
                <div className="mission-item">
                  <div className="mission-icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <p>Foster community engagement and social responsibility</p>
                </div>
                <div className="mission-item">
                  <div className="mission-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <p>
                    Develop global perspectives and cross-cultural understanding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section id="history" className="history-section">
        <div className="section-header">
          <h2>Our Journey Through Time</h2>
          <div className="section-divider"></div>
        </div>
        <div className="timeline-container">
          <div className="timeline-progress"></div>

          <div className="timeline-item left">
            <div className="timeline-year">1995</div>
            <div className="timeline-content">
              <h3>Foundation</h3>
              <p>
                Excellence Academy founded with 120 students and 8 teachers in a
                modest building
              </p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-year">2002</div>
            <div className="timeline-content">
              <h3>First Expansion</h3>
              <p>
                New science block and library added, student body grows to 500
              </p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-year">2008</div>
            <div className="timeline-content">
              <h3>International Recognition</h3>
              <p>Received International School Award from British Council</p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-year">2015</div>
            <div className="timeline-content">
              <h3>Campus Transformation</h3>
              <p>
                New 10-acre campus inaugurated with state-of-the-art facilities
              </p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Digital Leap</h3>
              <p>
                Pioneered hybrid learning model during pandemic, adopted smart
                classrooms throughout
              </p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Current Excellence</h3>
              <p>
                Recognized as top-ranked school in the state with 100% college
                acceptance
              </p>
              <div
                className="timeline-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="history-more">
          <Link to="/about/history" className="btn btn-outline">
            Explore Our Full History <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="leadership-section">
        <div className="section-header">
          <h2>Meet Our Leadership</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Guiding Excellence Academy Towards the Future
          </p>
        </div>

        <div className="leadership-container">
          <div className="leader-card founder">
            <div
              className="leader-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
              }}
            ></div>
            <div className="leader-info">
              <h3>Dr. Rajesh Kumar</h3>
              <p className="position">Founder & Chairman</p>
              <p className="bio">
                With over 35 years in education, Dr. Kumar established
                Excellence Academy with the vision of creating a world-class
                institution. His leadership has guided our growth from a small
                school to a nationally recognized center of learning excellence.
              </p>
              <div className="leader-quote">
                "Education should light fires, not fill buckets. Our mission is
                to inspire lifelong learners who will shape tomorrow's world."
              </div>
              <Link to="/about/chairman-message" className="btn btn-sm">
                Read Full Profile
              </Link>
            </div>
          </div>

          <div className="leader-card principal">
            <div
              className="leader-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
              }}
            ></div>
            <div className="leader-info">
              <h3>Dr. Priya Menon</h3>
              <p className="position">Principal</p>
              <p className="bio">
                Dr. Menon brings 20 years of progressive educational leadership
                experience. Under her guidance, Excellence Academy has
                implemented innovative teaching methodologies and achieved
                record academic results.
              </p>
              <div className="leader-quote">
                "Every child has unique talents waiting to be discovered. We
                provide the environment where those talents can flourish."
              </div>
              <Link to="/about/principal-message" className="btn btn-sm">
                Read Principal's Message
              </Link>
            </div>
          </div>

          <div className="leader-grid">
            <div className="leader-item">
              <div
                className="leader-thumbnail"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')",
                }}
              ></div>
              <h4>Mr. Amit Sharma</h4>
              <p>Head of Academics</p>
            </div>
            <div className="leader-item">
              <div
                className="leader-thumbnail"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')",
                }}
              ></div>
              <h4>Ms. Neha Gupta</h4>
              <p>Dean of Student Life</p>
            </div>
            <div className="leader-item">
              <div
                className="leader-thumbnail"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')",
                }}
              ></div>
              <h4>Dr. Sanjay Patel</h4>
              <p>Director of Innovation</p>
            </div>
            <div className="leader-item">
              <div
                className="leader-thumbnail"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')",
                }}
              ></div>
              <h4>Ms. Ananya Reddy</h4>
              <p>Head of Admissions</p>
            </div>
          </div>
        </div>

        <div className="leadership-more">
          <Link to="/about/leadership" className="btn btn-outline">
            View Full Leadership Team <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="facilities-section">
        <div className="section-header">
          <h2>Our World-Class Facilities</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Designed to Inspire Learning and Growth
          </p>
        </div>

        <div className="facilities-gallery">
          <div
            className="facility-card large"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
            }}
          >
            <div className="facility-content">
              <h3>STEM Innovation Center</h3>
              <p>
                Cutting-edge labs for robotics, biotechnology, and computer
                science
              </p>
              <Link
                to="/facilities/stem-center"
                className="btn btn-transparent"
              >
                Explore <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="facility-card"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
            }}
          >
            <div className="facility-content">
              <h3>Performing Arts Theater</h3>
              <p>500-seat auditorium with professional sound and lighting</p>
            </div>
          </div>

          <div
            className="facility-card"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
            }}
          >
            <div className="facility-content">
              <h3>Athletic Complex</h3>
              <p>
                Olympic-size pool, indoor courts, and professional training
                facilities
              </p>
            </div>
          </div>

          <div
            className="facility-card"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
            }}
          >
            <div className="facility-content">
              <h3>Learning Commons</h3>
              <p>Modern library with 50,000+ print and digital resources</p>
            </div>
          </div>

          <div
            className="facility-card"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
            }}
          >
            <div className="facility-content">
              <h3>Visual Arts Studio</h3>
              <p>Spacious studios for painting, sculpture, and digital arts</p>
            </div>
          </div>
        </div>

        <div className="facilities-more">
          <Link to="/about/facilities" className="btn btn-outline">
            Take Virtual Campus Tour <i className="fas fa-vr-cardboard"></i>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <h2>Hear From Our Community</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Stories of Growth and Success</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>
                "Excellence Academy provided our daughter with opportunities we
                never imagined. The personalized attention and diverse programs
                helped her discover her passion for environmental science. She's
                now studying at Stanford with a full scholarship!"
              </p>
              <div className="testimonial-author">
                <div
                  className="author-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')",
                  }}
                ></div>
                <div className="author-info">
                  <h4>Mrs. Sunita Rao</h4>
                  <p>Parent of Anika Rao, Class of 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>
                "The research opportunities I had at Excellence Academy set me
                apart in my college applications. My teachers didn't just teach
                - they mentored me through national competitions and helped me
                publish my first scientific paper at 17."
              </p>
              <div className="testimonial-author">
                <div
                  className="author-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')",
                  }}
                ></div>
                <div className="author-info">
                  <h4>Rahul Mehta</h4>
                  <p>Alumnus, MIT '25</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>
                "Teaching at Excellence Academy is incredibly rewarding. The
                administration supports innovative teaching methods, and the
                students' enthusiasm for learning makes every day exciting. The
                professional development opportunities are unmatched."
              </p>
              <div className="testimonial-author">
                <div
                  className="author-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')",
                  }}
                ></div>
                <div className="author-info">
                  <h4>Ms. Deepika Iyer</h4>
                  <p>Physics Faculty, 8 years at EA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-more">
          <Link to="/about/success-stories" className="btn btn-outline">
            Read More Success Stories <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="accreditation-section">
        <div className="section-header">
          <h2>Our Accreditations & Partnerships</h2>
          <div className="section-divider"></div>
        </div>

        <div className="accreditation-logos">
          <div className="logo-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/CBSE_logo.svg/1200px-CBSE_logo.svg.png"
              alt="CBSE"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ISO_9001_logo.svg/1200px-ISO_9001_logo.svg.png"
              alt="ISO 9001"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/British_Council_logo.svg/1200px-British_Council_logo.svg.png"
              alt="British Council"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
              alt="Microsoft"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png"
              alt="MIT"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Join the Excellence Academy Family?</h2>
            <p>
              Schedule a campus tour or begin your application process today.
              Our admissions team is ready to answer all your questions.
            </p>
            <div className="cta-buttons">
              <Link to="/admissions" className="btn btn-primary">
                <i className="fas fa-file-alt"></i> Apply Now
              </Link>
              <Link to="/visit" className="btn btn-secondary">
                <i className="fas fa-calendar-alt"></i> Schedule a Visit
              </Link>
            </div>
          </div>
          <div
            className="cta-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default About;
