import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './Academics.css';

const Academics = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Academics Banner</div>
        <div className="banner-overlay">
          <h1>Academics</h1>
          <p>Excellence in education through innovative learning</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="academics-intro-section">
        <div className="section-header">
          <h2>Our Academic Approach</h2>
          <div className="section-divider"></div>
        </div>
        <div className="academics-intro-container">
          <div className="academics-intro-content">
            <p>
              At Excellence Academy, we believe in providing a comprehensive education that balances 
              academic rigor with holistic development. Our curriculum is designed to foster critical 
              thinking, creativity, and a love for learning.
            </p>
            <p>
              We follow a student-centered approach to education, where each child's unique abilities 
              and learning style are recognized and nurtured. Our experienced faculty employs innovative 
              teaching methodologies to make learning engaging and effective.
            </p>
            <p>
              With a focus on both scholastic and co-scholastic areas, we ensure that our students 
              develop not only academic knowledge but also essential life skills, values, and attitudes 
              necessary for success in the 21st century.
            </p>
          </div>
          <div className="academics-intro-image">
            <div className="placeholder-image">Classroom Image</div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section">
        <div className="section-header">
          <h2>Our Curriculum</h2>
          <div className="section-divider"></div>
        </div>
        <div className="curriculum-container">
          <div className="curriculum-overview">
            <p>
              Excellence Academy follows the Central Board of Secondary Education (CBSE) curriculum, 
              which is enhanced with additional resources and activities to provide a well-rounded 
              education. Our curriculum is regularly updated to incorporate the latest educational 
              research and best practices.
            </p>
          </div>
          <div className="curriculum-levels">
            <div className="curriculum-level">
              <div className="level-icon">
                <i className="fas fa-child"></i>
              </div>
              <div className="level-content">
                <h3>Primary School (Classes 1-5)</h3>
                <p>
                  Our primary school curriculum focuses on building a strong foundation in core subjects 
                  while nurturing curiosity and creativity. Through activity-based learning, students 
                  develop fundamental skills in language, mathematics, science, and social studies.
                </p>
                <ul className="level-features">
                  <li>Emphasis on language development and reading skills</li>
                  <li>Introduction to mathematical concepts through hands-on activities</li>
                  <li>Environmental awareness and basic scientific concepts</li>
                  <li>Art, music, and physical education integrated into daily schedule</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-icon">
                <i className="fas fa-book-reader"></i>
              </div>
              <div className="level-content">
                <h3>Middle School (Classes 6-8)</h3>
                <p>
                  The middle school curriculum builds upon the foundation laid in primary school and 
                  introduces more advanced concepts. Students are encouraged to develop critical thinking 
                  and analytical skills through project-based learning and research activities.
                </p>
                <ul className="level-features">
                  <li>In-depth study of languages, mathematics, science, and social science</li>
                  <li>Introduction to computer science and digital literacy</li>
                  <li>Focus on developing research and presentation skills</li>
                  <li>Specialized sports training and cultural activities</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="level-content">
                <h3>Secondary School (Classes 9-10)</h3>
                <p>
                  The secondary school curriculum prepares students for the CBSE Board Examination 
                  while also developing their higher-order thinking skills. The curriculum is designed 
                  to provide a balance between academic excellence and overall development.
                </p>
                <ul className="level-features">
                  <li>Comprehensive preparation for CBSE Board Examination</li>
                  <li>Advanced concepts in science, mathematics, and humanities</li>
                  <li>Career guidance and counseling</li>
                  <li>Leadership development through various co-curricular activities</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="level-content">
                <h3>Senior Secondary School (Classes 11-12)</h3>
                <p>
                  The senior secondary curriculum offers specialized streams in Science, Commerce, 
                  and Humanities, allowing students to focus on their areas of interest and future 
                  career aspirations. The curriculum is designed to prepare students for higher 
                  education and competitive examinations.
                </p>
                <ul className="level-features">
                  <li>Specialized streams: Science, Commerce, and Humanities</li>
                  <li>Advanced laboratory work and research projects</li>
                  <li>Preparation for competitive examinations</li>
                  <li>College and career readiness programs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="curriculum-link">
            <Link to="/academics/curriculum" className="btn btn-primary">View Detailed Curriculum</Link>
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="methodology-section">
        <div className="section-header">
          <h2>Our Teaching Methodology</h2>
          <div className="section-divider"></div>
        </div>
        <div className="methodology-container">
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-hands-on"></i>
            </div>
            <h3>Experiential Learning</h3>
            <p>
              We believe in learning by doing. Our experiential learning approach involves hands-on 
              activities, experiments, and real-world applications that make learning meaningful and 
              memorable.
            </p>
          </div>
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>Project-Based Learning</h3>
            <p>
              Students engage in in-depth exploration of real-world challenges through projects that 
              integrate multiple subjects and develop critical thinking, collaboration, and problem-solving 
              skills.
            </p>
          </div>
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <h3>Technology Integration</h3>
            <p>
              We integrate technology across the curriculum to enhance learning experiences, develop 
              digital literacy, and prepare students for the technology-driven future.
            </p>
          </div>
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Collaborative Learning</h3>
            <p>
              Students work together in groups to solve problems, complete tasks, and create projects, 
              developing teamwork, communication, and social skills in the process.
            </p>
          </div>
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Inquiry-Based Learning</h3>
            <p>
              We encourage students to ask questions, investigate, and discover answers on their own, 
              fostering curiosity, research skills, and a deeper understanding of concepts.
            </p>
          </div>
          <div className="methodology-card">
            <div className="methodology-icon">
              <i className="fas fa-user-cog"></i>
            </div>
            <h3>Personalized Learning</h3>
            <p>
              We recognize that each student has unique learning needs and styles. Our personalized 
              approach ensures that every student receives the support and challenges they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="faculty-section">
        <div className="section-header">
          <h2>Our Faculty</h2>
          <div className="section-divider"></div>
        </div>
        <div className="faculty-container">
          <div className="faculty-intro">
            <p>
              Excellence Academy takes pride in its team of highly qualified and dedicated teachers who 
              are passionate about education and committed to bringing out the best in every student. 
              Our faculty members are not just subject experts but also mentors who guide, inspire, and 
              nurture students' potential.
            </p>
          </div>
          <div className="faculty-stats">
            <div className="faculty-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Experienced Teachers</div>
            </div>
            <div className="faculty-stat">
              <div className="stat-number">80%</div>
              <div className="stat-label">With Postgraduate Degrees</div>
            </div>
            <div className="faculty-stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Average Experience</div>
            </div>
            <div className="faculty-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Trained in Modern Pedagogy</div>
            </div>
          </div>
          <div className="faculty-profiles">
            <div className="faculty-profile">
              <div className="faculty-image">
                <div className="placeholder-image">Faculty Photo</div>
              </div>
              <div className="faculty-info">
                <h3>Dr. Anita Sharma</h3>
                <p className="faculty-position">Head of Science Department</p>
                <p className="faculty-qualification">Ph.D. in Physics, 18 years of teaching experience</p>
              </div>
            </div>
            <div className="faculty-profile">
              <div className="faculty-image">
                <div className="placeholder-image">Faculty Photo</div>
              </div>
              <div className="faculty-info">
                <h3>Mr. Rahul Verma</h3>
                <p className="faculty-position">Head of Mathematics Department</p>
                <p className="faculty-qualification">M.Sc. in Mathematics, 15 years of teaching experience</p>
              </div>
            </div>
            <div className="faculty-profile">
              <div className="faculty-image">
                <div className="placeholder-image">Faculty Photo</div>
              </div>
              <div className="faculty-info">
                <h3>Mrs. Priya Gupta</h3>
                <p className="faculty-position">Head of Languages Department</p>
                <p className="faculty-qualification">M.A. in English Literature, 20 years of teaching experience</p>
              </div>
            </div>
          </div>
          <div className="faculty-link">
            <Link to="/academics/faculty" className="btn btn-primary">Meet Our Faculty</Link>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="section-header">
          <h2>Academic Departments</h2>
          <div className="section-divider"></div>
        </div>
        <div className="departments-container">
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>Science Department</h3>
            <p>
              Our Science Department focuses on developing scientific temper and inquiry skills through 
              hands-on experiments, projects, and research activities. The department is equipped with 
              state-of-the-art laboratories for Physics, Chemistry, and Biology.
            </p>
            <Link to="/academics/departments/science" className="btn btn-sm">Learn More</Link>
          </div>
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-calculator"></i>
            </div>
            <h3>Mathematics Department</h3>
            <p>
              The Mathematics Department aims to develop logical thinking, problem-solving skills, and 
              mathematical reasoning. Through innovative teaching methods and practical applications, 
              we make mathematics engaging and accessible to all students.
            </p>
            <Link to="/academics/departments/mathematics" className="btn btn-sm">Learn More</Link>
          </div>
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-language"></i>
            </div>
            <h3>Languages Department</h3>
            <p>
              Our Languages Department focuses on developing strong communication skills in English, 
              Hindi, and other languages. Through literature, creative writing, debates, and discussions, 
              students develop proficiency and appreciation for languages.
            </p>
            <Link to="/academics/departments/languages" className="btn btn-sm">Learn More</Link>
          </div>
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-globe-asia"></i>
            </div>
            <h3>Social Sciences Department</h3>
            <p>
              The Social Sciences Department provides students with a deep understanding of history, 
              geography, civics, and economics. Through field trips, projects, and discussions, students 
              develop a broader perspective on society and the world.
            </p>
            <Link to="/academics/departments/social-sciences" className="btn btn-sm">Learn More</Link>
          </div>
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Computer Science Department</h3>
            <p>
              Our Computer Science Department equips students with digital literacy, programming skills, 
              and computational thinking. With modern computer labs and experienced faculty, we prepare 
              students for the technology-driven future.
            </p>
            <Link to="/academics/departments/computer-science" className="btn btn-sm">Learn More</Link>
          </div>
          <div className="department-card">
            <div className="department-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Arts & Crafts Department</h3>
            <p>
              The Arts & Crafts Department nurtures creativity and artistic expression through various 
              forms of visual arts, crafts, and design. Students explore different mediums and techniques 
              to express their ideas and emotions.
            </p>
            <Link to="/academics/departments/arts-crafts" className="btn btn-sm">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Examination System Section */}
      <section className="examination-section">
        <div className="section-header">
          <h2>Examination System</h2>
          <div className="section-divider"></div>
        </div>
        <div className="examination-container">
          <div className="examination-content">
            <p>
              Excellence Academy follows a comprehensive assessment system that evaluates students' 
              academic progress, skills, and overall development. Our assessment approach is designed 
              to be continuous, comprehensive, and balanced, focusing on both scholastic and co-scholastic 
              areas.
            </p>
            <h3>Assessment Structure</h3>
            <div className="assessment-structure">
              <div className="assessment-type">
                <h4>Formative Assessment</h4>
                <ul>
                  <li>Class participation and activities</li>
                  <li>Homework and assignments</li>
                  <li>Projects and presentations</li>
                  <li>Quizzes and unit tests</li>
                </ul>
              </div>
              <div className="assessment-type">
                <h4>Summative Assessment</h4>
                <ul>
                  <li>Mid-term examinations</li>
                  <li>Term-end examinations</li>
                  <li>Practical examinations</li>
                  <li>Board examinations (for Classes 10 and 12)</li>
                </ul>
              </div>
            </div>
            <h3>Examination Schedule</h3>
            <table className="examination-table">
              <thead>
                <tr>
                  <th>Assessment</th>
                  <th>Classes</th>
                  <th>Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unit Tests</td>
                  <td>1-12</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Mid-Term Examination</td>
                  <td>1-12</td>
                  <td>September</td>
                </tr>
                <tr>
                  <td>Term-End Examination</td>
                  <td>1-12</td>
                  <td>March</td>
                </tr>
                <tr>
                  <td>Pre-Board Examination</td>
                  <td>10 & 12</td>
                  <td>December-January</td>
                </tr>
                <tr>
                  <td>Board Examination</td>
                  <td>10 & 12</td>
                  <td>February-March</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="examination-link">
            <Link to="/academics/examinations" className="btn btn-primary">View Examination Details</Link>
          </div>
        </div>
      </section>

      {/* Academic Achievements Section */}
      <section className="academic-achievements-section">
        <div className="section-header">
          <h2>Academic Achievements</h2>
          <div className="section-divider"></div>
        </div>
        <div className="academic-achievements-container">
          <div className="achievements-highlight">
            <div className="highlight-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="highlight-content">
              <h3>Board Examination Results</h3>
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
            <div className="achievement-card">
              <div className="achievement-year">2023</div>
              <h4>Class 12 Results</h4>
              <ul>
                <li>School average: 92.5%</li>
                <li>Science stream topper: 98.8%</li>
                <li>Commerce stream topper: 97.6%</li>
                <li>Humanities stream topper: 98.2%</li>
              </ul>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2023</div>
              <h4>Class 10 Results</h4>
              <ul>
                <li>School average: 93.2%</li>
                <li>School topper: 99.2%</li>
                <li>85% students scored above 90%</li>
                <li>100% students qualified for science stream</li>
              </ul>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2023</div>
              <h4>Competitive Examinations</h4>
              <ul>
                <li>25 students qualified for JEE Mains</li>
                <li>12 students qualified for NEET</li>
                <li>8 students selected for NTSE scholarship</li>
                <li>15 students qualified for Olympiads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Excellence Academy</h2>
          <p>Experience excellence in education and unlock your child's potential.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
