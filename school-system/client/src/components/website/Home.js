import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Website.css";
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
        }}
      >
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
      </section>

      {/* Announcement Banner */}
      <section className="announcement-banner">
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
      </section>

      {/* About Section */}
      <section className="about-section">
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
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <i className="fas fa-play-circle"></i>
                <span>Watch Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-section">
        <div className="principal-container">
          <div className="principal-card">
            <div className="principal-image-container">
              <img
                src={images.principalImage}
                alt="Principal Dr. Sarah Johnson"
                className="principal-portrait"
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
      </section>

      {/* Facilities Showcase */}
      <section className="facilities-showcase">
        <div className="container">
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
                <img src={images.scienceLab} alt="STEM Innovation Center" />
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
                <img src={images.libraryImage} alt="Learning Resource Center" />
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
                <img src={images.sportsImage} alt="Athletic Complex" />
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
                <img src={images.artClass} alt="Creative Arts Center" />
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
        <div className="container">
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
        <div className="container">
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

      <div class="container">
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl font-bold font-quicksand mb-2 relative inline-block">
            What Our Community Says
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full translate-y-3"></span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 font-quicksand">
            Stories from Parents, Students, and Alumni
          </p>
        </div>
        <div class="boxes">
          <div class="box">
            <p>
              `"Excellence Academy provided our daughter with incredible
              opportunities. The faculty's personalized guidance helped her
              unlock her full potential and she's now at Stanford!"`
            </p>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB3ZDeCMB1RdXHVctltcUpsGKVchetY_hWnoARdsnncpfqHyaxArcsceNcMFToiV9jYw&usqp=CAU" />
            <h1>
              Parent of Anika Rao, Class of 2022 <br />{" "}
              <span>Mrs. Sunita Rao</span>{" "}
            </h1>
          </div>
          <div class="box">
            <p>
              "The mentorship I received helped me publish my first paper at 17.
              I wouldn't be at MIT without Excellence Academy's research-driven
              environment."
            </p>
            <img src="https://miro.medium.com/max/1080/1*tTkMHwYrKqnoxoEzXhnhfw.png" />
            <h1>
              Alumnus, MIT '25' <br /> <span>Rahul Mehta</span>{" "}
            </h1>
          </div>
          <div class="box">
            <p>
              "From academic excellence to personal growth, this place shaped
              who I am today. The community spirit is unmatched."
            </p>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAYcDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUBAgMGAAf/xAA/EAABAwIEAwYEAwcEAgIDAAABAAIRAyEEEjFBUWFxBRMiMoGRQqGxwVJy0QYUIzNi4fA0c4KyFfEkY3WSwv/EABsBAAEFAQEAAAAAAAAAAAAAAAIAAQMEBQcG/8QAMBEAAgICAgEDAwMDAwUAAAAAAAECEQMhEjEEBRNBIjJRBmFxFCOBJKHwM0KRscH/2gAMAwEAAhEDEQA/AGslekqFK98cDMa0kIJ8o2roUI4SVFMu4HSBHtJlCVGG6YuH90M9kz8lUnS2zVwzfSA6DHd5A0i/om4ENGa8CzdI6oXDsIcYFufLj9kQ/J4pJe8yBs1vMryvnTUsmjonpGLjh38mWIxLnwwCQJkgTlHABK8TXeADmMMGVodFuUBMMQO5Y4aOeASdDyskzyXSZ042H91nWeoxQSQJWqVHEybnQRr0VBSeS3NAvMPImeJARYp5z4bOiJNgOkKDS7vV2d2pc4ZQOQaPujUqJuzJtN2jQTB1iAqvfRYS19WDu2k01Hnla3zVK9UtaTct3J0PQBLqmKfdtNpLd8oLfpdHCDm7Cf0h/f4JkHuqpP4qr2Mjo0Lwx2EBuKc2AOa/6JQWVnX8N9AXgf8AdR3RGubmRcfKys/08flge5+w5OJwLpinf8Wb+6gYukIy0zrc5h9zPySttImIzH/ij8NhJc0+IuOggEqGcIx7ZLFth1GtVqAANAG1590zw2GfXLbWF5/VRguznPygiGk+KD8pXT4XBsZDRAA/CFnTdvRNaRlhMAWiTLtzz6JtSoBsGIkc/mtKTGstHTqiADGgCaMfyRylZkGbcFbJ+uq0A0nTZTEbIqBMDSgG/RZOwwcc153RmUaqW9E/EZsVnBhpLhmn0WdXB5mlpdtFpBTd7fnqsnMHAJNCTOcrdnNAhxOhAj7pHjuzA5tSJiPCZvMLtqlGTfTgLJfisO1zTYWEiyBSlB2iSlJUfKMZhX0nmxk2A2nh6oIMlhIm0kemoPTVdj2xgw10xbUHgVzlSnkfUdHhfLyBoHSAfut7x/I5x2ZmbBxdoxwzc3gM3NoOhRbabiBl87CS3qDJHrssaLQHkD4T9EYDFR0SAcj+O0EpZHsmxKooMwtWMjm3mcs8YzFpTAVHDuq7IJb4gNbTIJnZLKTSHljTHeZajNstRp29fqj8O+A0fC4OIaZPh3A5hZuVbss9o73snGivRZDjldA2GV8aHqm1zBmFxPZGJ/dMSaBINGtlMzZroAt/my7Km+zWuM2lp/EDv+qaEr0ZOeHGRuSbXlezFRaFWSFKQGmY8VBc7VRK9tCQicziBdeJNgqz7qwSEezOndSSeO6gz6rwJ3TCJJPFVJN+i8TyUfdIRBPMry86y8kIRqVCnddFOCmVUaoU6ouohKlhA1Oihm6LeH8GNQgE6W1Q5vveJPADgrPMwwdXcyqOBs1vqs/K+br4RtYX7Stdv/YvRcG94ZMaIgUzlDnFrX1GhxJvlpg2ssqDA6A6Ms5jNhlGxV8TUJbnMTUm5HwCwDQvLec7yujo3osK8dfvsWYp2dzhJOZ2pMuLRayDLCTlECNzsOSIecxe7Ro1O55KjntpMFR9gB4GDfmVQ6PTwjqkZnu6LJM5thNyl2IxAAJJYDrEm3Uj9VXFYl7y4gy46cAOSXPZUeZdmIA0ExP0U+PFydskb4qkZ1sRnNy47CPCPZDOc6fiut3Uqo/CyTeTf1JVMtNkzmcRrcALSglFUivJt9mQaTdwdP5hK0p03PMNzi97/ovZmOmXBo/2/uCmOCoyQTyiBqE+RqKsCO2b4PCGW5pjYEn3PJdNgez2ABzmlsiCTZ7xy4BY4HDMp5XFs1IDhNw0bHrwTzDU3uiQbm5WRkm5MuLSCsPh2gAAQBEAC0I5jWiOKoxuUBoG0LUSOKg6CNmnSRuFsCLLBpMhbNg3MynQ1GgK8f8ALKQpjco0hmUgm6kRKsRwhUAJlPRGecdIVTebLztl4OB1TMcyeJCDrMF+HJHu5fNCPuCLKKRNFnMdq4cVGOkXAK4bF03UzUHHj1vC+mY1gLXW5Lhe2aES4DQkeqs+JOpUBljaENA+M8wQPRMR/MaP6d+YlLKJAe4nYGPUJkyS9rtfA2DzaQFp5vuK2HaCnNgUqgN21Ga8H6j3CLLcjqmUmWOFVnMPHiA9VkBmpV2CT/DOXjmYQ5sStwWVadKo0yHsBtMHO3MPqs+RZQV3kMp1GwXUSCdAXsOn+cl2nZeLp4qhTEyQ2Wm8lo3HMaFcLh3scGBzTlJNOpJHldYj7hN+wcVUo134ZzvG05qZmwIuZ+/9rwr6WVs8LVnbNdsdRqrGVkHioxlRltZbwIs5pVwQWiPKflyKnTM1osCFa20rO3upBITjF+CiTPJeBle3SESTK9fRRYKZiEhHphQfVeKgFIRBPHovKbLyQwkXtwvLy6IcGM6uiAqHW9hr+iLxL4EDW8IHVwHwjXmqueXwjR8WKrkyCCcsWOp4qjhlGtz7rYCcx4/ILJ0lwAFo1KqyqMbLsLyZElstTs0Db6hDYmuak3JOgA2aNAFerUDW5AbhsHr1SytWADiCLCJGnovIeU+WRs676XhccMbJqVKdMEv+EWHBK8RXe/xOdAOgOq9UqzJebamT9Utq13VnHKIYLTxG5QY8d7Nn7TQvzh5+Fo8ROk6gfdC1cRV0YXD+6vWqNp02U2xYZnmxc5zv7IIvduTb5dVoYsZBPJRLnVfizEn8Un6rNxNgXHnwXi48T7m5Usz8SfuriVFNy5OjSixpcCdNl0PZrXuJIB1F3AxyKTUG1HuaLm4kALtOysA9rGOe2JiANT1lZ3lZKRcxQoYYTDl2QC9hmfG/IJ1SphoaAIIsssPTayBvb/AimmCb/b5rL7LRoBK1azgh6uKwmGbmr1abAbgOcMx6DVAVP2jwdInIxz7jLIcJHGP7p1FsdjsN0jh81cGDf/2udb+1NEva04do2Mui8IgftHgDZ7SHHQAgxzJMBHxBtj4OEK4cCLpNT7VwFVocys08YMx1hENxTHAuY4OAkSxwcCRqJCFuhVYx14HgqGWyB80KMQPcK/ezHPcpuQPFmhJ3XhAj5KhfO/zVe8AA4DRNY9Mu53P0Q1U8I0Ku6s0+lrLKpBab9JEIZbJFoXYkyCN7rlu06Qe2oDwMcV1WIaYkDiuex7bPtxQ43xkgpU0cLBZUqiNHD7o+kRNEkWz5SeqGxQDMS8cSCtqZ/huIJ8NUH6Bbk3ySZSguNob4c/xMOBABLSeBtlMqcIyMM1niJY4sE/0ueAEO1xzUzaAJPRwhHU/Ca7hpIqQOJE2VGRNZhRId3jQY8r2WvrMeyKNSpSxODxTbOApteR8RbYH7JcypBw5Ez4iSSJ8xG3JGE5g6mTOUteOmignoXa2d/gcS17W1QYpV2hxB2eBF44af+kwiCY+IxynX5rjewccGF2Eruim8TSJM5X6gX/y66yhUzB1GoYqNBcw/jYDAPpoVJB6MzLDizYFuhsRcSrTsqOkgbOFieY4r2YkAj1B29UVkJcWUm4VJkjjw4Kbpxi2oCmRuqTBsr2MIhESFBdERpvKk7xwWZN4TCPF0rymxFtjBXkwhOvGF5Ue75LozODpWwWvLnujRsSsCL5Rr8XJavBBcToPEeZWUuJba7iZ5/wDpUp9mlj6JcRERAMWGruSye8NBcRd1gDpyVnGTEyAYnil+MrOc4YenZ78wkfCNHOP2WT5+bjHij1X6f8J5crnJaQNXrd455BIpNJvF3kWhvJLa1TNGzReOHLqisQ9jAabfJTaAJ3jclI8TiCZa02Mkn7rzsYc5HUcSUYlMTX712RvlFiOMId9XIIb5jw2A0VS8Mb4TLn6yvBhpjM+O8Oxvl5laMYKKAcm3ooZ1dd50CzdbXVXc9rQZu46STMc4WJdJ0Fr7n6qxFFbJJLR4AuNhPKPqiKbMzg0X4xosw55ECADs0RPWEzwGGdVe0X2kgaIMs+KsfFGxv2J2eHu7yAcuh2BC7SjSygCPVB9nYdtGlTY1oFhoLAcE0y8NlgZJ85WaSXFEtLWCYJ5ASZ5BDVq2PqudRw9I0mukOqOAc4RwJt7BFAW1iJVXVmtGUTMa7JloaxSOxK7zmq4gOcdCKckH3hWd2BhtXYitIuIIEEcLQjamLyXDtOA+qEqdp02El7rHSSn9z8CqTF+K7DqsaXUaofF2h4gzxkJHicNjMMXZ2Pymcrm+KPbZdC7tnBvPjxFIfxGtMvGhtOuyHfjsDUo1KgqsJbnlocHZiCQIAM3+6JZJLtDqL/JzlPEYmm4ZXPYW3zNtbmEzwPaGKo1mnP4aj2F4bIEkwTAsP/a3rYag8kloBygmBxiJVaeGYHDKLgQLp5ZIy7Dpo6fA411cuaSDlAg8bzZNGOJ6hc/2ZSdTLiYJm08IAhPqQJAO31VaX7DIu58XPrKxfVOkqa5twhJO08S6lSIaSHHcfQJR26E3SGNTG4ZgIdUaMszcaoap2thGCTUBi0TedYsuKr4mucwaTe+smUE44lxuHucb7ulXI4E+2RuTO6qduYEib3FzAj0uleLx+ArWa6JEjNABPNc9TwuOqjw0H+K8uN/Y2WdTs/tCmJNPwgmwMIvYjfY8Z18AvaYy4gEQZvIXsMSaVadMzm8xIBCHxDqohlSczD4Z1A4LXBE5cQBsabj7mStFRrGVnL6xlT8TZnVlo5HMExou/hvIIDobEm3BKsM6WCTdjywxyOqPwxzCszN5mOZB0BgxCoZeydbQuZU0nQPBA4W3+iY03nLTIPig0z0FxKUk+bQXnr4iEdhngsgmbD3FkGWOrHiNMI8tdaJaDXaY8RyDMWj5kdOa7TAYhuJot8QFVhlpHwk7gnZcDRqFr2GSBmsR1XQdl4kseAATlImY319FAmQZ4fJ17XtIEiCTleDs4fqruiQRbjCFY+XNqasqsHrtKJYQ5pGbSx4gnRSpme0WBaW9PdeJPooAg+nzVreqJAngV4HWdVF56/JRDgSJsnsVFpO3RQQOFlNhN7qDmteUhECBovKDqbLycYUQsnm56LUlYOu5w2ESuiM4VBbMKsmOFisSDaJnl9kRXFz+YALFpAvJtNzoVm+TPhs2vBxe9JRKGAC0RmdAH9PMpa0/z60edzm0Z3Y3w5j1RmKeWUnuZOZ3hAEZpd4dUBXeG0hTDoyNyNJ4xcLz/kS5PkzoPpeFwh7Ufzv/AAIu0K5ANJpJJIzc76JQ65tLnE+7uXIInEFz6tV1wBmbB1EIQvDRIsSLdNICiwxpWetlpUWAFM5rOqjzO1ZT/LKxqVYJi54m6sGvqcm+w9V793H42/dWVxXZFJSqogxLnGV4BEd1TFi8+yu2i1x8IcfaI4ypOa+CBYZdsiiwucAflquq7HoS9n4GxIjzEJHhqQzNABmRt7rseycOWNa+I0jg0cufFZvl5NUXcMB7RaALWkAreLKKbQG6arWBGix0XnEGqvDBEkA6pPi+0adAeIncTpI2IOnVN8TRe5pyiUjxHY+JxAdJgE+ykik3sGqRz+J7XxD6hAquo0g0tMeJxIMy0HQlZYbC4/GZH0sE+u7Pl7zGPPduBsAGOgQOic0f2WYKjXVK1TOxwILspbx0XR4ahiqLWNLaNVrdHNmm4R8lpQlhiUc/vNXA5N3YvbdINzVcFSdUeS1jaLSLggjMW7JTj6WKwGVmJq4eq6kWtdSyCnUAqCzwRc+5hd/2m04ig3LScytRqB7S4thwIhwDhx6LlsX2DUxVZlV9CoXCxDD5hrF/dT+9jvfRWxxzNfVpi7DYisajMrqhw9Nwe6k9+dzABAMm5ATymXEhzfLYg2vzsgKnYvbdLFYevhsI7PlBc3wlthBBvGi63Ddn0a2CDjQqYbE0mjvaFSJY43GUi2U7LMzqLdxNaLaiewQzBkwDaE8p0yWiBsPVLqGH7vu7J3QaMl9gqq7E1oW4xmRpNwuXx7hUdlJm5suu7RA7t8cCVyZw1So+pUyy1mp2HGU8fuE1oW/uzCbtHJbNpUGCXECBvAUYglgmvW/daBnL4ZxFb/bY4SB6IU06WVr6HYmIxJcYbVx7nZCSYk5j9lZjinkI55Iw7C3VqNOXB+hyiHAweAVH4hjgWzodDBg81zmOr4nCuoU8RgcJRdDi0MBBBmCTlMrCnjH5g0F2QnxAkkjoVYfhTVMhj5EJaC+12U3NNRoGZp1G45pdgHhtbK4+GowtPuCt8ZWc6kRlIaRYGxA6JdRcWvZ1EdVewwftOLIMsksioc0QRUxFM6nxjaCjsO7LVdtmDXx6wQgc5FSjXGj2XA01AIRos5hkfFqNGu4KhmLcAHG0zSq1LReoRGlnSVOGf4sk2Nh6ovtCkalLD1hcEljzziJPVKabix0E3acpn5FHFc4C6Y1Y83ZoWuMcU0wdbI8ESXSNDExq09duiS5jna8A+MA+u4R9B9Nr294SKbrOcNWg/EI4KpNVsJq0dx2Zi21qQpySB4233+IX3TNr8r4cIjcaObx9Fx+BxHc1vE4McS2nUI0l12VARbX6rrqTu+Y02zQR+V41TJmdkhTN5JPK8K4dBE6xB9ENTcXZhwFxoQZiIWzCJvw1RpkLRoTmJXtRz3UECLKQLO6yiBKyHQNOMq2onRQZ2txhVkkjknETPG68oMAyTAOi8kMKHaHosfhn8RELR/kceUKjR5BsDb9V0RnCodWD1bH1JPqh3GAT0BHFb1T4iOaFBLjB0EE+huVl+R9eRQR6Hwv7WL3WYYhwFSi0nZ9UgiwA8LQlGOrtFOoA6C6wAN5Ot0zxT/HVeNm5Y13lc3jKru+MxlotJ0vJWJ5dOfFHvv0/jk8XKfyY1G1PC1zc4aAXOaL9DCG7l7nEljTJny+JoVu9rAeKo5occ9Qjw22AIutMNiK9Z2U5nNEmX5SR0gSq/wBUUerSTZ792gbzwcPsrMwzjo0e1/VGF1V2UNkAwC6GmTyJRtPB13tm2nBQTytdk/ETjCMJObLIuQLlefSi1NojUxp1KYvo0sPVZmcC95y5RrHEq4oh5cItJJATLNsZw0U7MwuY94+SBBPPkuswTJLeAtA0CRYVoY0ell02CptawGRKq55WwsUaD2tsPZaZVDYhatAKrk5Xuwdl40zsiGiVfJbRNyoFoXVKZvLZ9gh3UqlyGH/i4psabeC8WAaBKxqErqdciDTJH9RP3VW4SoXCWRxuYKdGmSrNoA6/JOhPQBRwscztFoRopOaObhB/uiWUgBpvwViE7IwN1MAtEaQi6Ii1lm4bqGvgzzQB9qimNZmD7WIhLGGpSwuJZQLWVqhIZVLA80y4RnDTaRsnVUB9M2uUsDMry12k78EMXTHktaEWD7LwmGxNTEV6gxNZxLn1ar3VKxJdr/F3/wA2RfaLsNWwj2UyWvble0PkXE2BEj5ovEYVj4MQ4GQRY+4SmtRxdEuDZewXvqOSuwzyiink8aGZpvs4rtXCHEVm1nOcHNGV2YFxIFxdJqjXU6pEEaWPDiu8xJpvbldSIImwF5KQYnAue8ODMo4xc+6vYfLvTI5eMl0JaxLqYvMhBgweYTTFUDTY62iV7rQxSUloq5ouMlY4wzhUolhPlb3wjUgnK8f5xR1F3eUWu1LZa7jZJMFXNJ7Sb5DmA4gjK4eqa0XNoYjIDNCvlNN20O09jYqh5GOmXME7QxZFWjVpOuHNBHI6JFWpllR4I8QJDwNY4gck5Y7I4CYh0X56IbH0fF3gE5hPUakHmq2GfF0TzQJRqF7HUyZNMggjgUZTfsRPD7pa17mPBN9p3LTsUaxzSdSCBN9xyhFlh+BovQ2w2IyhsmSGd3HGm7Uemy6nsjFkilTc4ujI0udqQfC0n6FcQx8GJBBvF9eIsnPZmIayswOdDcpFtYO3vcKn0wMkLR3ToZWDxZpGV36rQgSL2N7bEoejVFeg0kgktmR8UWstaRJZfUOgzrGyJGc1RcBwtPutGk36lVEkTNwY9FAJHqpAS9xp0KidlF91NiCnQzKnwnYjmvKDB3Xk4InqmGH0+q83hw+9154mAoBsTwAC6LWzhS6oCxBIqPvvHrCypt8LydcsBTir1I/E8fIK7QQBxA+qy41LLKX4PQ5rxeLjh+d//BXiob33LfeYmFzdVj6j3C/ifnqcxwC6bGPaO+AEwXRPRIHOeKb3wASYaBbkIXnfLdZWkdN9BX+lTYvrUnuMGxcbDeOQWmENEV6dMvFwRkZeTxc/T2QVerUc93jJOkg6RsFSi51Kth3/AIXMd6Si9tuDs2OaTVHU4Cg7EY1rSPDSaSAPKPRNcW4UWuaIkBT2LSnEY5+/dUnN6GVTtCkXlxuIOyyMjuVGhFXsTYfD1sViJB8VR8NJ0A1lOm4I02uBvBJJWeFptouwrxIyv8VtQbJ2WANcI8xkdEMpb0N3sQNtVa0fi9wF0eGdDGRwXPObGLaBoHvHPVPaBhreibI9oKC0NGHRbNIQrHLUPKjCQW14stGvk6oNr+K0Y8SPRRsJhghytkBWLXAQea3a4bXRIjZIYOC0DF5pCvmGk2hGkiNkQAAh3kXWr6gAQNSr4so3SYoxbLPeNtVRrXG6pUqUaQl7gTEwNusoX/yDanhpuZE3yuafohuw6oc0ogtkT1Q2Lw4Az03AkG4lL/3qpTnUE6rJ+McGkzNrXTPY6TQW0tezgsKlLU7KMG8upg8yPminNkIFL4FxEteg0yco9kpr4fW3RdLUYIKX4imIdokp0wuFnE9pUIZUHIlcsbE8iu87TpgsfYTC4aq2KlQcHH6rf9PycotGZ50KoqCWlp4HZNaD++o9yYz0/FTI3BvH3CUi8j1W1Cs5j2nhr+X+yu5sfNFLFk4M6GlU76nTcblwNM7FtRvFEH+JQM+YEE9NJS/D1QXuuAyrGf8ApqC4cPujWvIcSbyZI4g6hYsk4y2a6fKOhTXp5XG0akfcFTSfIDSYNoKLxdIEFwMxF+I2d+qXSWkE7FWV9aI+hg1129B1RdGqWljgbggjqLwEtD/5ThoRB6yiqbhrwFo5qrkhRItn0LsiuytQc1rhAipTidHDxD0TKm6Hlp3MfcLk/wBmsRFfuiYY9rhB/FrZda5ozEtiQG358VCjPyRqVGpLm32khXEfqs5DmDmdOatmkWmYv6KQgLQZlQZuVLSZbpupdMSIukMypE9V5THFeRACY/2VRbOFY7W0Vali0/iMLo5wlfgXV575nM39QrtMGeEBUxEd6yde/Y0dNFrYNqzxd7LMiqlL+Td8h3jxfxX+4sxbMzniLOkk8phIO0nFuZjBZgMRx0XR4pwa0vvDWe9zouR7QeX1GgzaHPvqSvMZZc/IbOuekY/b8LH/AAhdkPiBADg3MeazqGWtM6ABbO8OZ/E2WD9GxuCfmrkS1JHfdkYxlHD4DGOH8GtSbQxB/C5tpKb4zDtc1tSkRUa8h0N4G65T9lcRSqsxXZuI0cDUpB2hBEEBdJhqeJwFWm2HvpNdDQbw0rAzw45GjUxVKCkmQGt8TXNykCDIghFUCamGdfxUamUHiNYTB4wdcZq2HgnQgxPshK5cxobTYGUmiGhsjnKgc1VD8HYnqU4xII1Ly71iU0pg5QhMuaoHRMER6iLo+kLDoiex1oIYYAV5PRZCVcGUDCRYOO5WzXaIdaNMf2QBBbXFbtdHNBtMLYO2SsELDjy/zgtA9DNI9Oq0BnoiTBaPVS4iG8PRKMVWNFzSSeE803cLIHEYanVY9jxqLcQeIToaLS7ON7fd2njKTBhy4tDiXtZYuOwKUYHsPHVCKmJLqIM5aeYh7ubo0XbM7P7mqHF5eIsCNF7EULF0Hqduilx5pY4cR5xjOVgVIHD0qVHvHPDAAHPdLo4SUrxPb9IVnYfD0jUDH5KlRxIFtQxoumBo1ahLQdLIH9wweFr53ML6tV5yt+EuN9E8ZRabY1b/AGOk7MdmonjII5SJTCbFAdntLKcEDMTJ6lHG2yqsMxq2lK8S4iUxqumT6JViD5vVRksRJj/E1y4XE2r1x/WV2+NILXX4rh8QZr1z/wDY76rd9M+TM9Qf0oyFiP8ANVMweYNlBXjczxutkxgyhVOXwzLfhG7eA5jUcuicUqoqU2uBGYAG2lht9VzjXOY4ObqEdhq/dPD2z3VTzAG7XcVS8jByVou+Pnr6WOA5pEHSC0gXBa7VL69LK541GUFp4gaFFhwEOaZDuGhB3BUPGduU+Zt23vHVUYtovtXtANN4ENOkkHkZsiqboI/z0Qb25HO+/Bb0yTlE9OvAqTIrVgxdDvsnEmhi6Jnwl7L8LxK+gscC50GzmxK+W0n5XU3NImZjhB3X0nAVO9w2HqcWCTz4FUpKmQZ49SD6U5QOpnmLLRoidiZWVGS2pJuHSPVag67wTKdFNlhltyCiY0nUzK8yBeNlJ8RICQxAcN7civKjmwQCNBqV5OMLDsqVRLbatv7LQ7KjvK7iJ+i6U+jg0XtC2ufFTcdXOY71WjpynmD7kxKpXAAaTsQVaQ0HNo1pqHpssjNkWPkz0njYH5EsUF/y3Qu7Qc0Q0aC3/wCoXKVQXVS8iczyY56BdFXzVDWqHbws9blJnMAebWaHOHpZeRxzuTk/k7LCEccFij0kK8SIaIG5+SHY0OYW3kOt0KYV2ZmVhuHN9EPToOkAyMxLfWFoRmq2C4WXwrsThKtOvQLi+n4hNjG4X0zsbtHC9o4OlWkB/lqtddzX7r5phquIoumZDHZS1wkRpoUf39fCOOKwFU0Xz/Fpa0n8w0qp5GP3HXyT458V+x9VIplrRYwIB2Q1VtJrHZnTrey+dt/bTtOmMlXDUnkbtc9n6rGp+1/adbwNpUqcyA4FznCeEqq/CzfCJP6nF02dYK9I16rGlpLXCROiZUSCBpovn+Er121RiC4lz3S+fiB4ruMDVFSnTcLgiQVFLFw0w3K2McuiiFo2C35LxaoWg0zPdWBURC9KB9hl2vcCtQ5YhaNEphwhjzut2u0QwkLXOGjUJ0BJm5cOKo4NN9kM/EsbmlzQALkmIHFKcb+0FDDhzKAD3/i2+akSbAjGUnodVBTbLnua1uxcQEK+vgXEtFdml72XH1u1sVi3Fz3k3DQNBJ2ssv3kvdrlyiXzqI4wpPabWyzHCvk7NtLCiXCpSiBfM2boOpRbnmARmsRBHoVzlWsIY5rpabTuD01W+H7RdSIbmLmHVpMmELxPtDyxJHT0IaAiXOaWlLaFZlRrXtMtN2nYhEueYlV2Q3szqmxhKsS6AUwqOBnklGMfAKFK2SXQlx9TJTqPnytc72uuKcS4uO5dPuuk7br5KBYD4qrsnpqVzQP1XpPT4cYNmJ50+UlE8V47dB9FKg6+w+S0igQtKbi0xAg7HQlZqULVjLsaYWvDRSc7wEw1x2nQFFmReYLZB3SVrjBOxADvzC4cEyw2I7xoa8jMBAduVnZ8NfUjVwZeS4stWph4zAQ4X/ULKkQJG4ILenBFFp1Atuhnth7SLNJjkD1UEZWqJ2jURJn4hM8HLv8A9mMQa+ADSZ7txYfkQV8/dYhp4n3C639jKwz4+jxYyqORBLVDNasiy/adgwlr8vEQDxut2wY+aHq+UEatIMogcuAUPyUWWN7aR9F4Zm7L0TBUnjfonBKPJJuF5SXgaheTjCo/ReJiTFiFJ0XtR8l0o4IhdWbLy07XPKNEPXLu6qHeo4MnTwhF1rvcGiXPytvpAGqGxLZ7mmNA0un0leW9XyOEWl86Ok/pfx45Zxk/+23/AJF72AUHcbH3Sh7YFQ7ucGt9LlO8QB3ccS3Tg0JRWtkBEQM1/wCorAjp0dEhu2wOlTDhipF3NsOh1UuoNaxtQjTK8dRqicO2DUOXVjtdwCIUVCDTdyLrciCpG3ZJqhcwNbiajHeV5B6EmFrWplgLDGWcrCdjwQpdNadA5rSDzACNxRa+hWPAMeAOI3U8tSTIU9UJcQyZdpBgjghm2c08wmVZofTe6NWAlLQLxwK0ccuUSjljUrOjwjfC2LggWXVdjvim6mZ8DjHQ6Ll+zBnosnhYroez3FlUA6OELCzfc0a8dxTOopGy1gFDUniwW4OiqsJMnKOCqWE6aLUXVg0FBQdmLWEk8lq1sQrWEwFUvy9folQ9s88hoJ32/ulmKxj2B58UAHyifkEc/M+3FY/uuaxFpkf3SjS7Bs4fF9uVKr6jR3nmIALXA2tcEJVU7SBeSSSWg+ZsyeAC+jVcHTb4msYSNSWieiFLcKHfxaFMX1dTa4fRXIZYJdFiO1UTmcLg6dekyrIeXtD58UAxoItZQcADVcADlDBI8UEyuvYcO5sNa0cCyCI6KzqdFwIAOpsAI0smeXfRKvGbV8zh8VQrYZofSJ8wGUkkFY0sT3tpgjzjQW2C7LE4HBVQG1Gg5QHWJaSbaQR1XOY3sNtN1Srgq4DpOahVMgka5Xt+4UuPJCWnob25wX1Oxr2Pi8zDRJuDmb0OsJ853hHTiuL7MpdoMqh7qFRjRLTmy/KDK6yiXPYJ2VTNBKWiq3srVfbkk2MfIdwvCZ1yBmSPG1AGvcfK0Fx6ASUGOOxnKjle16ve1gBpTGX/AJG5KWBXq1XVaj3n4nOPuVUL1OGHtwSMHLP3Jto9soJlTJUKUiZC8pXkwki7DHTQqzXOY4RaDqqt3V4m2+36KN0WYLVoZ4etnADjcCf79Fo5rCTIJBHwmIPFK6TiCIMOBlp+oTKjUFVpvD2mDw9lnZcfF2i/CfJbKw7NSG+cC/GYEJ9+yVQs7Rqsk5nscyLbGYSc0ych0h7HCdJDp1TX9nxHbdflUqm3EmLe6gk7iKa0z6E6XNcOXzVqbiabCNdCqhwDRJ4DnovUmjK4Amxn7qsZ4QHSI3iy8HbGVE2aYCls68ikMSeQuvKHaCNd15OMK1RxIsNT8grKImTx+i6UcERhWY2Q8/hIHqYCDqeOtXtAGdrf+IDUZVu5g/qb8jKCYSS9zrkkm/8AVJK8j61/1Ejqf6RSWCU38a/8g2JbDADrJtyiUmrg+CSJdUaAOkFOMUZLGbnMf+O6UVCHVafAGofsFixds91jTUdkNIaXXNmwOpM/qgalTw1iDpUH3RDnwKrpM5/kxohL3nwa6uJhTwWwgbV1PkD8gjC7NRrNGoo2npKEAOYRs0/NbF0MrtGmWHeoVmauiJfJiDnpEDRoIB+aWmzzw/VMadqT43Jj0S53m9AreDbZUz9JnS9ikuolpFgSAugptc0NcNjYrn/2eOZjxwcupptlpGkbLE8nWRmlidwTGGHq5mi+wnqEW2pMJMx5pPjY6I5lW0yq7VhoZtfpC1Drc0tZWJ30RLXzF/ZAGEG9l4N3VGvbotQ7okNZcUxC9ljRSHLRoa5NQzBX0y4W36ICvhXXhpiN4TwUhbRXNEGQQlxHU6OHxFGoyS3M2Dq2yBNbGskirUsbTMLuq/Z9J+bwjoUtqdlU50tqY2RrRKs8l0zm2Vsa8SfFycrtw+Kqu8Za0G/hBJjqU9/8a1ugUDDZTN0pSroJ55yVAtDDlrbmQOO63YQwOHFbwA2OCEruyzHBR7ZA2DVzM8FzPblXJhamxqEUxf8AFquhrOhhJ4Li+36/eVqNGRDAajgL3dYAq94kOeRIr5p8YNibITMbXPEDivWAUhwaQQ50gyLWBUOuTGut/ovQGQqRVQpXkQJ5eC8rAIQ4olm61I8pWbdUQAD3fAzKjk6LWNaMosTuCiKNQhzHjU+Eqj2QyoY0yn5wqUzBHAkEKJpTiS/bIcMdmAFg7S+h6pj2I4M7TpvaC0uYS7cAtc2UkpPOWQbiD1aZ/wA9E67He042k/N5wJafiNvqsuceNk8txO/aRJnVt52ctKLiMx/FNkKzxAuboCTfUomkYIEXkgz0UBnsJbOWCBdWDgCOQVQXGABpCk5QZ4g+6QJ4620N15VkeHU2NhtBXk4wt6aL0x9l5eOo910s4IzB7R4ydQxx9cpQVoqDYCPYIuq6DUnQgN93AJc9+WnXdwL2+q8d6xL+/wD4OsfpWF+Ff5kBYl8ve8fDTyjqUsc69EDzHvHu6TACMruy02AnUEuP9ISwPznP+KYjYAwFjY18nuP2K1nwx0DU5R63JQNV0eEREE84FkTWc0H+lv13QZ8RfMXLSeW6t41e2KWkXoNLsx4QPXdexByYd5+Ko+Af6RqUTSpZaYA8z99hKyr0+9rNog/w6QAPPipOX1EdaMCAzCtJ1e0kDgIhKjcnqmfaFRoDWMsACPayWBXvHWuRRzvaijo/2bMvrN2lpXZsbbT21mFxP7OGMTWE/Cwwu6pXa221+qxPNVZWaHjv+2gTEhwhw1bcc16nWsOBW9dubNbTRLfExxjQ39VBDaomGbK0IllcTqlDXuWraukp3AKx02uFu2sOKSNr35LdlbmULgxhwyqDCKY8JIytBCLZiLKN6H7GzakFaiqBqUpGIE6q37wI1hK2LgNC9hkztFuKyMEk6pecRz+aluIMEA3TcguAU5reKHqgQYCq6ueKydWB15pm7E1Rg+ACEuxL4GyIr1wMyTYrEgZr+ko4RbYDZhjMS1lN7nOhrGlzugXDYis/EV6tZ8k1HEnlwCZ9rY7vC7DsNswNQzrHwj7pU0aW29+a3vExcI8vyZnkT5viiI08M+pXjEWtBteVMukg3H16KMpHJXP5K3EoQveqkxFl6EQNHgOauNDb9VAEK5ENHOShZLFaIp3kImjcNHO6wp+BwI8xB6CVtRBBA5wocpPiN6zR3debGG5eYLgg6fmb1NkwxAAoOdxFMfOUBT/mED8RHoTCixv6GyTL9yCMMTmLTaJB5h1/smfZeb95FMHK4uJou/DUBkJV4W16rQfKCwc4uCnXY7Q6v31vLTAmDLphyr51SDjK4s73C1jVpMqPble/w1mH4KrDDh/nJGgS0ERIJH9kroEsxNOmfJiaIqutAFSnDSfUR7JlTIA3kk+izymzdroidTotmAz4jt7IcAjxEzoY4LcGQCEgSfEBYXn5Lyg5m3G68nGFajUnr8gvTyVHHQDVxMLpTZwVKwbEuEPj8TB80qr1Q6mADbO6eZBhMMcQym61s1L0ubhJnOsIJIBe4E6xmsvE+ru/Ia/g7J+l414EX+7AsfVBJAMZvCeTRcoNstYCBGaY5AaLbETUqlsWnxdNVjiHgBseZ4ytH4aY1KzY9JHrkCVXAA73PrxVaFIuFLP8ZzHkJWdQlxDdiYtwCMpgi4E/C0K5fGJG9yo3Dspe8NsweEHQuiAPRDvPctdcmpVMSdb7okR4Q67WSXcC4pXjMRmcYMwbRoJ2Q405uhpVHYHiXhz4GgsFgBcdVeoRmUAX6Ba0VSozJblY37AqRj8v4qZ+RC+hUILR0XzXsZ2XtLDc87evhlfSsOJb1CxPUFWRP9jQ8V3B/wAk1ACCDrdL6tODZM3ibIR7L8duioRdMtAYBAupidFsWt4KhaNlMpAmdxurtqPbzVDOkSqkxNkVjhjMQ202O8ohtZvGyUmpH91mcTUafAcvzTvYh+KnOJU95znokbMfUaBmDT0sVf8A8pRHmzj0DgmUEFbHPeDivCpcXKUDtLB6ms0cnBw+yt/5PAjXEUh/yun9tMXJjV1UDdD1cRlm6VVe2ezWyDiWE30zE/IJRjP2iwbARRY+q/bN4GD7o4+M5PRHLKoq5McYnFHxXXMdo9qy40sO6XeVzxcN6c0uxXaeNxU53BrD8DBDfXdCA6+ESQQImy0sPh8NyKGTyeWoHrPcXEuMne8knit8jg0GIabAmfFzj6KaFB1RwaGl2lmzLibx+qIexrnBgIcRYkOOSdDlPAbKaeRJ0iPHjbVsGYwHMXEtY3zO1cTwHMrNxDiSBlaLATPuVu8sBykyG2axuruJceCza01HX0bfgAijLVsdxvSMsqnL8lqW3k2tmdyB0HVUiTOkgf4UXMbhRDRMDiVZxvtAblH6rSmyQ58cQBv6LMwMv4okjhOkoU7YbVI8yA5s8frZbUjDgDtm9wUOJBF7zb3RDTD3EGxDnHToU2RWhYw3FD/4zeAcR7NlLaLstTNBOXxWE7hM8SZwbCCZz/Vl0rcXAPgm7GjXjChw7i0SZtOy7TUfWc9wAzuc4yQNZT/sIEhobldNUA/0t1JK5ykJcImQCbdF03YFGtUp1TT8OchpqESI3DBpPFR+UlxBxv6TrGVG1MXTax0ijTNObwHE3TekD4pv+Efql+DoUqTMrRcE5nG5c7QyUwpkiAssil2bAmDK2YXRbTZZAglzYABGo1WwkNDW8NSkAWDtiOa8qmRFzAt6ryQhWsxcufsDlby4lWcbFVcYYGt1iOi6W3SODwT+BZ2i7+DWdr42NF9LkpRmhr9hDYHUprjr4d4kXeyZ4TCSvBFLUGS2TsIXhfU0/ebZ2n9Pcf6JRj8MEdlzOdci+biTMQEFXfL3unQEIuqYAjRozepS+rZjRu6SVVxqz0vRk0S9oGqMBgtA0aJQlK2Z25MBEEhguf8AIU2TehoqlZGIxLmMIYfGbN5c0qc6TyGk780RiCS6DqRJ6Ic7q9hgorRTyNtmdjfdWi08SF5okkcVLuA2srF/BXjHVm/Z7suPwbuFdg97L6jhYLG32C+V4T/V4SdO+p/9gvqeCa9rG3BWP6j9yLnifazeowi6FeOCPqOAF9Y30QjnDkstF1A7h7rNzVs5YklEmKjF9hoh3PibLeobISpJlGmJIyc8naFi52pV33Q75UyHIdVPRZF07qSJVCOYCNDUUe5DVJM6oghu5WRGsCUaYzA6jcoJ5boB5Bd0TKoxzpnTdLagh5HA+q0vHdmd5XRXWyu0ERAOYnKOqoEXRbnNM2s8EyrM3SsrYo8gxlN1OhkYWipVPdvcDeXagHWALFQ8MotqACRSZJmxLjZoCKw7GuOH0gS6/wAToBJQnnoYupZ012EZvwjQu9VnJ8pGhSigNrZJBM/E86S/Zo6IkU2tpkxaZd6DRYUyW3nM6bnUCSNAExrsa2k6dC8C2+kqTLKmkgMMdWLH5ov8RLzzJgBSW3A4Mb8wFYy91S1nGByANoWuXxuAEBuS35W80UpVodR+TJwtTYJib+l1R3jzSIMtAO3QrZ3hLTxa6/GVm5pDH8XR9EcGDNWY3F9IdBV6fi7wcnH5qAM1Mj4gA4c2jUeiimQMx4lv3Kle7K8dNDN8OwNNxPmeT0iAltduV7xtAjnomTi1uDoM1F5/5uKHxVPMKbxr3cGNyLKpilxZYyrkgSmCGPcLAAM5kld92HQdQwuHJgEszRwm9lx/Z+FOKxOFoNBLWTVxB0AE6L6Dh2w1gDYGT2gQAofLnbohWo0F0Ya4bBwtym4RlKbE63/9IOk0gAxMAIum6CZMlUAGFNI33laACAR+GVk2CJ4H5LVsNHIT7JAlw0yfSeq8vNIywZJ1XkhhK91wBtcqr5yuPIklaHV35R9F6p5X/l+y6RLo4XB7SFOOaThmsBIcSwmNbZiklQnurERnAPra6f4/+Q38/wB3JBU/lu/OP+y8f6mv9T/z8HXv01L/AEC/l/8AsCrEOZYQTEmeCX4gw4N6DnCY1NKfp9UtxH+pPX7qjh7PWvotSaC5reAJ9V6oZeACrUP5p/KqP87+h+qlX3gy1FnsTQGWmW3OWXnhOgQDmmYj2TV38s9GpdU8xVrDJvRVktGQGkclBFz1Knb1Uf3VgCtF8L/qsL/vU/8AsF9ZwY8DOMBfJ8L/AKrDf71L/svreD8jPRZPqXcSbxema1CIu31QlRtE6dbJhW09Esd5j1WSX4oxe0gHK73WJzgXIlbu1VXbIkIDqZtwEM/NwCNqeZD1PspExALgViaU7lFu36qg1KlTGBTRaBpdUNLkjToqHRJSY4GaZA0Co5gA+iMGvus6mjeqNPYLFlfwtMwLJNU8xO8ynGM0d0Sd3mb1Wt4nRneX0Q2DqD1H3RdEPY5rtWvsHC4I4IQ6hG4LSv8AkJU+bohwdjeiyGOg2GHqNHPK2/vCW0wX4LHcWOw2IDeLWksd/wBgmuE+H/ZP0CXYH+Tjv/x2I+yz8fz/AILs+gJoMOM2dlgjm4Jzi2TQDxpZwO3jBhKKX8h3+636hO8V/pf+FH/+kWd/Uh8PQmY0hgO5dAG6IMNY9p1e4QeDQ0TCzb5KP5/sVNTzUfyJ3thdIhzZa3clmcHQ/lhZODjTB3zgDgZRPx0v9t32VG/yKn+4PoUcWRzQKYY9v9I9+CpEFzRoXSOkSr1fN6N+ih+rfyOVhFaS3YYZdTYybOY3LyIEqaTXVabm7tMRzKofJhvyNReF81f/AD4lSk66LK2N+xsMyjTL48VZ3jPHkukpeZ9+AF0mwP8AKb1+6eYbQqlN27ZWn2E0hBItcLdoBDhvxWNPUeqKZoegUZEWFgJ0IFzst2FpgTxnmFn8FToFdnmPQfRMI0E3G3FeVjr7LycGz//Z" />
            <h1>
              Student, Class of 2023 <br /> <span>Priya Patel</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* Gallery Preview */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>Life at Excellence Academy</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Moments That Define Our Community</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={images.computerLab} alt="Students in Computer Lab" />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
          <div className="gallery-item">
            <img src={images.sports} alt="Sports Day" />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
          <div className="gallery-item">
            <img src={images.artClass} alt="Art Exhibition" />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
          <div className="gallery-item">
            <img src={images.classroomImage} alt="Classroom Activity" />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
          <div className="gallery-item">
            <img src={images.classroomImage} alt="Classroom Activity" />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
          <div className="gallery-item">
            <img src={images.artClass} alt="Art Exhibition" />
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
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey with Us?</h2>
            <p>
              Take the first step toward an exceptional educational experience
              for your child. Our admissions team is ready to guide you through
              the process.
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
      </section>
    </div>
  );
};

export default Home;
