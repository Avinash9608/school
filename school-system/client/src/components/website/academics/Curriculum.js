import React from "react";
import { Link } from "react-router-dom";
import "../Website.css";
import "./Academics.css";

const Curriculum = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Curriculum Banner</div>
        <div className="banner-overlay">
          <h1>Our Curriculum</h1>
          <p>Comprehensive education for holistic development</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="curriculum-intro-section">
        <div className="section-header">
          <h2>Curriculum Overview</h2>
          <div className="section-divider"></div>
        </div>
        <div className="curriculum-intro-container">
          <div className="curriculum-intro-content">
            <p>
              At Excellence Academy, we follow the Central Board of Secondary
              Education (CBSE) curriculum, which is enhanced with additional
              resources and activities to provide a well-rounded education. Our
              curriculum is designed to foster critical thinking, creativity,
              and a love for learning.
            </p>
            <p>
              We believe that education should go beyond textbooks and
              examinations. Our comprehensive curriculum integrates academic
              learning with co-curricular activities, life skills education, and
              value-based learning to ensure the holistic development of each
              student.
            </p>
            <p>
              Our curriculum is regularly updated to incorporate the latest
              educational research and best practices. We focus on developing
              not just knowledge but also skills, attitudes, and values that
              prepare students for success in the 21st century.
            </p>
          </div>
          <div className="curriculum-intro-image">
            <div className="placeholder-image">Students in Classroom</div>
          </div>
        </div>
      </section>

      {/* Curriculum Philosophy Section */}
      <section className="curriculum-philosophy-section">
        <div className="section-header">
          <h2>Our Educational Philosophy</h2>
          <div className="section-divider"></div>
        </div>
        <div className="curriculum-philosophy-container">
          <div className="philosophy-principles">
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Student-Centered Learning</h3>
              <p>
                We place students at the center of the learning process,
                recognizing and addressing their unique abilities, interests,
                and learning styles. Our teaching methodologies are designed to
                engage students actively in the learning process.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Balanced Education</h3>
              <p>
                We provide a balanced education that develops intellectual,
                physical, emotional, and social aspects of a student's
                personality. Our curriculum includes academics, sports, arts,
                and life skills education.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Inclusive Approach</h3>
              <p>
                We embrace diversity and create an inclusive learning
                environment where every student feels valued and supported. Our
                curriculum and teaching methodologies are designed to address
                the diverse learning needs of all students.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Global Perspective</h3>
              <p>
                We integrate a global perspective into our curriculum to prepare
                students for the interconnected world. Students learn about
                different cultures, global issues, and develop the skills needed
                to be responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <section className="curriculum-structure-section">
        <div className="section-header">
          <h2>Curriculum Structure</h2>
          <div className="section-divider"></div>
        </div>
        <div className="curriculum-structure-container">
          <div className="structure-intro">
            <p>
              Our curriculum is structured to provide a progressive learning
              experience from primary to senior secondary levels. Each level
              builds upon the foundation laid in the previous level, ensuring a
              seamless transition and continuous growth.
            </p>
          </div>
          <div className="curriculum-levels">
            <div className="curriculum-level">
              <div className="level-header">
                <div className="level-icon">
                  <i className="fas fa-child"></i>
                </div>
                <h3>Primary School (Classes 1-5)</h3>
              </div>
              <div className="level-content">
                <p>
                  The primary school curriculum focuses on building a strong
                  foundation in core subjects while nurturing curiosity and
                  creativity. Through activity-based learning, students develop
                  fundamental skills in language, mathematics, science, and
                  social studies.
                </p>
                <h4>Core Subjects</h4>
                <ul className="subject-list">
                  <li>English Language</li>
                  <li>Hindi Language</li>
                  <li>Mathematics</li>
                  <li>Environmental Studies</li>
                  <li>General Knowledge</li>
                </ul>
                <h4>Co-Scholastic Areas</h4>
                <ul className="subject-list">
                  <li>Art & Craft</li>
                  <li>Music</li>
                  <li>Dance</li>
                  <li>Physical Education</li>
                  <li>Yoga</li>
                  <li>Value Education</li>
                </ul>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  <li>Activity-based learning</li>
                  <li>Thematic approach</li>
                  <li>Integration of subjects</li>
                  <li>Focus on language development and reading skills</li>
                  <li>Introduction to digital literacy</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-header">
                <div className="level-icon">
                  <i className="fas fa-book-reader"></i>
                </div>
                <h3>Middle School (Classes 6-8)</h3>
              </div>
              <div className="level-content">
                <p>
                  The middle school curriculum builds upon the foundation laid
                  in primary school and introduces more advanced concepts.
                  Students are encouraged to develop critical thinking and
                  analytical skills through project-based learning and research
                  activities.
                </p>
                <h4>Core Subjects</h4>
                <ul className="subject-list">
                  <li>English Language & Literature</li>
                  <li>Hindi Language & Literature</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Science</li>
                  <li>Third Language (Sanskrit/French/German)</li>
                </ul>
                <h4>Co-Scholastic Areas</h4>
                <ul className="subject-list">
                  <li>Art Education</li>
                  <li>Work Education</li>
                  <li>Health & Physical Education</li>
                  <li>Life Skills Education</li>
                  <li>Value Education</li>
                </ul>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  <li>Subject-specific approach</li>
                  <li>Introduction to specialized subjects</li>
                  <li>Project-based learning</li>
                  <li>Research and presentation skills</li>
                  <li>Advanced computer education</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-header">
                <div className="level-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Secondary School (Classes 9-10)</h3>
              </div>
              <div className="level-content">
                <p>
                  The secondary school curriculum prepares students for the CBSE
                  Board Examination while also developing their higher-order
                  thinking skills. The curriculum is designed to provide a
                  balance between academic excellence and overall development.
                </p>
                <h4>Core Subjects</h4>
                <ul className="subject-list">
                  <li>English Language & Literature</li>
                  <li>Hindi Course A/B</li>
                  <li>Mathematics</li>
                  <li>Science (Physics, Chemistry, Biology)</li>
                  <li>
                    Social Science (History, Geography, Political Science,
                    Economics)
                  </li>
                </ul>
                <h4>Additional Subjects (Optional)</h4>
                <ul className="subject-list">
                  <li>Information Technology</li>
                  <li>Artificial Intelligence</li>
                  <li>Sanskrit</li>
                  <li>French/German</li>
                </ul>
                <h4>Co-Scholastic Areas</h4>
                <ul className="subject-list">
                  <li>Art Education</li>
                  <li>Health & Physical Education</li>
                  <li>Work Education</li>
                  <li>Life Skills Education</li>
                </ul>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  <li>Comprehensive preparation for Board Examination</li>
                  <li>Internal assessments and periodic tests</li>
                  <li>Practical work and laboratory activities</li>
                  <li>Career guidance and counseling</li>
                  <li>Leadership development</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-level">
              <div className="level-header">
                <div className="level-icon">
                  <i className="fas fa-university"></i>
                </div>
                <h3>Senior Secondary School (Classes 11-12)</h3>
              </div>
              <div className="level-content">
                <p>
                  The senior secondary curriculum offers specialized streams in
                  Science, Commerce, and Humanities, allowing students to focus
                  on their areas of interest and future career aspirations. The
                  curriculum is designed to prepare students for higher
                  education and competitive examinations.
                </p>
                <h4>Science Stream</h4>
                <ul className="subject-list">
                  <li>English Core</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Mathematics/Biology</li>
                  <li>
                    Computer Science/Physical Education/Economics (Optional)
                  </li>
                </ul>
                <h4>Commerce Stream</h4>
                <ul className="subject-list">
                  <li>English Core</li>
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics/Informatics Practices (Optional)</li>
                </ul>
                <h4>Humanities Stream</h4>
                <ul className="subject-list">
                  <li>English Core</li>
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Geography/Economics</li>
                  <li>Psychology/Sociology/Physical Education (Optional)</li>
                </ul>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  <li>Specialized subject combinations</li>
                  <li>Advanced laboratory work and research projects</li>
                  <li>Preparation for competitive examinations</li>
                  <li>Career counseling and guidance</li>
                  <li>College readiness programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="teaching-methodology-section">
        <div className="section-header">
          <h2>Teaching Methodology</h2>
          <div className="section-divider"></div>
        </div>
        <div className="teaching-methodology-container">
          <div className="methodology-intro">
            <p>
              At Excellence Academy, we employ innovative and effective teaching
              methodologies that make learning engaging, meaningful, and
              enjoyable. Our teachers use a blend of traditional and modern
              approaches to cater to different learning styles and ensure
              optimal learning outcomes.
            </p>
          </div>
          <div className="methodology-grid">
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-hands-on"></i>
              </div>
              <h3>Experiential Learning</h3>
              <p>
                We believe in learning by doing. Our experiential learning
                approach involves hands-on activities, experiments, and
                real-world applications that make learning meaningful and
                memorable.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Project-Based Learning</h3>
              <p>
                Students engage in in-depth exploration of real-world challenges
                through projects that integrate multiple subjects and develop
                critical thinking, collaboration, and problem-solving skills.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Technology Integration</h3>
              <p>
                We integrate technology across the curriculum to enhance
                learning experiences, develop digital literacy, and prepare
                students for the technology-driven future.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Learning</h3>
              <p>
                Students work together in groups to solve problems, complete
                tasks, and create projects, developing teamwork, communication,
                and social skills in the process.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Inquiry-Based Learning</h3>
              <p>
                We encourage students to ask questions, investigate, and
                discover answers on their own, fostering curiosity, research
                skills, and a deeper understanding of concepts.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">
                <i className="fas fa-user-cog"></i>
              </div>
              <h3>Personalized Learning</h3>
              <p>
                We recognize that each student has unique learning needs and
                styles. Our personalized approach ensures that every student
                receives the support and challenges they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment System Section */}
      <section className="assessment-system-section">
        <div className="section-header">
          <h2>Assessment System</h2>
          <div className="section-divider"></div>
        </div>
        <div className="assessment-system-container">
          <div className="assessment-intro">
            <p>
              Our assessment system is designed to be continuous, comprehensive,
              and balanced, focusing on both scholastic and co-scholastic areas.
              We believe that assessment should not just measure learning but
              also enhance it.
            </p>
          </div>
          <div className="assessment-types">
            <div className="assessment-type">
              <div className="assessment-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3>Formative Assessment</h3>
              <p>
                Formative assessments are conducted throughout the learning
                process to monitor student progress and provide timely feedback.
                These include:
              </p>
              <ul className="assessment-list">
                <li>Class participation and activities</li>
                <li>Homework and assignments</li>
                <li>Projects and presentations</li>
                <li>Quizzes and unit tests</li>
                <li>Oral assessments</li>
              </ul>
            </div>
            <div className="assessment-type">
              <div className="assessment-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Summative Assessment</h3>
              <p>
                Summative assessments are conducted at the end of a learning
                unit, term, or academic year to evaluate student achievement.
                These include:
              </p>
              <ul className="assessment-list">
                <li>Mid-term examinations</li>
                <li>Term-end examinations</li>
                <li>Practical examinations</li>
                <li>Board examinations (for Classes 10 and 12)</li>
              </ul>
            </div>
          </div>
          <div className="assessment-features">
            <h3>Key Features of Our Assessment System</h3>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h4>Continuous Evaluation</h4>
                <p>
                  Regular assessments throughout the academic year to monitor
                  progress and provide timely feedback.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h4>Comprehensive Assessment</h4>
                <p>
                  Assessment of both scholastic and co-scholastic areas to
                  ensure holistic development.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Progress Tracking</h4>
                <p>
                  Detailed progress reports and analytics to track student
                  growth and identify areas for improvement.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Constructive Feedback</h4>
                <p>
                  Specific and actionable feedback to help students understand
                  their strengths and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="special-programs-section">
        <div className="section-header">
          <h2>Special Programs</h2>
          <div className="section-divider"></div>
        </div>
        <div className="special-programs-container">
          <div className="programs-intro">
            <p>
              In addition to the regular curriculum, we offer several special
              programs to enrich the learning experience and cater to the
              diverse interests and talents of our students.
            </p>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>STEM Innovation Program</h3>
              <p>
                A specialized program that integrates Science, Technology,
                Engineering, and Mathematics through hands-on projects,
                robotics, coding, and design thinking.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3>Global Exchange Program</h3>
              <p>
                Opportunities for cultural exchange and global learning through
                partnerships with schools around the world, virtual exchanges,
                and international trips.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Arts & Culture Program</h3>
              <p>
                A comprehensive program that nurtures creativity and artistic
                expression through visual arts, music, dance, drama, and
                cultural studies.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Environmental Education Program</h3>
              <p>
                A program that promotes environmental awareness, sustainability,
                and conservation through projects, field trips, and community
                initiatives.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Life Skills & Wellness Program</h3>
              <p>
                A program that focuses on developing essential life skills,
                emotional intelligence, mental health awareness, and physical
                wellness.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Community Service Program</h3>
              <p>
                Opportunities for students to engage in meaningful community
                service, develop empathy, and contribute to positive social
                change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Involvement Section */}
      <section className="parent-involvement-section">
        <div className="section-header">
          <h2>Parent Involvement</h2>
          <div className="section-divider"></div>
        </div>
        <div className="parent-involvement-container">
          <div className="involvement-content">
            <p>
              We believe that parents are essential partners in the educational
              journey of their children. We encourage active parent involvement
              and provide various opportunities for parents to engage with the
              school and support their child's learning.
            </p>
            <h3>Ways Parents Can Get Involved</h3>
            <div className="involvement-ways">
              <div className="involvement-way">
                <div className="way-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Parent-Teacher Meetings</h4>
                <p>
                  Regular meetings to discuss student progress, address
                  concerns, and collaborate on strategies to support student
                  learning.
                </p>
              </div>
              <div className="involvement-way">
                <div className="way-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Parent-Teacher Association (PTA)</h4>
                <p>
                  Join the PTA to contribute to school development, organize
                  events, and foster a strong school community.
                </p>
              </div>
              <div className="involvement-way">
                <div className="way-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4>School Events</h4>
                <p>
                  Participate in school events, celebrations, sports days,
                  cultural programs, and exhibitions.
                </p>
              </div>
              <div className="involvement-way">
                <div className="way-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h4>Volunteer Opportunities</h4>
                <p>
                  Volunteer as a guest speaker, mentor, or resource person to
                  share expertise and experiences with students.
                </p>
              </div>
            </div>
            <h3>Parent Resources</h3>
            <p>
              We provide various resources to help parents support their child's
              learning at home:
            </p>
            <ul className="resources-list">
              <li>
                Parent Handbook with guidelines and information about school
                policies and procedures
              </li>
              <li>
                Parent Portal for accessing student records, attendance, and
                academic progress
              </li>
              <li>
                Parent Workshops on various topics related to parenting and
                education
              </li>
              <li>
                Regular newsletters and updates about school activities and
                events
              </li>
              <li>
                Curriculum guides and resources to help parents understand what
                their child is learning
              </li>
            </ul>
          </div>
          <div className="involvement-image">
            <div className="placeholder-image">Parent-Teacher Meeting</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="curriculum-testimonials-section">
        <div className="section-header">
          <h2>What Parents & Students Say</h2>
          <div className="section-divider"></div>
        </div>
        <div className="curriculum-testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "The curriculum at Excellence Academy is comprehensive and
                well-balanced. My daughter not only excels academically but has
                also developed a love for learning and exploring new ideas. The
                project-based approach has helped her develop critical thinking
                and problem-solving skills."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mrs. Priya Sharma</h4>
              <p>Parent of Ananya Sharma, Class 8</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "I appreciate how the curriculum integrates technology and
                real-world applications. My son has become more curious and
                engaged in his studies. The teachers make learning fun and
                relevant, which has made a significant difference in his
                attitude towards school."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Mr. Rajesh Patel</h4>
              <p>Parent of Arjun Patel, Class 5</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                "As a student, I find the curriculum challenging yet
                interesting. The project-based learning approach allows me to
                explore topics in depth and apply what I learn. The teachers are
                supportive and always ready to help when I have questions or
                face difficulties."
              </p>
            </div>
            <div className="testimonial-author">
              <h4>Rahul Singh</h4>
              <p>Student, Class 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience Our Curriculum</h2>
          <p>
            Join Excellence Academy and embark on a journey of discovery and
            growth.
          </p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">
              Apply Now
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
