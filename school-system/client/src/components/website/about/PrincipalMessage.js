import { useState } from "react";
import { Link } from "react-router-dom";
import "../Website.css";
import "./About.css";
import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Principal Banner</div>
        <div className="banner-overlay">
          <h1>Principal's Message</h1>
          <p>A vision for excellence in education</p>
        </div>
      </section>

      {/* Principal Message Section */}
      <section className="principal-message-section">
        <div className="principal-message-container">
          <div className="principal-profile">
            <div className="principal-image">
              <div className="placeholder-image">Principal Photo</div>
            </div>
            <div className="principal-details">
              <h3>Dr. Sarah Johnson</h3>
              <p className="principal-designation">Principal</p>
              <div className="principal-credentials">
                <p>
                  <strong>Qualifications:</strong> Ph.D. in Educational
                  Leadership, M.Ed., B.Ed.
                </p>
                <p>
                  <strong>Experience:</strong> 25+ years in education
                </p>
                <p>
                  <strong>Email:</strong> principal@excellenceacademy.edu
                </p>
              </div>
            </div>
          </div>

          <div className="message-content">
            <div className="message-quote">
              <i className="fas fa-quote-left"></i>
              <p>
                "At Excellence Academy, we nurture not just academic excellence
                but also character, creativity, and compassion. Our goal is to
                prepare students not just for examinations but for life."
              </p>
            </div>

            <div className="message-body">
              <p>Dear Parents, Students, and Visitors,</p>
              <p>
                It is with great pleasure that I welcome you to Excellence
                Academy, a place where learning is a joyful journey of discovery
                and growth. As the Principal of this esteemed institution, I am
                proud to lead a community that is committed to nurturing the
                potential of every child and preparing them for a future of
                possibilities.
              </p>
              <p>
                In today's rapidly changing world, education must go beyond
                textbooks and examinations. At Excellence Academy, we believe in
                providing a holistic education that develops not just the mind
                but also the heart and spirit. Our comprehensive curriculum,
                innovative teaching methodologies, and supportive learning
                environment are designed to foster critical thinking,
                creativity, collaboration, and character.
              </p>
              <p>
                We recognize that each child is unique, with their own
                strengths, interests, and learning styles. Our dedicated faculty
                members are committed to understanding and addressing the
                individual needs of each student, ensuring that they receive the
                guidance and support they need to thrive. We celebrate diversity
                and create an inclusive environment where every student feels
                valued and respected.
              </p>
              <p>
                At Excellence Academy, we also place a strong emphasis on values
                education. We believe that academic excellence must be
                complemented by strong moral values and ethical principles.
                Through various activities, programs, and initiatives, we
                instill in our students values such as integrity, respect,
                responsibility, empathy, and perseverance.
              </p>
              <p>
                We also recognize the importance of preparing students for the
                challenges and opportunities of the 21st century. Our
                integration of technology, focus on STEM education, and emphasis
                on global awareness equip our students with the skills and
                knowledge they need to succeed in a rapidly evolving world.
              </p>
              <p>
                Parents are our valued partners in this educational journey. We
                believe that a strong home-school partnership is essential for
                the holistic development of children. We encourage open
                communication, active participation, and collaborative
                problem-solving to ensure that our students receive consistent
                support and guidance.
              </p>
              <p>
                As we look to the future, we remain committed to our vision of
                excellence in education. We will continue to innovate, adapt,
                and evolve to meet the changing needs of our students and
                society. We will strive to create a learning environment that
                inspires curiosity, fosters creativity, and nurtures character.
              </p>
              <p>
                I invite you to explore our website to learn more about our
                programs, facilities, and achievements. If you are considering
                Excellence Academy for your child's education, I encourage you
                to visit our campus and experience firsthand the vibrant
                learning community that we have created.
              </p>
              <p>
                Thank you for your interest in Excellence Academy. I look
                forward to welcoming you to our school community.
              </p>
              <div className="message-signature">
                <p>Warm regards,</p>
                <p className="signature">Dr. Sarah Johnson</p>
                <p>Principal, Excellence Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Vision Section */}
      <section className="principal-vision-section">
        <div className="section-header">
          <h2>Principal's Vision</h2>
          <div className="section-divider"></div>
        </div>
        <div className="principal-vision-container">
          <div className="vision-pillars">
            <div className="vision-pillar">
              <div className="pillar-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Academic Excellence</h3>
              <p>
                Fostering a culture of academic rigor and intellectual curiosity
                that encourages students to strive for excellence in all their
                endeavors.
              </p>
            </div>
            <div className="vision-pillar">
              <div className="pillar-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Character Development</h3>
              <p>
                Nurturing strong moral values, ethical principles, and social
                responsibility to develop students into compassionate and
                principled individuals.
              </p>
            </div>
            <div className="vision-pillar">
              <div className="pillar-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation & Creativity</h3>
              <p>
                Encouraging innovative thinking, creative expression, and
                problem-solving skills to prepare students for the challenges of
                the future.
              </p>
            </div>
            <div className="vision-pillar">
              <div className="pillar-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Global Citizenship</h3>
              <p>
                Developing awareness, understanding, and respect for diverse
                cultures and perspectives to prepare students to be responsible
                global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Initiatives Section */}
      <section className="principal-initiatives-section">
        <div className="section-header">
          <h2>Key Initiatives</h2>
          <div className="section-divider"></div>
        </div>
        <div className="principal-initiatives-container">
          <div className="initiative-card">
            <div className="initiative-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Digital Learning Integration</h3>
            <p>
              Implementation of a comprehensive digital learning platform that
              enhances teaching and learning through technology integration,
              personalized learning paths, and data-driven instruction.
            </p>
          </div>
          <div className="initiative-card">
            <div className="initiative-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Community Outreach Program</h3>
            <p>
              Establishment of a structured community service program that
              encourages students to engage with local communities, understand
              social issues, and contribute to positive change.
            </p>
          </div>
          <div className="initiative-card">
            <div className="initiative-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Sustainability Project</h3>
            <p>
              Launch of a school-wide sustainability initiative that includes
              solar power installation, rainwater harvesting, waste management,
              and a green curriculum to promote environmental consciousness.
            </p>
          </div>
          <div className="initiative-card">
            <div className="initiative-icon">
              <i className="fas fa-book-reader"></i>
            </div>
            <h3>Reading Renaissance</h3>
            <p>
              Revival of reading culture through a comprehensive reading program
              that includes library enhancement, reading challenges, author
              visits, and integration of literature across the curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Video Message Section */}
      <section className="video-message-section">
        <div className="section-header">
          <h2>Video Message</h2>
          <div className="section-divider"></div>
        </div>
        <div className="video-message-container">
          <div className="video-placeholder">
            {isPlaying ? (
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Principal Message"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <div
                  className="placeholder-image"
                  style={{
                    backgroundImage:
                      "url('https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "350px",
                  }}
                ></div>
                <div className="play-button" onClick={() => setIsPlaying(true)}>
                  <i className="fas fa-play"></i>
                </div>
              </>
            )}
          </div>

          <div className="video-description">
            <h3>A Message from Our Principal</h3>
            <p>
              Watch Dr. Sarah Johnson share her vision for Excellence Academy
              and discuss the school's approach to education, values, and
              student development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Principal Section */}
      <section className="contact-principal-section">
        <div className="section-header">
          <h2>Connect with the Principal</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-principal-container">
          <div className="contact-info">
            <p>
              Dr. Sarah Johnson welcomes communication from parents, students,
              and community members. You can reach out to her through the
              following channels:
            </p>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <span>Email: principal@excellenceacademy.edu</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>Phone: +91 98765 43210 (Office)</span>
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i>
                <span>Office Hours: Monday to Friday, 9:00 AM - 11:00 AM</span>
              </li>
            </ul>
          </div>
          <div className="appointment-info">
            <h3>Schedule an Appointment</h3>
            <p>
              To schedule a personal meeting with the Principal, please contact
              the Principal's Office at least 48 hours in advance.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Excellence Academy</h2>
          <p>
            Experience excellence in education under the visionary leadership of
            Dr. Sarah Johnson.
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

export default PrincipalMessage;
