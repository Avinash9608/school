import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './Academics.css';
import './Departments.css';

const Departments = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Departments Banner</div>
        <div className="banner-overlay">
          <h1>Academic Departments</h1>
          <p>Excellence in specialized education</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="departments-intro-section">
        <div className="section-header">
          <h2>Our Academic Departments</h2>
          <div className="section-divider"></div>
        </div>
        <div className="departments-intro-container">
          <div className="departments-intro-content">
            <p>
              Excellence Academy is organized into specialized academic departments, each focused 
              on providing high-quality education in specific subject areas. Our departments are 
              led by experienced educators who are experts in their fields and passionate about 
              teaching.
            </p>
            <p>
              Each department develops and implements a comprehensive curriculum that aligns with 
              national educational standards while incorporating innovative teaching methodologies 
              and resources. The departments work collaboratively to ensure an integrated approach 
              to education that helps students make connections across different subjects.
            </p>
            <p>
              Our academic departments are equipped with modern facilities, resources, and 
              technology to enhance the teaching and learning experience. From well-equipped 
              laboratories to specialized learning spaces, we provide the infrastructure needed 
              for effective education in each subject area.
            </p>
          </div>
          <div className="departments-overview">
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Science</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Mathematics</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>Languages</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Social Sciences</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Computer Science</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Arts & Crafts</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Performing Arts</h3>
            </div>
            <div className="department-icon-card">
              <div className="department-icon">
                <i className="fas fa-running"></i>
              </div>
              <h3>Physical Education</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Science Department Section */}
      <section className="department-section science-department">
        <div className="department-container">
          <div className="department-header">
            <div className="department-icon large">
              <i className="fas fa-flask"></i>
            </div>
            <h2>Science Department</h2>
          </div>
          <div className="department-content">
            <div className="department-description">
              <p>
                The Science Department at Excellence Academy is dedicated to fostering scientific 
                inquiry, critical thinking, and a deep understanding of the natural world. Our 
                comprehensive science curriculum covers Physics, Chemistry, and Biology, providing 
                students with a strong foundation in scientific principles and practices.
              </p>
              <p>
                Our approach to science education emphasizes hands-on learning through laboratory 
                experiments, field trips, and research projects. Students are encouraged to ask 
                questions, formulate hypotheses, conduct experiments, analyze data, and draw 
                conclusions, developing essential scientific skills and attitudes.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Well-equipped laboratories for Physics, Chemistry, and Biology</li>
                <li>Inquiry-based learning approach</li>
                <li>Integration of technology in science education</li>
                <li>Science fairs and exhibitions</li>
                <li>Participation in science competitions and Olympiads</li>
                <li>Field trips and nature studies</li>
                <li>Guest lectures by scientists and researchers</li>
              </ul>
              <h3>Curriculum Highlights</h3>
              <div className="curriculum-highlights">
                <div className="highlight-card">
                  <h4>Primary Level (Classes 1-5)</h4>
                  <ul>
                    <li>Introduction to basic scientific concepts</li>
                    <li>Nature studies and environmental awareness</li>
                    <li>Simple experiments and observations</li>
                    <li>Science projects and models</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Middle Level (Classes 6-8)</h4>
                  <ul>
                    <li>Integrated science curriculum</li>
                    <li>Introduction to Physics, Chemistry, and Biology</li>
                    <li>Laboratory experiments and investigations</li>
                    <li>Science projects and presentations</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Secondary Level (Classes 9-10)</h4>
                  <ul>
                    <li>Specialized study of Physics, Chemistry, and Biology</li>
                    <li>Advanced laboratory work</li>
                    <li>Preparation for board examinations</li>
                    <li>Research projects and scientific writing</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Senior Secondary Level (Classes 11-12)</h4>
                  <ul>
                    <li>In-depth study of Physics, Chemistry, and Biology</li>
                    <li>Advanced laboratory experiments</li>
                    <li>Preparation for competitive examinations</li>
                    <li>Research projects and scientific papers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="department-images">
              <div className="department-image">
                <div className="placeholder-image">Science Lab</div>
                <p className="image-caption">State-of-the-art Science Laboratory</p>
              </div>
              <div className="department-image">
                <div className="placeholder-image">Science Class</div>
                <p className="image-caption">Students engaged in a science experiment</p>
              </div>
            </div>
          </div>
          <div className="department-faculty">
            <h3>Faculty Members</h3>
            <div className="faculty-grid">
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Dr. Anita Sharma</h4>
                  <p className="faculty-position">Head of Department</p>
                  <p className="faculty-qualification">Ph.D. in Physics, 18 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Dr. Suresh Patel</h4>
                  <p className="faculty-position">Physics Teacher</p>
                  <p className="faculty-qualification">Ph.D. in Physics, 15 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mrs. Anita Gupta</h4>
                  <p className="faculty-position">Chemistry Teacher</p>
                  <p className="faculty-qualification">M.Sc. in Chemistry, 12 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Ms. Deepika Sharma</h4>
                  <p className="faculty-position">Biology Teacher</p>
                  <p className="faculty-qualification">M.Sc. in Biology, 10 years of experience</p>
                </div>
              </div>
            </div>
            <div className="faculty-link">
              <Link to="/academics/faculty" className="btn btn-primary">View All Faculty Members</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematics Department Section */}
      <section className="department-section mathematics-department">
        <div className="department-container">
          <div className="department-header">
            <div className="department-icon large">
              <i className="fas fa-calculator"></i>
            </div>
            <h2>Mathematics Department</h2>
          </div>
          <div className="department-content">
            <div className="department-description">
              <p>
                The Mathematics Department at Excellence Academy is committed to developing students' 
                mathematical thinking, problem-solving skills, and appreciation for the beauty and 
                utility of mathematics. Our curriculum is designed to build a strong foundation in 
                mathematical concepts and skills while fostering logical reasoning and analytical thinking.
              </p>
              <p>
                We believe that mathematics is not just about numbers and formulas but about patterns, 
                relationships, and problem-solving. Our teaching approach makes mathematics accessible 
                and engaging for all students, regardless of their natural aptitude for the subject.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Mathematics Laboratory with manipulatives and models</li>
                <li>Problem-based learning approach</li>
                <li>Integration of technology in mathematics education</li>
                <li>Mathematics clubs and competitions</li>
                <li>Participation in Mathematics Olympiads</li>
                <li>Remedial support for struggling students</li>
                <li>Advanced mathematics for gifted students</li>
              </ul>
              <h3>Curriculum Highlights</h3>
              <div className="curriculum-highlights">
                <div className="highlight-card">
                  <h4>Primary Level (Classes 1-5)</h4>
                  <ul>
                    <li>Number sense and operations</li>
                    <li>Geometry and spatial understanding</li>
                    <li>Measurement and data handling</li>
                    <li>Mathematical games and puzzles</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Middle Level (Classes 6-8)</h4>
                  <ul>
                    <li>Algebra and algebraic thinking</li>
                    <li>Geometry and measurement</li>
                    <li>Data analysis and probability</li>
                    <li>Mathematical modeling and applications</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Secondary Level (Classes 9-10)</h4>
                  <ul>
                    <li>Advanced algebra and functions</li>
                    <li>Coordinate geometry</li>
                    <li>Trigonometry</li>
                    <li>Statistics and probability</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Senior Secondary Level (Classes 11-12)</h4>
                  <ul>
                    <li>Calculus</li>
                    <li>Vectors and 3D geometry</li>
                    <li>Linear algebra</li>
                    <li>Probability and statistics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="department-images">
              <div className="department-image">
                <div className="placeholder-image">Math Lab</div>
                <p className="image-caption">Mathematics Laboratory</p>
              </div>
              <div className="department-image">
                <div className="placeholder-image">Math Class</div>
                <p className="image-caption">Students engaged in mathematical problem-solving</p>
              </div>
            </div>
          </div>
          <div className="department-faculty">
            <h3>Faculty Members</h3>
            <div className="faculty-grid">
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mr. Rahul Verma</h4>
                  <p className="faculty-position">Head of Department</p>
                  <p className="faculty-qualification">M.Sc. in Mathematics, 15 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mr. Vikram Singh</h4>
                  <p className="faculty-position">Mathematics Teacher</p>
                  <p className="faculty-qualification">M.Sc. in Mathematics, 14 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mrs. Sunita Patel</h4>
                  <p className="faculty-position">Mathematics Teacher</p>
                  <p className="faculty-qualification">M.Sc. in Mathematics, 10 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mr. Anil Verma</h4>
                  <p className="faculty-position">Mathematics Teacher</p>
                  <p className="faculty-qualification">M.Sc. in Mathematics, 8 years of experience</p>
                </div>
              </div>
            </div>
            <div className="faculty-link">
              <Link to="/academics/faculty" className="btn btn-primary">View All Faculty Members</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Department Section */}
      <section className="department-section languages-department">
        <div className="department-container">
          <div className="department-header">
            <div className="department-icon large">
              <i className="fas fa-language"></i>
            </div>
            <h2>Languages Department</h2>
          </div>
          <div className="department-content">
            <div className="department-description">
              <p>
                The Languages Department at Excellence Academy is dedicated to developing students' 
                communication skills, literary appreciation, and cultural understanding. Our 
                comprehensive language curriculum covers English, Hindi, and other languages, 
                providing students with the linguistic tools they need for academic success and 
                effective communication.
              </p>
              <p>
                We believe that language learning goes beyond grammar and vocabulary to include 
                literature, culture, and communication skills. Our teaching approach integrates 
                reading, writing, speaking, and listening skills, creating well-rounded language 
                learners who can express themselves effectively in multiple contexts.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Language Laboratory with audio-visual resources</li>
                <li>Literature circles and book clubs</li>
                <li>Creative writing workshops</li>
                <li>Debates, elocution, and public speaking</li>
                <li>Language and literary festivals</li>
                <li>School magazine and publications</li>
                <li>Language exchange programs</li>
              </ul>
              <h3>Curriculum Highlights</h3>
              <div className="curriculum-highlights">
                <div className="highlight-card">
                  <h4>Primary Level (Classes 1-5)</h4>
                  <ul>
                    <li>Phonics and reading skills</li>
                    <li>Basic grammar and vocabulary</li>
                    <li>Creative writing and storytelling</li>
                    <li>Oral communication skills</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Middle Level (Classes 6-8)</h4>
                  <ul>
                    <li>Advanced grammar and vocabulary</li>
                    <li>Literature appreciation</li>
                    <li>Creative and academic writing</li>
                    <li>Public speaking and debate</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Secondary Level (Classes 9-10)</h4>
                  <ul>
                    <li>Comprehensive language study</li>
                    <li>Literary analysis and criticism</li>
                    <li>Advanced writing skills</li>
                    <li>Media literacy and communication</li>
                  </ul>
                </div>
                <div className="highlight-card">
                  <h4>Senior Secondary Level (Classes 11-12)</h4>
                  <ul>
                    <li>Advanced literature studies</li>
                    <li>Critical analysis and interpretation</li>
                    <li>Academic and creative writing</li>
                    <li>Research and presentation skills</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="department-images">
              <div className="department-image">
                <div className="placeholder-image">Language Lab</div>
                <p className="image-caption">Language Laboratory</p>
              </div>
              <div className="department-image">
                <div className="placeholder-image">Language Class</div>
                <p className="image-caption">Students engaged in a literature discussion</p>
              </div>
            </div>
          </div>
          <div className="department-faculty">
            <h3>Faculty Members</h3>
            <div className="faculty-grid">
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mrs. Priya Gupta</h4>
                  <p className="faculty-position">Head of Department</p>
                  <p className="faculty-qualification">M.A. in English Literature, 20 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mr. Rajiv Kumar</h4>
                  <p className="faculty-position">English Teacher</p>
                  <p className="faculty-qualification">M.A. in English, 12 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Mrs. Sunita Sharma</h4>
                  <p className="faculty-position">Hindi Teacher</p>
                  <p className="faculty-qualification">M.A. in Hindi, 15 years of experience</p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <div className="placeholder-image">Faculty Photo</div>
                </div>
                <div className="faculty-info">
                  <h4>Ms. Anjali Patel</h4>
                  <p className="faculty-position">Sanskrit Teacher</p>
                  <p className="faculty-qualification">M.A. in Sanskrit, 8 years of experience</p>
                </div>
              </div>
            </div>
            <div className="faculty-link">
              <Link to="/academics/faculty" className="btn btn-primary">View All Faculty Members</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Departments Section */}
      <section className="other-departments-section">
        <div className="section-header">
          <h2>Other Academic Departments</h2>
          <div className="section-divider"></div>
        </div>
        <div className="other-departments-container">
          <div className="department-card">
            <div className="department-card-header">
              <div className="department-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Social Sciences Department</h3>
            </div>
            <div className="department-card-content">
              <p>
                The Social Sciences Department offers a comprehensive curriculum in History, 
                Geography, Political Science, and Economics. Through the study of social sciences, 
                students develop a deeper understanding of human societies, cultures, and systems, 
                as well as critical thinking and analytical skills.
              </p>
              <Link to="/academics/departments/social-sciences" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
          <div className="department-card">
            <div className="department-card-header">
              <div className="department-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Computer Science Department</h3>
            </div>
            <div className="department-card-content">
              <p>
                The Computer Science Department equips students with digital literacy, programming 
                skills, and computational thinking. With modern computer labs and experienced faculty, 
                we prepare students for the technology-driven future through courses in coding, 
                robotics, and artificial intelligence.
              </p>
              <Link to="/academics/departments/computer-science" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
          <div className="department-card">
            <div className="department-card-header">
              <div className="department-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Arts & Crafts Department</h3>
            </div>
            <div className="department-card-content">
              <p>
                The Arts & Crafts Department nurtures creativity and artistic expression through 
                various forms of visual arts, crafts, and design. Students explore different mediums 
                and techniques to express their ideas and emotions, developing their aesthetic 
                sensibility and creative skills.
              </p>
              <Link to="/academics/departments/arts-crafts" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
          <div className="department-card">
            <div className="department-card-header">
              <div className="department-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Performing Arts Department</h3>
            </div>
            <div className="department-card-content">
              <p>
                The Performing Arts Department offers programs in music, dance, and drama, providing 
                students with opportunities to explore and develop their artistic talents. Through 
                performances and productions, students build confidence, creativity, and teamwork skills.
              </p>
              <Link to="/academics/departments/performing-arts" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
          <div className="department-card">
            <div className="department-card-header">
              <div className="department-icon">
                <i className="fas fa-running"></i>
              </div>
              <h3>Physical Education Department</h3>
            </div>
            <div className="department-card-content">
              <p>
                The Physical Education Department promotes physical fitness, sports skills, and 
                healthy lifestyle choices. Through a variety of sports and fitness activities, 
                students develop physical abilities, teamwork, sportsmanship, and a lifelong 
                appreciation for physical activity.
              </p>
              <Link to="/academics/departments/physical-education" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interdisciplinary Programs Section */}
      <section className="interdisciplinary-programs-section">
        <div className="section-header">
          <h2>Interdisciplinary Programs</h2>
          <div className="section-divider"></div>
        </div>
        <div className="interdisciplinary-programs-container">
          <div className="programs-intro">
            <p>
              At Excellence Academy, we recognize that many of the most important challenges and 
              opportunities in the modern world require knowledge and skills that span multiple 
              disciplines. Our interdisciplinary programs bring together different subject areas 
              to provide students with a more integrated and holistic learning experience.
            </p>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Environmental Studies</h3>
              <p>
                This program integrates science, social studies, and mathematics to help students 
                understand environmental issues and develop sustainable solutions. Through field 
                studies, research projects, and community initiatives, students become environmentally 
                conscious citizens.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>STEM Integration</h3>
              <p>
                Our STEM program brings together Science, Technology, Engineering, and Mathematics 
                through hands-on projects and problem-based learning. Students develop critical 
                thinking, creativity, and collaboration skills while exploring real-world applications 
                of STEM concepts.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Studies</h3>
              <p>
                This program integrates languages, social sciences, and arts to develop students' 
                global awareness and cultural understanding. Through international exchanges, virtual 
                collaborations, and cultural studies, students become responsible global citizens.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Design Thinking</h3>
              <p>
                Our Design Thinking program combines arts, technology, and science to develop students' 
                problem-solving and innovation skills. Through the design process, students learn to 
                identify problems, generate ideas, create prototypes, and implement solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience Academic Excellence</h2>
          <p>Join Excellence Academy and discover the joy of learning across diverse disciplines.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
