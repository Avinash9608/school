import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Website.css";
import "./responsive-home.css";
const images = {
  heroImage:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  principalImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  computerLab:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  library:
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  sports:
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  scienceLab:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  classroom:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  artClass:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  event1:
    "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  event2:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  parent1:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  parent2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  studentGroup:
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  classroomImage:
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  libraryImage:
    "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  sportsImage:
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

const Home = () => {
  const [boardSuccess, setBoardSuccess] = useState(0);
  const [yearsExcellence, setYearsExcellence] = useState(0);
  const [activities, setActivities] = useState(0);

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 3000;
    const startTime = performance.now();

    const animateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setBoardSuccess(Math.floor(progress * 98));
      setYearsExcellence(Math.floor(progress * 25));
      setActivities(Math.floor(progress * 50));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        // Ensure we end at exact values
        setBoardSuccess(98);
        setYearsExcellence(25);
        setActivities(50);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);
  const textRef = useRef(null);

  useEffect(() => {
    const div = textRef.current;
    const text = div.textContent;
    div.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      div.appendChild(span);
    }

    let spans = div.querySelectorAll("span");

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    spans = shuffle(Array.from(spans));

    function getRandomValue() {
      return Math.random() * 0.4 - 0.24;
    }

    function applyRandomTransform() {
      spans.forEach((span) => {
        const xOffset = getRandomValue() * 10;
        const yOffset = getRandomValue() * 15;
        const rotation = getRandomValue() * 6;

        span.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
        span.style.textIndent = `${xOffset}px`;
      });
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 50)];
      }
      return color;
    }

    let currentIndex = 0;

    function changeColorSequentially() {
      spans.forEach((span, index) => {
        const colorIndex = (index + currentIndex) % spans.length;
        span.style.color =
          colorIndex === 0
            ? getRandomColor()
            : spans[colorIndex - 1].style.color;
      });

      currentIndex = (currentIndex + 7) % spans.length;
    }

    const colorInterval = setInterval(changeColorSequentially, 50);
    const transformInterval = setInterval(applyRandomTransform, 300);

    return () => {
      clearInterval(colorInterval);
      clearInterval(transformInterval);
    };
  }, []);

  return (
    <div className="website-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="responsive-container">
          <div className="hero-content">
            <h1>Welcome to Excellence Academy</h1>
            <p className="hero-subtitle">Nurturing Global Leaders Since 1995</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{boardSuccess}%</span>
                <span className="stat-label">Board Exam Success</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{yearsExcellence}+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{activities}+</span>
                <span className="stat-label">Extracurricular Activities</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/admissions" className="btn btn-primary">
                <i className="fas fa-file-alt"></i> Apply Now
              </Link>
              <Link to="/virtual-tour" className="btn btn-secondary">
                <i className="fas fa-vr-cardboard"></i> Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="announcement-banner">
        <div className="responsive-container">
          <div className="announcement-container">
            <div className="announcement-content">
              <h3>Admissions Open for 2024-25 Academic Year</h3>
            </div>
            <Link to="/admissions" className="btn btn-sm btn-accent">
              Apply Now <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="animated-text" ref={textRef}>
            Limited seats available!
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="responsive-container">
          <div className="section-header">
            <h2>Discover Excellence Academy</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Where Tradition Meets Innovation in Education
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="highlight">
                Established in 1995, Excellence Academy has grown from a modest
                institution to a nationally recognized center of learning
                excellence, consistently ranked among the top schools in the
                region.
              </p>
              <p>
                Our 10-acre campus provides a stimulating environment where
                students from Kindergarten to Grade 12 discover their potential
                through a perfect blend of academic rigor, creative expression,
                and character development. With a student-teacher ratio of 12:1,
                we ensure personalized attention for every child.
              </p>
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>CBSE & International Curriculum</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>STEM-focused Learning Approach</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>State-of-the-art Facilities</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>University Preparation Program</span>
                </div>
              </div>
              <div className="about-buttons">
                <Link to="/about" className="btn btn-primary">
                  <i className="fas fa-info-circle"></i> Learn More
                </Link>
                <Link to="/virtual-tour" className="btn btn-outline">
                  <i className="fas fa-vr-cardboard"></i> Virtual Tour
                </Link>
              </div>
            </div>
            <div className="about-image">
              <img
                src={images.studentGroup}
                alt="Students at Excellence Academy"
                className="img-fluid"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <i className="fas fa-play-circle"></i>
                  <span>Watch Our Story</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-section">
        <div className="responsive-container">
          <div className="principal-card">
            <div className="principal-image-container">
              <img
                src={images.principalImage}
                alt="Principal Dr. Sarah Johnson"
                className="principal-portrait img-fluid"
              />
              <div className="portrait-frame"></div>
              <div className="portrait-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-line"></div>
              </div>
            </div>

            <div className="principal-content">
              <div className="section-header">
                <span className="section-tag">Leadership</span>
                <h2 className="section-title">Words from Our Principal</h2>
                <div className="divider"></div>
              </div>

              <div className="message-container">
                <div className="quote-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17H3V13C3 9.68629 5.68629 7 9 7H11V11H9C8.44772 11 8 11.4477 8 12V13H11V17H7Z"
                      fill="#3498db"
                    />
                    <path
                      d="M21 17H17V13C17 9.68629 19.6863 7 23 7H25V11H23C22.4477 11 22 11.4477 22 12V13H25V17H21Z"
                      fill="#3498db"
                    />
                  </svg>
                </div>

                <blockquote className="principal-quote">
                  "At Excellence Academy, we believe education should ignite
                  curiosity, foster creativity, and build character. Our
                  holistic approach ensures students not only excel academically
                  but also develop the skills and values needed to thrive in an
                  interconnected world."
                </blockquote>

                <p className="message-text">
                  Our dedicated faculty, innovative curriculum, and nurturing
                  environment create the perfect setting for students to
                  discover their passions and realize their full potential.
                </p>

                <div className="principal-signature">
                  <div className="signature-line"></div>
                  <div className="signature-details">
                    <p className="name">Dr. Sarah Johnson</p>
                    <p className="title">Principal, Excellence Academy</p>
                  </div>
                </div>
              </div>

              <Link to="/about/principal" className="cta-link">
                Read Full Message
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#3498db"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="responsive-container">
          <div className="section-header">
            <h2>Why Choose Excellence Academy</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Our Commitment to Holistic Education
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon academic-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Academic Excellence</h3>
              <ul>
                <li>100% board exam pass rate for 15 consecutive years</li>
                <li>75% students score above 90% in CBSE exams</li>
                <li>Advanced Placement and honors courses</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon faculty-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Expert Faculty</h3>
              <ul>
                <li>90% faculty with postgraduate degrees</li>
                <li>Average 15 years teaching experience</li>
                <li>Regular professional development programs</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon facility-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>World-Class Facilities</h3>
              <ul>
                <li>Smart classrooms with interactive technology</li>
                <li>Advanced science and computer labs</li>
                <li>Olympic-size swimming pool and sports complex</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon holistic-icon">
                <i className="fas fa-child"></i>
              </div>
              <h3>Holistic Development</h3>
              <ul>
                <li>50+ clubs and extracurricular activities</li>
                <li>Leadership and life skills programs</li>
                <li>Community service initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="facilities-showcase">
        <div className="responsive-container">
          <div className="section-header">
            <span className="section-label">Our Campus</span>
            <h2 className="section-title">State-of-the-Art Learning Spaces</h2>
            <p className="section-subtitle">
              Designed to inspire creativity, collaboration, and innovation in
              every student
            </p>
            <div className="divider-wave">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  fill="#3498db"
                ></path>
              </svg>
            </div>
          </div>

          <div className="facilities-grid">
            {/* STEM Lab Card */}
            <div className="facility-card">
              <div className="card-image">
                <img
                  src={images.scienceLab}
                  alt="STEM Innovation Center"
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
                <span className="category-badge">
                  <i className="fas fa-flask"></i> Science
                </span>
              </div>
              <div className="card-content">
                <h3>STEM Innovation Center</h3>
                <p>
                  Cutting-edge laboratories equipped with the latest technology
                  for physics, chemistry, biology, and robotics research.
                </p>
                <div className="facility-features">
                  <span>
                    <i className="fas fa-microscope"></i> Advanced Equipment
                  </span>
                  <span>
                    <i className="fas fa-robot"></i> Robotics Lab
                  </span>
                  <span>
                    <i className="fas fa-laptop-code"></i> Computer Stations
                  </span>
                </div>
                <Link to="/facilities/stem" className="explore-btn">
                  <span>Explore Facility</span>
                  <div className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>

            {/* Library Card */}
            <div className="facility-card">
              <div className="card-image">
                <img
                  src={images.libraryImage}
                  alt="Learning Resource Center"
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
                <span className="category-badge">
                  <i className="fas fa-book-open"></i> Library
                </span>
              </div>
              <div className="card-content">
                <h3>Learning Resource Center</h3>
                <p>
                  A vibrant hub with extensive print and digital resources,
                  quiet study areas, and collaborative learning spaces.
                </p>
                <div className="facility-features">
                  <span>
                    <i className="fas fa-book"></i> 25,000+ Resources
                  </span>
                  <span>
                    <i className="fas fa-wifi"></i> Digital Access
                  </span>
                  <span>
                    <i className="fas fa-users"></i> Study Rooms
                  </span>
                </div>
                <Link to="/facilities/library" className="explore-btn">
                  <span>Explore Facility</span>
                  <div className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>

            {/* Sports Complex Card */}
            <div className="facility-card">
              <div className="card-image">
                <img
                  src={images.sportsImage}
                  alt="Athletic Complex"
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
                <span className="category-badge">
                  <i className="fas fa-running"></i> Athletics
                </span>
              </div>
              <div className="card-content">
                <h3>Athletic Complex</h3>
                <p>
                  Comprehensive sports facilities with professional coaching for
                  various sports and physical development programs.
                </p>
                <div className="facility-features">
                  <span>
                    <i className="fas fa-swimming-pool"></i> Olympic Pool
                  </span>
                  <span>
                    <i className="fas fa-basketball-ball"></i> Indoor Courts
                  </span>
                  <span>
                    <i className="fas fa-medal"></i> Professional Coaching
                  </span>
                </div>
                <Link to="/facilities/sports" className="explore-btn">
                  <span>Explore Facility</span>
                  <div className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>

            {/* Arts Center Card */}
            <div className="facility-card">
              <div className="card-image">
                <img
                  src={images.artClass}
                  alt="Creative Arts Center"
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
                <span className="category-badge">
                  <i className="fas fa-palette"></i> Arts
                </span>
              </div>
              <div className="card-content">
                <h3>Creative Arts Center</h3>
                <p>
                  Professional-grade studios for visual arts, music, dance, and
                  theater with exhibition and performance spaces.
                </p>
                <div className="facility-features">
                  <span>
                    <i className="fas fa-paint-brush"></i> Art Studios
                  </span>
                  <span>
                    <i className="fas fa-music"></i> Music Rooms
                  </span>
                  <span>
                    <i className="fas fa-theater-masks"></i> Theater Space
                  </span>
                </div>
                <Link to="/facilities/arts" className="explore-btn">
                  <span>Explore Facility</span>
                  <div className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="view-all-container">
            <Link to="/facilities" className="view-all-btn">
              <span>View All Facilities</span>
              <div className="hover-effect"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="programs-section">
        <div className="responsive-container">
          <div className="section-header">
            <span className="section-label">Learning Pathways</span>
            <h2 className="section-title">Our Academic Programs</h2>
            <p className="section-subtitle">
              Tailored educational journeys for every stage of student
              development
            </p>
            <div className="divider-wave">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  fill="#3498db"
                ></path>
              </svg>
            </div>
          </div>

          <div className="program-tabs">
            <div className="tab-nav">
              <button className="tab-btn active" data-tab="primary">
                <div className="tab-icon">
                  <i className="fas fa-school"></i>
                </div>
                <span>Primary School</span>
                <div className="tab-indicator"></div>
              </button>
              <button className="tab-btn" data-tab="middle">
                <div className="tab-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <span>Middle School</span>
                <div className="tab-indicator"></div>
              </button>
              <button className="tab-btn" data-tab="high">
                <div className="tab-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <span>High School</span>
                <div className="tab-indicator"></div>
              </button>
            </div>

            <div className="tab-content active" id="primary">
              <div className="program-card">
                <div className="program-info">
                  <h3>Primary School (Grades K-5)</h3>
                  <p className="program-description">
                    Our primary program nurtures young minds through play-based
                    and inquiry-led learning, fostering curiosity and building
                    foundational skills in a supportive environment.
                  </p>
                  <div className="program-highlights">
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <i className="fas fa-puzzle-piece"></i>
                      </div>
                      <div className="highlight-text">
                        <h4>Integrated Curriculum</h4>
                        <p>Thematic learning across subjects</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div className="highlight-text">
                        <h4>Social-Emotional Growth</h4>
                        <p>Developing confidence and relationships</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <i className="fas fa-paint-brush"></i>
                      </div>
                      <div className="highlight-text">
                        <h4>Creative Expression</h4>
                        <p>Arts, music, and movement integration</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <i className="fas fa-running"></i>
                      </div>
                      <div className="highlight-text">
                        <h4>Physical Development</h4>
                        <p>Specialized PE and outdoor education</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/programs/primary" className="cta-btn">
                    <span>Discover Primary Program</span>
                    <div className="arrow-circle">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="program-image">
                  <img src={images.classroomImage} alt="Primary classroom" />
                  <div className="image-overlay"></div>
                  <div className="grade-badge">K-5</div>
                </div>
              </div>
            </div>

            <div className="tab-content" id="middle">
              {/* Middle school content would go here */}
            </div>

            <div className="tab-content" id="high">
              {/* High school content would go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="responsive-container">
          <div className="section-header">
            <span className="section-label">School Life</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Join our vibrant community and be part of memorable experiences
            </p>
            <div className="divider-wave">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  fill="#3498db"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  fill="#3498db"
                ></path>
              </svg>
            </div>
          </div>

          <div className="events-container">
            <div className="event-card">
              <div className="event-media">
                <div className="event-image">
                  <img src={images.event1} alt="Open House Event" />
                  <div className="image-overlay"></div>
                </div>
                <div className="event-date">
                  <span className="date-day">15</span>
                  <span className="date-month">Aug</span>
                </div>
                <div className="event-category">
                  <i className="fas fa-home"></i> Open House
                </div>
              </div>
              <div className="event-details">
                <h3 className="event-title">Annual Open House</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Main Campus</span>
                  </div>
                </div>
                <p className="event-description">
                  Experience Excellence Academy firsthand! Tour our facilities,
                  meet our faculty, and learn about our innovative programs and
                  curriculum.
                </p>
                <div className="event-actions">
                  <Link to="/events/open-house" className="register-btn">
                    <span>Register Now</span>
                    <div className="arrow-circle">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                  <div className="event-reminder">
                    <i className="fas fa-bell"></i> Remind Me
                  </div>
                </div>
              </div>
            </div>

            <div className="event-card">
              <div className="event-media">
                <div className="event-image">
                  <img src={images.event2} alt="Science Fair" />
                  <div className="image-overlay"></div>
                </div>
                <div className="event-date">
                  <span className="date-day">25</span>
                  <span className="date-month">Sep</span>
                </div>
                <div className="event-category">
                  <i className="fas fa-flask"></i> STEM
                </div>
              </div>
              <div className="event-details">
                <h3 className="event-title">Innovation Science Fair</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Science Block</span>
                  </div>
                </div>
                <p className="event-description">
                  Students showcase groundbreaking projects in STEM fields with
                  interactive exhibits and live demonstrations. Open to families
                  and community members.
                </p>
                <div className="event-actions">
                  <Link to="/events/science-fair" className="register-btn">
                    <span>Learn More</span>
                    <div className="arrow-circle">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                  <div className="event-reminder">
                    <i className="fas fa-bell"></i> Remind Me
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="view-all-events">
            <Link to="/events" className="view-all-btn">
              <span>View All Events</span>
              <div className="hover-effect"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="testimonials-section">
        <div className="responsive-container">
          <div className="text-center mb-20">
            <h2 className="text-white text-4xl font-bold font-quicksand mb-2 relative inline-block">
              What Our Community Says
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full translate-y-3"></span>
            </h2>
            <p className="text-gray-400 text-lg mt-6 font-quicksand">
              Stories from Parents, Students, and Alumni
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <p>
                "Excellence Academy provided our daughter with incredible
                opportunities. The faculty's personalized guidance helped her
                unlock her full potential and she's now at Stanford!"
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB3ZDeCMB1RdXHVctltcUpsGKVchetY_hWnoARdsnncpfqHyaxArcsceNcMFToiV9jYw&usqp=CAU"
                alt="Mrs. Sunita Rao"
              />
              <h1>
                Parent of Anika Rao, Class of 2022 <br />
                <span>Mrs. Sunita Rao</span>
              </h1>
            </div>
            <div className="box">
              <p>
                "The mentorship I received helped me publish my first paper at
                17. I wouldn't be at MIT without Excellence Academy's
                research-driven environment."
              </p>
              <img
                src="https://miro.medium.com/max/1080/1*tTkMHwYrKqnoxoEzXhnhfw.png"
                alt="Rahul Mehta"
              />
              <h1>
                Alumnus, MIT '25' <br />
                <span>Rahul Mehta</span>
              </h1>
            </div>
            <div className="box">
              <p>
                "From academic excellence to personal growth, this place shaped
                who I am today. The community spirit is unmatched."
              </p>
              <img
                src="https://miro.medium.com/max/1080/1*tTkMHwYrKqnoxoEzXhnhfw.png"
                alt="Priya Patel"
              />
              <h1>
                Student, Class of 2023 <br />
                <span>Priya Patel</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-section">
        <div className="responsive-container">
          <div className="section-header">
            <h2>Life at Excellence Academy</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Moments That Define Our Community
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src={images.computerLab}
                alt="Students in Computer Lab"
                className="img-fluid"
              />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item">
              <img src={images.sports} alt="Sports Day" className="img-fluid" />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={images.artClass}
                alt="Art Exhibition"
                className="img-fluid"
              />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={images.classroomImage}
                alt="Classroom Activity"
                className="img-fluid"
              />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={images.classroomImage}
                alt="Classroom Activity"
                className="img-fluid"
              />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={images.artClass}
                alt="Art Exhibition"
                className="img-fluid"
              />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          </div>
          <div className="gallery-link">
            <Link to="/gallery" className="btn btn-primary">
              <i className="fas fa-images"></i> View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="responsive-container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Ready to Begin Your Journey with Us?</h2>
              <p>
                Take the first step toward an exceptional educational experience
                for your child. Our admissions team is ready to guide you
                through the process.
              </p>
              <div className="cta-buttons">
                <Link to="/admissions" className="btn btn-primary">
                  <i className="fas fa-file-alt"></i> Apply Now
                </Link>
                <Link to="/schedule-visit" className="btn btn-secondary">
                  <i className="fas fa-calendar-alt"></i> Schedule a Visit
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <i className="fas fa-envelope"></i> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
