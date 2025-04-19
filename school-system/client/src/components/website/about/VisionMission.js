import React from 'react';
import { Link } from 'react-router-dom';
import '../Website.css';
import './About.css';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Vision Mission Banner</div>
        <div className="banner-overlay">
          <h1>Vision & Mission</h1>
          <p>Our guiding principles and aspirations</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="vision-intro-section">
        <div className="section-header">
          <h2>Our Guiding Philosophy</h2>
          <div className="section-divider"></div>
        </div>
        <div className="vision-intro-container">
          <div className="vision-intro-content">
            <p>
              At Excellence Academy, we are guided by a clear vision and mission that shapes 
              everything we do. Our vision represents our aspirations for the future, while our 
              mission defines our purpose and the path we follow to achieve our vision.
            </p>
            <p>
              These guiding principles are not just words on a page but living values that are 
              integrated into our curriculum, teaching methodologies, school culture, and daily 
              operations. They inspire our faculty, motivate our students, and provide a framework 
              for decision-making at all levels.
            </p>
            <p>
              As we navigate the ever-changing landscape of education, our vision and mission 
              remain constant, ensuring that we stay true to our core purpose while adapting to 
              meet the needs of our students in a rapidly evolving world.
            </p>
          </div>
          <div className="vision-intro-image">
            <div className="placeholder-image">Students in Classroom</div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-statement-section">
        <div className="vision-statement-container">
          <div className="vision-header">
            <div className="vision-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
          </div>
          <div className="vision-content">
            <div className="vision-quote">
              <p>
                "To be a center of excellence in education that nurtures individuals to become 
                lifelong learners, critical thinkers, and responsible global citizens who contribute 
                positively to society."
              </p>
            </div>
            <div className="vision-explanation">
              <p>
                Our vision encapsulates our aspiration to create an educational institution that 
                goes beyond academic excellence to nurture well-rounded individuals who are prepared 
                for the challenges and opportunities of the 21st century.
              </p>
              <p>
                We envision our students as:
              </p>
              <ul className="vision-list">
                <li>
                  <strong>Lifelong Learners</strong> - Individuals who maintain a curiosity and 
                  passion for learning throughout their lives, continuously acquiring new knowledge 
                  and skills.
                </li>
                <li>
                  <strong>Critical Thinkers</strong> - People who can analyze information, evaluate 
                  evidence, and make reasoned judgments, enabling them to navigate complex problems 
                  and situations.
                </li>
                <li>
                  <strong>Global Citizens</strong> - Members of a global community who understand 
                  and appreciate diverse cultures, perspectives, and environments, and who act 
                  responsibly to create a more peaceful, sustainable, and inclusive world.
                </li>
                <li>
                  <strong>Positive Contributors</strong> - Individuals who use their knowledge, 
                  skills, and values to make meaningful contributions to society, whether through 
                  their chosen professions, community service, or personal interactions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-statement-section">
        <div className="mission-statement-container">
          <div className="mission-header">
            <div className="mission-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
          </div>
          <div className="mission-content">
            <div className="mission-quote">
              <p>
                "To provide a holistic education that balances academic excellence with character 
                development, fostering a supportive and inclusive learning environment where every 
                student can discover and develop their unique potential."
              </p>
            </div>
            <div className="mission-explanation">
              <p>
                Our mission statement outlines the path we follow to achieve our vision. It defines 
                our purpose and guides our daily actions and decisions. To fulfill our mission, we 
                are committed to:
              </p>
              <div className="mission-pillars">
                <div className="mission-pillar">
                  <div className="pillar-icon">
                    <i className="fas fa-book"></i>
                  </div>
                  <h3>Academic Excellence</h3>
                  <p>
                    Providing a rigorous and comprehensive curriculum that challenges students to 
                    achieve their highest academic potential and develop critical thinking skills.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h3>Character Development</h3>
                  <p>
                    Nurturing values such as integrity, respect, responsibility, empathy, and 
                    perseverance to develop students into ethical and compassionate individuals.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Inclusive Environment</h3>
                  <p>
                    Creating a safe, supportive, and inclusive learning environment where diversity 
                    is celebrated and every student feels valued and respected.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Individual Potential</h3>
                  <p>
                    Recognizing and nurturing the unique talents, interests, and learning styles of 
                    each student, helping them discover and develop their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <div className="section-divider"></div>
        </div>
        <div className="core-values-container">
          <p className="values-intro">
            Our core values are the fundamental beliefs that guide our behavior, decisions, and 
            actions. They define who we are as an institution and shape our school culture.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in all aspects of education, continuously raising the bar 
                and encouraging our students to do their best in academics, sports, arts, and 
                personal development.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of honesty, ethics, and moral principles, teaching 
                our students to be truthful, trustworthy, and principled in all their actions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Respect</h3>
              <p>
                We value diversity and treat all individuals with dignity and respect, fostering an 
                inclusive environment where different perspectives, backgrounds, and abilities are 
                appreciated.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We embrace creativity, critical thinking, and innovation, encouraging our students 
                to explore new ideas, approaches, and solutions to challenges.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of teamwork and collaboration, teaching our students to work 
                together effectively, communicate clearly, and value the contributions of others.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Global Citizenship</h3>
              <p>
                We foster awareness and responsibility towards the global community, encouraging our 
                students to understand global issues and contribute to creating a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="strategic-goals-section">
        <div className="section-header">
          <h2>Strategic Goals</h2>
          <div className="section-divider"></div>
        </div>
        <div className="strategic-goals-container">
          <p className="goals-intro">
            To fulfill our vision and mission, we have established the following strategic goals 
            that guide our planning, resource allocation, and evaluation processes:
          </p>
          <div className="goals-timeline">
            <div className="goal-item">
              <div className="goal-number">1</div>
              <div className="goal-content">
                <h3>Academic Excellence</h3>
                <p>
                  Provide a rigorous and comprehensive curriculum that challenges students to achieve 
                  their highest academic potential and prepares them for future success.
                </p>
                <ul className="goal-objectives">
                  <li>Maintain high standards of teaching and learning</li>
                  <li>Continuously update curriculum to reflect current knowledge and best practices</li>
                  <li>Integrate technology effectively to enhance learning</li>
                  <li>Prepare students for national and international assessments</li>
                </ul>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-number">2</div>
              <div className="goal-content">
                <h3>Holistic Development</h3>
                <p>
                  Foster the holistic development of students by providing opportunities for growth 
                  in academics, sports, arts, and character.
                </p>
                <ul className="goal-objectives">
                  <li>Offer a wide range of co-curricular activities</li>
                  <li>Integrate character education across the curriculum</li>
                  <li>Provide opportunities for leadership development</li>
                  <li>Promote physical fitness and healthy lifestyle choices</li>
                </ul>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-number">3</div>
              <div className="goal-content">
                <h3>Inclusive Learning Environment</h3>
                <p>
                  Create a safe, supportive, and inclusive learning environment where diversity is 
                  celebrated and every student feels valued and respected.
                </p>
                <ul className="goal-objectives">
                  <li>Implement inclusive teaching practices</li>
                  <li>Provide support services for students with diverse learning needs</li>
                  <li>Promote cultural awareness and appreciation</li>
                  <li>Ensure a safe and positive school climate</li>
                </ul>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-number">4</div>
              <div className="goal-content">
                <h3>Professional Development</h3>
                <p>
                  Invest in the continuous professional development of faculty and staff to enhance 
                  teaching effectiveness and institutional excellence.
                </p>
                <ul className="goal-objectives">
                  <li>Provide regular training and development opportunities</li>
                  <li>Encourage research and innovation in teaching</li>
                  <li>Facilitate collaboration and sharing of best practices</li>
                  <li>Recognize and reward excellence in teaching</li>
                </ul>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-number">5</div>
              <div className="goal-content">
                <h3>Community Engagement</h3>
                <p>
                  Build strong partnerships with parents, alumni, and the community to enhance 
                  student learning and contribute to community development.
                </p>
                <ul className="goal-objectives">
                  <li>Involve parents in their children's education</li>
                  <li>Engage alumni in school activities and mentorship</li>
                  <li>Collaborate with local organizations and businesses</li>
                  <li>Participate in community service and social responsibility initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Commitment Section */}
      <section className="leadership-commitment-section">
        <div className="leadership-commitment-container">
          <div className="commitment-content">
            <h2>Leadership Commitment</h2>
            <p>
              Our school leadership is committed to upholding and implementing our vision, mission, 
              and values in all aspects of school operations. We believe that effective leadership 
              is essential for creating a culture of excellence and continuous improvement.
            </p>
            <p>
              The school management, principal, and administrative team work collaboratively to:
            </p>
            <ul className="commitment-list">
              <li>Provide strategic direction and guidance</li>
              <li>Ensure alignment of policies, programs, and practices with our vision and mission</li>
              <li>Allocate resources effectively to support our strategic goals</li>
              <li>Monitor progress and evaluate outcomes</li>
              <li>Model the values and behaviors we expect from our students and staff</li>
              <li>Foster a culture of continuous improvement and innovation</li>
            </ul>
            <p>
              We are accountable to our students, parents, and the community for fulfilling our 
              vision and mission and for maintaining the highest standards of educational excellence.
            </p>
          </div>
          <div className="commitment-image">
            <div className="placeholder-image">Leadership Team</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Our Journey</h2>
          <p>Be part of our mission to shape the future through excellence in education.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
