import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './About.css';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Achievements Banner</div>
        <div className="banner-overlay">
          <h1>Our Achievements</h1>
          <p>Celebrating excellence in academics, sports, and beyond</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="achievements-intro-section">
        <div className="section-header">
          <h2>Excellence in Every Field</h2>
          <div className="section-divider"></div>
        </div>
        <div className="achievements-intro-container">
          <div className="achievements-intro-content">
            <p>
              At Excellence Academy, we take pride in the remarkable achievements of our students, 
              faculty, and institution across various domains. These accomplishments reflect our 
              commitment to excellence and our holistic approach to education.
            </p>
            <p>
              From outstanding academic results and competitive examination successes to victories 
              in sports tournaments and recognition in arts and cultural events, our students 
              consistently demonstrate exceptional talent, dedication, and hard work.
            </p>
            <p>
              Our achievements are not just a matter of pride but also a testament to the quality 
              of education, guidance, and opportunities we provide. They inspire us to continue 
              striving for excellence and setting higher benchmarks for ourselves.
            </p>
          </div>
          <div className="achievements-stats">
            <div className="achievement-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Board Exam Pass Rate</div>
              <div className="stat-subtext">for the last 10 consecutive years</div>
            </div>
            <div className="achievement-stat">
              <div className="stat-number">75%</div>
              <div className="stat-label">Students Scoring Above 90%</div>
              <div className="stat-subtext">in board examinations</div>
            </div>
            <div className="achievement-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">National & International Awards</div>
              <div className="stat-subtext">in the last 5 years</div>
            </div>
            <div className="achievement-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Students in Top Universities</div>
              <div className="stat-subtext">worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements Section */}
      <section className="academic-achievements-section">
        <div className="section-header">
          <h2>Academic Excellence</h2>
          <div className="section-divider"></div>
        </div>
        <div className="academic-achievements-container">
          <div className="achievements-highlight">
            <div className="highlight-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="highlight-content">
              <h3>Board Examination Results</h3>
              <p>
                Our students have consistently achieved outstanding results in board examinations, 
                reflecting our commitment to academic excellence.
              </p>
              <div className="highlight-stats">
                <div className="highlight-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Pass Percentage</div>
                </div>
                <div className="highlight-stat">
                  <div className="stat-number">75%</div>
                  <div className="stat-label">Students Scoring Above 90%</div>
                </div>
                <div className="highlight-stat">
                  <div className="stat-number">15</div>
                  <div className="stat-label">School Toppers in Top 100 Nationally</div>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements-cards">
            <div className="achievement-year-card">
              <div className="year-header">
                <h3>2023 Board Results</h3>
              </div>
              <div className="year-content">
                <div className="result-category">
                  <h4>Class 12 Results</h4>
                  <ul>
                    <li>School average: 92.5%</li>
                    <li>Science stream topper: Ananya Sharma (98.8%)</li>
                    <li>Commerce stream topper: Rahul Patel (97.6%)</li>
                    <li>Humanities stream topper: Priya Singh (98.2%)</li>
                    <li>5 students in the top 100 nationally</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4>Class 10 Results</h4>
                  <ul>
                    <li>School average: 93.2%</li>
                    <li>School topper: Arjun Mehta (99.2%)</li>
                    <li>85% students scored above 90%</li>
                    <li>10 students achieved perfect scores in Mathematics</li>
                    <li>8 students in the top 100 nationally</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="achievement-year-card">
              <div className="year-header">
                <h3>Competitive Exam Successes</h3>
              </div>
              <div className="year-content">
                <div className="result-category">
                  <h4>Engineering & Medical Entrances</h4>
                  <ul>
                    <li>25 students qualified for JEE Mains</li>
                    <li>12 students qualified for JEE Advanced</li>
                    <li>18 students qualified for NEET</li>
                    <li>5 students secured ranks under 1000 in JEE Advanced</li>
                    <li>7 students secured ranks under 1000 in NEET</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4>Other Competitive Exams</h4>
                  <ul>
                    <li>8 students selected for NTSE scholarship</li>
                    <li>15 students qualified for various Olympiads</li>
                    <li>3 students selected for KVPY fellowship</li>
                    <li>12 students qualified for CLAT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements-gallery">
            <h3>Academic Achievers</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="placeholder-image">Student Photo</div>
                <div className="gallery-caption">
                  <h4>Ananya Sharma</h4>
                  <p>Class 12 Science Topper (98.8%)</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Student Photo</div>
                <div className="gallery-caption">
                  <h4>Rahul Patel</h4>
                  <p>Class 12 Commerce Topper (97.6%)</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Student Photo</div>
                <div className="gallery-caption">
                  <h4>Priya Singh</h4>
                  <p>Class 12 Humanities Topper (98.2%)</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Student Photo</div>
                <div className="gallery-caption">
                  <h4>Arjun Mehta</h4>
                  <p>Class 10 Topper (99.2%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Achievements Section */}
      <section className="sports-achievements-section">
        <div className="section-header">
          <h2>Sports Excellence</h2>
          <div className="section-divider"></div>
        </div>
        <div className="sports-achievements-container">
          <div className="sports-intro">
            <p>
              Excellence Academy has a strong tradition of sports excellence. Our students have 
              represented the school, district, state, and even the country in various sports 
              competitions, bringing home numerous trophies and medals.
            </p>
          </div>
          <div className="sports-achievements-grid">
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-basketball-ball"></i>
              </div>
              <h3>Basketball</h3>
              <ul className="achievement-list">
                <li>District Champions (Boys) - 2023</li>
                <li>State Runners-up (Girls) - 2023</li>
                <li>Inter-school Tournament Champions - 2022, 2023</li>
                <li>3 students selected for state team</li>
              </ul>
            </div>
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-futbol"></i>
              </div>
              <h3>Football</h3>
              <ul className="achievement-list">
                <li>District Champions (Boys) - 2023</li>
                <li>State Champions (Boys) - 2022</li>
                <li>Inter-school Tournament Champions - 2021, 2022, 2023</li>
                <li>5 students selected for state team</li>
                <li>1 student selected for national camp</li>
              </ul>
            </div>
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-table-tennis"></i>
              </div>
              <h3>Table Tennis</h3>
              <ul className="achievement-list">
                <li>District Champions (Individual) - 2023</li>
                <li>State Runners-up (Team) - 2023</li>
                <li>National Level Participation - 2022</li>
                <li>2 students ranked in top 20 nationally</li>
              </ul>
            </div>
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-swimming-pool"></i>
              </div>
              <h3>Swimming</h3>
              <ul className="achievement-list">
                <li>District Champions (Overall) - 2023</li>
                <li>State Champions (4 events) - 2023</li>
                <li>National Level Medals (2 Bronze) - 2022</li>
                <li>3 students broke state records</li>
                <li>1 student selected for national team</li>
              </ul>
            </div>
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-running"></i>
              </div>
              <h3>Athletics</h3>
              <ul className="achievement-list">
                <li>District Champions (Overall) - 2023</li>
                <li>State Champions (4 events) - 2023</li>
                <li>National Level Participation - 2022</li>
                <li>2 students broke state records in long jump and 800m</li>
              </ul>
            </div>
            <div className="sport-achievement-card">
              <div className="sport-icon">
                <i className="fas fa-chess"></i>
              </div>
              <h3>Chess</h3>
              <ul className="achievement-list">
                <li>District Champions (Individual) - 2023</li>
                <li>State Champions (Team) - 2022</li>
                <li>National Level Participation - 2022, 2023</li>
                <li>1 student achieved International Master norm</li>
              </ul>
            </div>
          </div>
          <div className="sports-gallery">
            <h3>Sports Champions</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="placeholder-image">Sports Photo</div>
                <div className="gallery-caption">
                  <h4>Basketball Team</h4>
                  <p>District Champions 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Sports Photo</div>
                <div className="gallery-caption">
                  <h4>Football Team</h4>
                  <p>State Champions 2022</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Sports Photo</div>
                <div className="gallery-caption">
                  <h4>Swimming Champions</h4>
                  <p>State Meet 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Sports Photo</div>
                <div className="gallery-caption">
                  <h4>Athletics Team</h4>
                  <p>District Meet 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Achievements Section */}
      <section className="cocurricular-achievements-section">
        <div className="section-header">
          <h2>Co-curricular Excellence</h2>
          <div className="section-divider"></div>
        </div>
        <div className="cocurricular-achievements-container">
          <div className="cocurricular-intro">
            <p>
              Excellence Academy encourages students to explore and excel in various co-curricular 
              activities. Our students have showcased their talents in debates, quizzes, music, 
              dance, art, and many other fields, winning accolades at various levels.
            </p>
          </div>
          <div className="cocurricular-categories">
            <div className="cocurricular-category">
              <div className="category-icon">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <h3>Debates & Public Speaking</h3>
              <ul className="achievement-list">
                <li>National Level Debate Champions - 2023</li>
                <li>State Level Elocution Winners - 2022, 2023</li>
                <li>Inter-school Debate Tournament Champions - 2021, 2022, 2023</li>
                <li>Model United Nations - Best Delegation Award 2023</li>
              </ul>
            </div>
            <div className="cocurricular-category">
              <div className="category-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Music & Dance</h3>
              <ul className="achievement-list">
                <li>State Level Classical Music Competition - 1st Prize 2023</li>
                <li>National Level Dance Competition - 2nd Prize 2022</li>
                <li>Inter-school Music Festival - Overall Champions 2023</li>
                <li>2 students selected for national youth orchestra</li>
              </ul>
            </div>
            <div className="cocurricular-category">
              <div className="category-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Art & Craft</h3>
              <ul className="achievement-list">
                <li>National Level Painting Competition - Gold Medal 2023</li>
                <li>State Level Sculpture Competition - 1st Prize 2022</li>
                <li>Inter-school Art Festival - Overall Champions 2023</li>
                <li>3 students' artwork selected for international exhibition</li>
              </ul>
            </div>
            <div className="cocurricular-category">
              <div className="category-icon">
                <i className="fas fa-atom"></i>
              </div>
              <h3>Science & Technology</h3>
              <ul className="achievement-list">
                <li>National Science Exhibition - Gold Medal 2023</li>
                <li>State Level Robotics Competition - 1st Prize 2022</li>
                <li>International Science Olympiad - 3 Gold Medals 2023</li>
                <li>2 students' projects selected for national innovation fair</li>
              </ul>
            </div>
          </div>
          <div className="cocurricular-gallery">
            <h3>Co-curricular Champions</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="placeholder-image">Activity Photo</div>
                <div className="gallery-caption">
                  <h4>Debate Team</h4>
                  <p>National Champions 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Activity Photo</div>
                <div className="gallery-caption">
                  <h4>Music Ensemble</h4>
                  <p>State Festival 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Activity Photo</div>
                <div className="gallery-caption">
                  <h4>Art Exhibition</h4>
                  <p>Student Showcase 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-image">Activity Photo</div>
                <div className="gallery-caption">
                  <h4>Science Project</h4>
                  <p>National Exhibition 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Achievements Section */}
      <section className="institutional-achievements-section">
        <div className="section-header">
          <h2>Institutional Recognition</h2>
          <div className="section-divider"></div>
        </div>
        <div className="institutional-achievements-container">
          <div className="institutional-intro">
            <p>
              Excellence Academy has been recognized for its outstanding contribution to education 
              and has received various awards and accreditations that reflect our commitment to 
              providing quality education.
            </p>
          </div>
          <div className="awards-timeline">
            <div className="award-item">
              <div className="award-year">2023</div>
              <div className="award-content">
                <h3>Best School Award</h3>
                <p>Awarded by the State Education Department for outstanding academic performance and holistic education.</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2022</div>
              <div className="award-content">
                <h3>Excellence in Sports Education</h3>
                <p>Recognized by the National Sports Association for promoting sports and producing national-level athletes.</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2021</div>
              <div className="award-content">
                <h3>Green School Award</h3>
                <p>Awarded for implementing sustainable practices and environmental education initiatives.</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2020</div>
              <div className="award-content">
                <h3>Innovation in Education Award</h3>
                <p>Recognized for implementing innovative teaching methodologies and technology integration in education.</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-year">2019</div>
              <div className="award-content">
                <h3>International School Award</h3>
                <p>Awarded by the British Council for promoting international dimension in the curriculum and global citizenship.</p>
              </div>
            </div>
          </div>
          <div className="accreditations">
            <h3>Accreditations & Affiliations</h3>
            <div className="accreditation-logos">
              <div className="accreditation-logo">
                <div className="placeholder-image">CBSE Logo</div>
                <p>Central Board of Secondary Education</p>
              </div>
              <div className="accreditation-logo">
                <div className="placeholder-image">ISO Logo</div>
                <p>ISO 9001:2015 Certified</p>
              </div>
              <div className="accreditation-logo">
                <div className="placeholder-image">British Council Logo</div>
                <p>British Council International School Award</p>
              </div>
              <div className="accreditation-logo">
                <div className="placeholder-image">Green School Logo</div>
                <p>Green School Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Achievements Section */}
      <section className="alumni-achievements-section">
        <div className="section-header">
          <h2>Alumni Success Stories</h2>
          <div className="section-divider"></div>
        </div>
        <div className="alumni-achievements-container">
          <div className="alumni-intro">
            <p>
              Our alumni have excelled in various fields and have made significant contributions to 
              society. Their achievements reflect the strong foundation they received at Excellence 
              Academy and inspire our current students to dream big and work hard.
            </p>
          </div>
          <div className="alumni-profiles">
            <div className="alumni-profile">
              <div className="alumni-image">
                <div className="placeholder-image">Alumni Photo</div>
              </div>
              <div className="alumni-info">
                <h3>Dr. Amit Verma</h3>
                <p className="alumni-batch">Batch of 2000</p>
                <p className="alumni-achievement">Renowned Cardiologist at Apollo Hospital</p>
                <p className="alumni-quote">
                  "The strong foundation in science and the values instilled at Excellence Academy 
                  have been instrumental in my journey to becoming a doctor."
                </p>
              </div>
            </div>
            <div className="alumni-profile">
              <div className="alumni-image">
                <div className="placeholder-image">Alumni Photo</div>
              </div>
              <div className="alumni-info">
                <h3>Ms. Priya Patel</h3>
                <p className="alumni-batch">Batch of 2010</p>
                <p className="alumni-achievement">Software Engineer at Google</p>
                <p className="alumni-quote">
                  "The problem-solving skills and analytical thinking I developed at Excellence 
                  Academy have been invaluable in my career in technology."
                </p>
              </div>
            </div>
            <div className="alumni-profile">
              <div className="alumni-image">
                <div className="placeholder-image">Alumni Photo</div>
              </div>
              <div className="alumni-info">
                <h3>Mr. Rahul Singh</h3>
                <p className="alumni-batch">Batch of 2015</p>
                <p className="alumni-achievement">Award-winning Filmmaker</p>
                <p className="alumni-quote">
                  "Excellence Academy encouraged me to pursue my passion for storytelling and 
                  provided me with opportunities to explore my creativity."
                </p>
              </div>
            </div>
          </div>
          <div className="alumni-link">
            <Link to="/alumni" className="btn btn-primary">Explore Alumni Network</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Our Legacy of Excellence</h2>
          <p>Be part of an institution that nurtures talent and celebrates achievements.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
