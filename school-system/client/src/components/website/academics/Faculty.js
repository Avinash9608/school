import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './Academics.css';
import './Faculty.css';

const Faculty = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Faculty Banner</div>
        <div className="banner-overlay">
          <h1>Our Faculty</h1>
          <p>Dedicated educators shaping the future</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="faculty-intro-section">
        <div className="section-header">
          <h2>Meet Our Educators</h2>
          <div className="section-divider"></div>
        </div>
        <div className="faculty-intro-container">
          <div className="faculty-intro-content">
            <p>
              At Excellence Academy, we take pride in our team of highly qualified and dedicated 
              teachers who are passionate about education and committed to bringing out the best 
              in every student. Our faculty members are not just subject experts but also mentors 
              who guide, inspire, and nurture students' potential.
            </p>
            <p>
              Our teachers bring a wealth of knowledge, experience, and innovative teaching 
              methodologies to the classroom, creating a dynamic and engaging learning environment. 
              They are committed to continuous professional development and stay updated with the 
              latest educational research and best practices.
            </p>
            <p>
              Beyond academic instruction, our faculty members serve as role models, demonstrating 
              values such as integrity, respect, and a love for learning. They build positive 
              relationships with students, creating a supportive and inclusive classroom environment 
              where every student feels valued and motivated to excel.
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
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-team-section">
        <div className="section-header">
          <h2>Academic Leadership</h2>
          <div className="section-divider"></div>
        </div>
        <div className="leadership-team-container">
          <div className="leader-card">
            <div className="leader-image">
              <div className="placeholder-image">Principal Photo</div>
            </div>
            <div className="leader-info">
              <h3>Dr. Sarah Johnson</h3>
              <p className="leader-position">Principal</p>
              <p className="leader-qualification">Ph.D. in Educational Leadership, 25+ years of experience</p>
              <p className="leader-description">
                Dr. Sarah Johnson brings her extensive experience in educational leadership to create 
                an environment where students thrive academically and personally. She is committed to 
                fostering a culture of excellence, innovation, and continuous improvement.
              </p>
              <Link to="/about/principal-message" className="btn btn-sm">Read Principal's Message</Link>
            </div>
          </div>
          <div className="leader-card">
            <div className="leader-image">
              <div className="placeholder-image">Vice Principal Photo</div>
            </div>
            <div className="leader-info">
              <h3>Dr. Rajesh Kumar</h3>
              <p className="leader-position">Vice Principal (Academics)</p>
              <p className="leader-qualification">Ph.D. in Education, 20+ years of experience</p>
              <p className="leader-description">
                Dr. Rajesh Kumar oversees the academic programs and curriculum development at Excellence 
                Academy. He works closely with department heads and teachers to ensure high standards 
                of teaching and learning across all grades.
              </p>
            </div>
          </div>
          <div className="leader-card">
            <div className="leader-image">
              <div className="placeholder-image">Vice Principal Photo</div>
            </div>
            <div className="leader-info">
              <h3>Mrs. Priya Sharma</h3>
              <p className="leader-position">Vice Principal (Administration)</p>
              <p className="leader-qualification">M.Ed., 18+ years of experience</p>
              <p className="leader-description">
                Mrs. Priya Sharma manages the administrative aspects of the school, including student 
                affairs, discipline, and day-to-day operations. She ensures a safe, orderly, and 
                supportive environment for teaching and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="department-heads-section">
        <div className="section-header">
          <h2>Department Heads</h2>
          <div className="section-divider"></div>
        </div>
        <div className="department-heads-container">
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Dr. Anita Sharma</h3>
              <p className="head-position">Head of Science Department</p>
              <p className="head-qualification">Ph.D. in Physics, 18 years of teaching experience</p>
              <p className="head-description">
                Dr. Anita Sharma leads the Science Department with a focus on inquiry-based learning 
                and hands-on experimentation. Under her leadership, the department has achieved 
                remarkable results in board examinations and science competitions.
              </p>
            </div>
          </div>
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Mr. Rahul Verma</h3>
              <p className="head-position">Head of Mathematics Department</p>
              <p className="head-qualification">M.Sc. in Mathematics, 15 years of teaching experience</p>
              <p className="head-description">
                Mr. Rahul Verma is known for making mathematics accessible and engaging for all students. 
                He has implemented innovative teaching methodologies that have significantly improved 
                student performance in mathematics.
              </p>
            </div>
          </div>
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Mrs. Priya Gupta</h3>
              <p className="head-position">Head of Languages Department</p>
              <p className="head-qualification">M.A. in English Literature, 20 years of teaching experience</p>
              <p className="head-description">
                Mrs. Priya Gupta leads the Languages Department with a passion for literature and 
                effective communication. She has developed a comprehensive language curriculum that 
                enhances students' reading, writing, and speaking skills.
              </p>
            </div>
          </div>
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Mr. Amit Singh</h3>
              <p className="head-position">Head of Social Sciences Department</p>
              <p className="head-qualification">M.A. in History, 16 years of teaching experience</p>
              <p className="head-description">
                Mr. Amit Singh brings history and social sciences to life through interactive teaching 
                methods and field trips. His department focuses on developing critical thinking and 
                analytical skills through the study of history, geography, and civics.
              </p>
            </div>
          </div>
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Ms. Neha Patel</h3>
              <p className="head-position">Head of Computer Science Department</p>
              <p className="head-qualification">M.Tech in Computer Science, 12 years of teaching experience</p>
              <p className="head-description">
                Ms. Neha Patel leads the Computer Science Department with a focus on developing digital 
                literacy, programming skills, and computational thinking. She has introduced innovative 
                courses in coding, robotics, and artificial intelligence.
              </p>
            </div>
          </div>
          <div className="department-head-card">
            <div className="head-image">
              <div className="placeholder-image">Department Head Photo</div>
            </div>
            <div className="head-info">
              <h3>Mr. Suresh Kumar</h3>
              <p className="head-position">Head of Physical Education Department</p>
              <p className="head-qualification">M.P.Ed., 14 years of teaching experience</p>
              <p className="head-description">
                Mr. Suresh Kumar leads the Physical Education Department with a focus on promoting 
                physical fitness, sportsmanship, and healthy lifestyle choices. Under his leadership, 
                the school has excelled in various sports competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Staff Section */}
      <section className="teaching-staff-section">
        <div className="section-header">
          <h2>Our Teaching Staff</h2>
          <div className="section-divider"></div>
        </div>
        <div className="teaching-staff-container">
          <div className="staff-intro">
            <p>
              Our teaching staff consists of experienced and dedicated educators who are experts in 
              their respective fields. They bring a wealth of knowledge, innovative teaching methodologies, 
              and a passion for education to the classroom.
            </p>
          </div>
          <div className="staff-departments">
            <div className="staff-department">
              <h3>Primary School Teachers</h3>
              <div className="teacher-grid">
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Ms. Anjali Sharma</h4>
                    <p className="teacher-position">Class Teacher - Grade 3</p>
                    <p className="teacher-qualification">B.Ed., 8 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mr. Ravi Kumar</h4>
                    <p className="teacher-position">Class Teacher - Grade 5</p>
                    <p className="teacher-qualification">B.Ed., 10 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mrs. Sunita Patel</h4>
                    <p className="teacher-position">Class Teacher - Grade 2</p>
                    <p className="teacher-qualification">B.Ed., 12 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Ms. Deepa Singh</h4>
                    <p className="teacher-position">Class Teacher - Grade 4</p>
                    <p className="teacher-qualification">B.Ed., 7 years of experience</p>
                  </div>
                </div>
              </div>
              <div className="department-link">
                <a href="#" className="btn btn-sm">View All Primary School Teachers</a>
              </div>
            </div>
            <div className="staff-department">
              <h3>Middle School Teachers</h3>
              <div className="teacher-grid">
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mr. Anil Verma</h4>
                    <p className="teacher-position">Mathematics Teacher</p>
                    <p className="teacher-qualification">M.Sc. in Mathematics, 10 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mrs. Kavita Sharma</h4>
                    <p className="teacher-position">Science Teacher</p>
                    <p className="teacher-qualification">M.Sc. in Biology, 9 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mr. Rajiv Singh</h4>
                    <p className="teacher-position">Social Science Teacher</p>
                    <p className="teacher-qualification">M.A. in History, 11 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Ms. Priya Mehta</h4>
                    <p className="teacher-position">English Teacher</p>
                    <p className="teacher-qualification">M.A. in English, 8 years of experience</p>
                  </div>
                </div>
              </div>
              <div className="department-link">
                <a href="#" className="btn btn-sm">View All Middle School Teachers</a>
              </div>
            </div>
            <div className="staff-department">
              <h3>Secondary School Teachers</h3>
              <div className="teacher-grid">
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Dr. Suresh Patel</h4>
                    <p className="teacher-position">Physics Teacher</p>
                    <p className="teacher-qualification">Ph.D. in Physics, 15 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mrs. Anita Gupta</h4>
                    <p className="teacher-position">Chemistry Teacher</p>
                    <p className="teacher-qualification">M.Sc. in Chemistry, 12 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Mr. Vikram Singh</h4>
                    <p className="teacher-position">Mathematics Teacher</p>
                    <p className="teacher-qualification">M.Sc. in Mathematics, 14 years of experience</p>
                  </div>
                </div>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <div className="placeholder-image">Teacher Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h4>Ms. Deepika Sharma</h4>
                    <p className="teacher-position">Biology Teacher</p>
                    <p className="teacher-qualification">M.Sc. in Biology, 10 years of experience</p>
                  </div>
                </div>
              </div>
              <div className="department-link">
                <a href="#" className="btn btn-sm">View All Secondary School Teachers</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Teachers Section */}
      <section className="specialist-teachers-section">
        <div className="section-header">
          <h2>Specialist Teachers</h2>
          <div className="section-divider"></div>
        </div>
        <div className="specialist-teachers-container">
          <div className="specialist-intro">
            <p>
              Our specialist teachers bring expertise in specific areas such as arts, music, sports, 
              and special education. They enrich the curriculum and provide students with opportunities 
              to explore and develop their talents and interests.
            </p>
          </div>
          <div className="specialist-grid">
            <div className="specialist-card">
              <div className="specialist-image">
                <div className="placeholder-image">Specialist Photo</div>
              </div>
              <div className="specialist-info">
                <h3>Mr. Rahul Mehta</h3>
                <p className="specialist-position">Music Teacher</p>
                <p className="specialist-qualification">M.A. in Music, 12 years of experience</p>
                <p className="specialist-description">
                  Mr. Rahul Mehta is a talented musician and dedicated teacher who inspires students 
                  to explore and appreciate various forms of music. He conducts the school choir and 
                  orchestra, which have won several competitions.
                </p>
              </div>
            </div>
            <div className="specialist-card">
              <div className="specialist-image">
                <div className="placeholder-image">Specialist Photo</div>
              </div>
              <div className="specialist-info">
                <h3>Ms. Shalini Kapoor</h3>
                <p className="specialist-position">Art Teacher</p>
                <p className="specialist-qualification">M.F.A., 10 years of experience</p>
                <p className="specialist-description">
                  Ms. Shalini Kapoor is a passionate artist and educator who nurtures creativity and 
                  artistic expression in students. Her students have won numerous awards in art 
                  competitions at the state and national levels.
                </p>
              </div>
            </div>
            <div className="specialist-card">
              <div className="specialist-image">
                <div className="placeholder-image">Specialist Photo</div>
              </div>
              <div className="specialist-info">
                <h3>Mr. Vikram Khanna</h3>
                <p className="specialist-position">Dance Teacher</p>
                <p className="specialist-qualification">Professional Dancer, 8 years of teaching experience</p>
                <p className="specialist-description">
                  Mr. Vikram Khanna is a professional dancer who brings his expertise and passion to 
                  the dance program at Excellence Academy. He teaches various dance forms and choreographs 
                  performances for school events.
                </p>
              </div>
            </div>
            <div className="specialist-card">
              <div className="specialist-image">
                <div className="placeholder-image">Specialist Photo</div>
              </div>
              <div className="specialist-info">
                <h3>Dr. Meera Singh</h3>
                <p className="specialist-position">Special Education Coordinator</p>
                <p className="specialist-qualification">Ph.D. in Special Education, 15 years of experience</p>
                <p className="specialist-description">
                  Dr. Meera Singh leads the special education program, ensuring that students with 
                  diverse learning needs receive appropriate support and accommodations. She works 
                  closely with teachers and parents to develop individualized education plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="support-staff-section">
        <div className="section-header">
          <h2>Support Staff</h2>
          <div className="section-divider"></div>
        </div>
        <div className="support-staff-container">
          <div className="support-intro">
            <p>
              Our support staff plays a crucial role in creating a conducive learning environment 
              and ensuring the smooth functioning of the school. They provide essential services 
              and support that contribute to the overall educational experience.
            </p>
          </div>
          <div className="support-categories">
            <div className="support-category">
              <div className="category-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Library Staff</h3>
              <ul className="staff-list">
                <li>Mrs. Anjali Sharma - Head Librarian (M.Lib., 15 years of experience)</li>
                <li>Mr. Rajesh Kumar - Assistant Librarian (B.Lib., 8 years of experience)</li>
                <li>Ms. Priya Singh - Library Assistant (B.Lib., 5 years of experience)</li>
              </ul>
            </div>
            <div className="support-category">
              <div className="category-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>IT Support Staff</h3>
              <ul className="staff-list">
                <li>Mr. Amit Verma - IT Manager (M.Tech., 12 years of experience)</li>
                <li>Ms. Neha Patel - System Administrator (B.Tech., 7 years of experience)</li>
                <li>Mr. Rahul Singh - IT Support Technician (Diploma in IT, 5 years of experience)</li>
              </ul>
            </div>
            <div className="support-category">
              <div className="category-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Medical Staff</h3>
              <ul className="staff-list">
                <li>Dr. Priya Sharma - School Doctor (MBBS, 10 years of experience)</li>
                <li>Mrs. Sunita Patel - School Nurse (B.Sc. Nursing, 8 years of experience)</li>
                <li>Ms. Deepa Singh - Assistant Nurse (Diploma in Nursing, 5 years of experience)</li>
              </ul>
            </div>
            <div className="support-category">
              <div className="category-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Counseling Staff</h3>
              <ul className="staff-list">
                <li>Ms. Anita Gupta - School Counselor (M.A. in Psychology, 12 years of experience)</li>
                <li>Mr. Rajiv Kumar - Career Counselor (M.A. in Counseling, 10 years of experience)</li>
                <li>Mrs. Kavita Sharma - Student Welfare Officer (M.S.W., 8 years of experience)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development Section */}
      <section className="professional-development-section">
        <div className="section-header">
          <h2>Professional Development</h2>
          <div className="section-divider"></div>
        </div>
        <div className="professional-development-container">
          <div className="development-content">
            <p>
              At Excellence Academy, we are committed to the continuous professional development of 
              our faculty and staff. We believe that investing in our educators enhances teaching 
              effectiveness and ultimately benefits our students.
            </p>
            <h3>Our Professional Development Initiatives</h3>
            <div className="initiatives-grid">
              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h4>In-house Training Programs</h4>
                <p>
                  Regular workshops and training sessions conducted by experts on various aspects of 
                  teaching and learning, including innovative pedagogies, classroom management, and 
                  assessment strategies.
                </p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Higher Education Support</h4>
                <p>
                  Support for teachers pursuing higher education and advanced degrees through 
                  scholarships, study leave, and flexible work arrangements.
                </p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>Conference Participation</h4>
                <p>
                  Opportunities for teachers to attend national and international conferences, 
                  seminars, and workshops to stay updated with the latest developments in education.
                </p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Collaborative Learning</h4>
                <p>
                  Professional learning communities where teachers collaborate, share best practices, 
                  and engage in peer observation and feedback to enhance teaching effectiveness.
                </p>
              </div>
            </div>
            <h3>Recognition and Rewards</h3>
            <p>
              We recognize and reward excellence in teaching through various initiatives:
            </p>
            <ul className="recognition-list">
              <li>Teacher of the Year Award</li>
              <li>Innovation in Teaching Award</li>
              <li>Long Service Recognition</li>
              <li>Research and Publication Support</li>
              <li>Performance-based Incentives</li>
            </ul>
          </div>
          <div className="development-image">
            <div className="placeholder-image">Professional Development Workshop</div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="join-team-section">
        <div className="join-team-container">
          <div className="join-team-content">
            <h2>Join Our Team</h2>
            <p>
              We are always looking for passionate and dedicated educators to join our team. If you 
              are committed to excellence in education and want to make a difference in the lives of 
              students, we invite you to explore career opportunities at Excellence Academy.
            </p>
            <h3>Why Join Excellence Academy?</h3>
            <ul className="benefits-list">
              <li>Supportive and collaborative work environment</li>
              <li>Opportunities for professional growth and development</li>
              <li>Competitive compensation and benefits</li>
              <li>State-of-the-art facilities and resources</li>
              <li>Opportunity to make a meaningful impact on students' lives</li>
            </ul>
            <div className="join-team-buttons">
              <a href="#" className="btn btn-primary">View Current Openings</a>
              <Link to="/contact" className="btn btn-secondary">Contact HR Department</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="faculty-testimonials-section">
        <div className="section-header">
          <h2>Faculty Voices</h2>
          <div className="section-divider"></div>
        </div>
        <div className="faculty-testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "Teaching at Excellence Academy has been a rewarding experience. The supportive 
                administration, collaborative colleagues, and eager students create an ideal 
                environment for teaching and learning. I appreciate the opportunities for professional 
                growth and the freedom to innovate in my classroom."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mrs. Anita Sharma</h4>
              <p>Science Teacher, 10 years at Excellence Academy</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "What I love most about teaching at Excellence Academy is the emphasis on holistic 
                education. We are encouraged to go beyond textbooks and help students develop not 
                just academically but also socially, emotionally, and ethically. The professional 
                development opportunities have helped me grow as an educator."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mr. Rajesh Kumar</h4>
              <p>Mathematics Teacher, 8 years at Excellence Academy</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "As a new teacher, I found the mentoring program at Excellence Academy incredibly 
                helpful. Experienced teachers guided me through my first year, sharing resources, 
                strategies, and advice. The collaborative culture and supportive leadership have 
                made this an ideal place to start my teaching career."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Ms. Priya Patel</h4>
              <p>English Teacher, 2 years at Excellence Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Meet Our Faculty in Person</h2>
          <p>Visit Excellence Academy to interact with our dedicated educators.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
