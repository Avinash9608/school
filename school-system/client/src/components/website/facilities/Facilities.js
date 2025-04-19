import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './Facilities.css';

const Facilities = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Facilities Banner</div>
        <div className="banner-overlay">
          <h1>Our Facilities</h1>
          <p>State-of-the-art infrastructure for holistic development</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="facilities-intro-section">
        <div className="section-header">
          <h2>World-Class Infrastructure</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facilities-intro-container">
          <div className="facilities-intro-content">
            <p>
              At Excellence Academy, we believe that a conducive learning environment is essential 
              for the holistic development of students. Our state-of-the-art facilities are designed 
              to provide students with the resources and spaces they need to explore, learn, and grow.
            </p>
            <p>
              Spread across a sprawling 10-acre campus, our school features modern infrastructure 
              that combines functionality with aesthetics. From spacious classrooms and well-equipped 
              laboratories to extensive sports facilities and creative spaces, we have created an 
              environment that nurtures academic excellence, physical fitness, and creative expression.
            </p>
            <p>
              Our facilities are regularly updated and maintained to ensure that they meet the highest 
              standards of safety, comfort, and educational effectiveness. We continuously invest in 
              enhancing our infrastructure to provide our students with the best possible learning 
              experience.
            </p>
          </div>
          <div className="facilities-intro-image">
            <div className="placeholder-image">Campus Aerial View</div>
          </div>
        </div>
      </section>

      {/* Facilities Overview Section */}
      <section className="facilities-overview-section">
        <div className="section-header">
          <h2>Facilities at a Glance</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facilities-overview-container">
          <div className="facility-category">
            <div className="category-icon">
              <i className="fas fa-chalkboard"></i>
            </div>
            <h3>Academic Facilities</h3>
            <ul className="facility-list">
              <li>60 Smart Classrooms</li>
              <li>Science Laboratories (Physics, Chemistry, Biology)</li>
              <li>Computer Labs with 200+ Computers</li>
              <li>Mathematics Lab</li>
              <li>Language Lab</li>
              <li>STEM Innovation Center</li>
            </ul>
          </div>
          <div className="facility-category">
            <div className="category-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Library & Resource Centers</h3>
            <ul className="facility-list">
              <li>Central Library with 20,000+ Books</li>
              <li>Digital Resource Center</li>
              <li>Reading Rooms</li>
              <li>Career Guidance Center</li>
              <li>Research Facilities</li>
            </ul>
          </div>
          <div className="facility-category">
            <div className="category-icon">
              <i className="fas fa-futbol"></i>
            </div>
            <h3>Sports Facilities</h3>
            <ul className="facility-list">
              <li>Olympic-size Swimming Pool</li>
              <li>400m Athletic Track</li>
              <li>Football Field</li>
              <li>Basketball Courts</li>
              <li>Tennis Courts</li>
              <li>Indoor Sports Complex</li>
              <li>Yoga and Fitness Center</li>
            </ul>
          </div>
          <div className="facility-category">
            <div className="category-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Arts & Cultural Facilities</h3>
            <ul className="facility-list">
              <li>Auditorium (500+ Seating Capacity)</li>
              <li>Music Rooms</li>
              <li>Dance Studios</li>
              <li>Art Rooms</li>
              <li>Pottery and Sculpture Studio</li>
              <li>Theater Workshop Space</li>
            </ul>
          </div>
          <div className="facility-category">
            <div className="category-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <h3>Other Facilities</h3>
            <ul className="facility-list">
              <li>Cafeteria</li>
              <li>Medical Center</li>
              <li>Counseling Center</li>
              <li>Transport Fleet (50+ Buses)</li>
              <li>Eco-Garden</li>
              <li>Solar Power Plant</li>
              <li>Rainwater Harvesting System</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Facilities Section */}
      <section className="featured-facilities-section">
        <div className="section-header">
          <h2>Featured Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="featured-facilities-container">
          {/* Smart Classrooms */}
          <div className="featured-facility">
            <div className="facility-image">
              <div className="placeholder-image">Smart Classroom</div>
            </div>
            <div className="facility-details">
              <h3>Smart Classrooms</h3>
              <p>
                Our smart classrooms are equipped with interactive whiteboards, projectors, and 
                high-speed internet connectivity. These technology-enabled learning spaces facilitate 
                interactive and engaging lessons, making learning more effective and enjoyable.
              </p>
              <ul className="facility-features">
                <li>Interactive whiteboards with touch functionality</li>
                <li>High-definition projectors</li>
                <li>Surround sound systems</li>
                <li>Document cameras</li>
                <li>Integrated control systems</li>
              </ul>
              <Link to="/facilities/classrooms" className="btn btn-primary">Learn More</Link>
            </div>
          </div>

          {/* Science Laboratories */}
          <div className="featured-facility reverse">
            <div className="facility-image">
              <div className="placeholder-image">Science Lab</div>
            </div>
            <div className="facility-details">
              <h3>Science Laboratories</h3>
              <p>
                Our state-of-the-art science laboratories provide students with hands-on learning 
                experiences in physics, chemistry, and biology. Equipped with modern apparatus and 
                safety features, these labs enable students to conduct experiments and develop a 
                deeper understanding of scientific concepts.
              </p>
              <ul className="facility-features">
                <li>Separate labs for Physics, Chemistry, and Biology</li>
                <li>Modern scientific equipment and apparatus</li>
                <li>Safety features including emergency showers and eyewash stations</li>
                <li>Digital data logging and analysis tools</li>
                <li>Demonstration areas with visualization capabilities</li>
              </ul>
              <Link to="/facilities/laboratories" className="btn btn-primary">Learn More</Link>
            </div>
          </div>

          {/* Library */}
          <div className="featured-facility">
            <div className="facility-image">
              <div className="placeholder-image">Library</div>
            </div>
            <div className="facility-details">
              <h3>Central Library</h3>
              <p>
                Our central library is a treasure trove of knowledge with over 20,000 books, journals, 
                magazines, and digital resources. The library provides a quiet and conducive environment 
                for reading, research, and self-study.
              </p>
              <ul className="facility-features">
                <li>Extensive collection of books across various subjects</li>
                <li>Digital resources and e-books</li>
                <li>Comfortable reading areas</li>
                <li>Online catalog and reservation system</li>
                <li>Research assistance and information literacy programs</li>
              </ul>
              <Link to="/facilities/library" className="btn btn-primary">Learn More</Link>
            </div>
          </div>

          {/* Sports Complex */}
          <div className="featured-facility reverse">
            <div className="facility-image">
              <div className="placeholder-image">Sports Complex</div>
            </div>
            <div className="facility-details">
              <h3>Sports Complex</h3>
              <p>
                Our comprehensive sports complex caters to a wide range of sports and physical activities. 
                From track and field to swimming, basketball to tennis, we provide facilities for various 
                sports to promote physical fitness and sportsmanship.
              </p>
              <ul className="facility-features">
                <li>Olympic-size swimming pool with temperature control</li>
                <li>400m athletic track with synthetic surface</li>
                <li>Football field with natural grass</li>
                <li>Basketball courts with professional flooring</li>
                <li>Indoor sports complex for badminton, table tennis, and more</li>
              </ul>
              <Link to="/facilities/sports" className="btn btn-primary">Learn More</Link>
            </div>
          </div>

          {/* Transport */}
          <div className="featured-facility">
            <div className="facility-image">
              <div className="placeholder-image">School Bus</div>
            </div>
            <div className="facility-details">
              <h3>Transport Facilities</h3>
              <p>
                Our fleet of over 50 buses provides safe and comfortable transportation for students 
                from various parts of the city. All buses are equipped with GPS tracking, CCTV cameras, 
                and trained staff to ensure the safety and security of students.
              </p>
              <ul className="facility-features">
                <li>GPS-enabled buses for real-time tracking</li>
                <li>CCTV cameras for enhanced security</li>
                <li>Trained drivers and attendants</li>
                <li>Regular maintenance and safety checks</li>
                <li>Mobile app for parents to track bus location</li>
              </ul>
              <Link to="/facilities/transport" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="virtual-tour-section">
        <div className="section-header">
          <h2>Virtual Tour</h2>
          <div className="section-divider"></div>
        </div>
        <div className="virtual-tour-container">
          <div className="tour-intro">
            <p>
              Experience our campus virtually through our interactive 360° tour. Explore our classrooms, 
              laboratories, library, sports facilities, and more from the comfort of your home.
            </p>
          </div>
          <div className="tour-video">
            <div className="placeholder-image">Virtual Tour Video</div>
            <div className="play-button">
              <i className="fas fa-play"></i>
            </div>
          </div>
          <div className="tour-cta">
            <a href="#" className="btn btn-primary">Start Virtual Tour</a>
            <p>Or visit our campus in person. <Link to="/contact">Schedule a visit</Link></p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="facilities-testimonials-section">
        <div className="section-header">
          <h2>What People Say About Our Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facilities-testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "The state-of-the-art facilities at Excellence Academy have significantly enhanced my 
                daughter's learning experience. The smart classrooms, well-equipped laboratories, and 
                extensive library resources have fostered her curiosity and love for learning."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mrs. Priya Sharma</h4>
              <p>Parent</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "As a sports enthusiast, I am impressed by the comprehensive sports facilities at 
                Excellence Academy. The swimming pool, athletic track, and indoor sports complex 
                provide excellent opportunities for students to develop their sporting talents."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mr. Rajesh Patel</h4>
              <p>Sports Coach</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "The library at Excellence Academy is a researcher's paradise. The extensive collection 
                of books, journals, and digital resources, along with the peaceful environment, makes 
                it an ideal place for reading and research."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Dr. Amit Verma</h4>
              <p>Educational Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Booking Section */}
      <section className="facility-booking-section">
        <div className="section-header">
          <h2>Facility Booking</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facility-booking-container">
          <div className="booking-info">
            <p>
              Some of our facilities are available for booking by alumni, parents, and community members 
              during non-school hours. These include the auditorium, sports facilities, and meeting rooms.
            </p>
            <h3>Booking Process</h3>
            <ol className="booking-steps">
              <li>Check availability through our online booking system</li>
              <li>Submit a booking request with details of the event/activity</li>
              <li>Receive confirmation and payment instructions</li>
              <li>Make payment to confirm booking</li>
              <li>Attend a briefing on facility usage guidelines</li>
            </ol>
            <p>
              For more information on facility booking, please contact our Facilities Management Office.
            </p>
          </div>
          <div className="booking-cta">
            <Link to="/facilities/booking" className="btn btn-primary">Book a Facility</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Facilities Office</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience Our Facilities</h2>
          <p>Visit Excellence Academy to experience our world-class facilities in person.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
