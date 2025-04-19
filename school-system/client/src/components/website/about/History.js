import React from "react";
import { Link } from "react-router-dom";
import "../Website.css";
import "./About.css";
import "./History.css";

const History = () => {
  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">History Banner</div>
        <div className="banner-overlay">
          <h1>Our History</h1>
          <p>The journey of Excellence Academy since 1995</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="history-intro-section">
        <div className="section-header">
          <h2>Our Journey of Excellence</h2>
          <div className="section-divider"></div>
        </div>
        <div className="history-intro-container">
          <div className="history-intro-content">
            <p>
              Excellence Academy was founded in 1995 with a vision to provide
              quality education that nurtures not just academic excellence but
              also character, creativity, and compassion. What started as a
              small institution with just 150 students has now grown into one of
              the leading educational institutions in the region with over 5,000
              students.
            </p>
            <p>
              Over the past 25+ years, Excellence Academy has continuously
              evolved and adapted to the changing educational landscape while
              staying true to its core values and mission. The school has
              expanded its campus, introduced new programs, and embraced
              technology to enhance the learning experience.
            </p>
            <p>
              Throughout our journey, we have remained committed to our founding
              principles of providing holistic education that prepares students
              not just for examinations but for life. Our rich history is a
              testament to our dedication to educational excellence and our
              impact on the lives of thousands of students who have passed
              through our gates.
            </p>
          </div>
          <div className="history-intro-image">
            <div className="placeholder-image">Old School Building</div>
            <p className="image-caption">
              The original Excellence Academy building in 1995
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="section-header">
          <h2>Our Founders</h2>
          <div className="section-divider"></div>
        </div>
        <div className="founders-container">
          <div className="founder-card">
            <div className="founder-image">
              <div className="placeholder-image">Founder Photo</div>
            </div>
            <div className="founder-info">
              <h3>Dr. Mohan Sharma</h3>
              <p className="founder-position">
                Founder & First Chairman (1995-2010)
              </p>
              <p className="founder-quote">
                "Education is not the filling of a pail, but the lighting of a
                fire."
              </p>
              <p className="founder-bio">
                Dr. Mohan Sharma, a visionary educationist with a Ph.D. in
                Education from Delhi University, founded Excellence Academy with
                a mission to transform education. His innovative approach to
                teaching and learning laid the foundation for the school's
                philosophy and values.
              </p>
            </div>
          </div>
          <div className="founder-card">
            <div className="founder-image">
              <div className="placeholder-image">Co-Founder Photo</div>
            </div>
            <div className="founder-info">
              <h3>Mr. Sunit Sharma</h3>
              <p className="founder-position">
                Co-Founder & First Principal (1995-2008)
              </p>
              <p className="founder-quote">
                "Every child is unique and deserves an education that recognizes
                and nurtures that uniqueness."
              </p>
              <p className="founder-bio">
                Mrs. Sunita Sharma, with her extensive experience in child
                psychology and education, played a crucial role in developing
                the school's curriculum and teaching methodologies. Her emphasis
                on holistic development and personalized learning continues to
                influence the school's approach to education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline Section */}
      <section className="detailed-timeline-section">
        <div className="section-header">
          <h2>Our Timeline</h2>
          <div className="section-divider"></div>
        </div>
        <div className="detailed-timeline-container">
          <div className="detailed-timeline">
            <div className="timeline-era">
              <h3 className="era-title">The Foundation Years (1995-2000)</h3>
              <div className="era-events">
                <div className="era-event">
                  <div className="event-year">1995</div>
                  <div className="event-content">
                    <h4>Establishment</h4>
                    <p>
                      Excellence Academy was established with 150 students and
                      15 teachers in a rented building. The school offered
                      classes from Nursery to Class 5.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Inauguration Photo
                      </div>
                    </div>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">1997</div>
                  <div className="event-content">
                    <h4>First Expansion</h4>
                    <p>
                      The school expanded to include middle school classes (6-8)
                      and moved to a larger campus with better facilities.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">1999</div>
                  <div className="event-content">
                    <h4>CBSE Affiliation</h4>
                    <p>
                      Excellence Academy received its affiliation from the
                      Central Board of Secondary Education (CBSE), a significant
                      milestone in its journey.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2000</div>
                  <div className="event-content">
                    <h4>First Batch of Class 10</h4>
                    <p>
                      The school's first batch of Class 10 students appeared for
                      the CBSE Board Examination, achieving a 100% pass rate
                      with 75% students scoring above 80%.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">First Batch Photo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-era">
              <h3 className="era-title">Growth and Development (2001-2010)</h3>
              <div className="era-events">
                <div className="era-event">
                  <div className="event-year">2002</div>
                  <div className="event-content">
                    <h4>Senior Secondary Wing</h4>
                    <p>
                      The school expanded to include senior secondary classes
                      (11-12) with Science, Commerce, and Humanities streams.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2005</div>
                  <div className="event-content">
                    <h4>Technology Integration</h4>
                    <p>
                      Excellence Academy introduced computer education for all
                      classes and set up state-of-the-art computer labs to
                      enhance digital literacy.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Computer Lab Photo
                      </div>
                    </div>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2007</div>
                  <div className="event-content">
                    <h4>New Campus</h4>
                    <p>
                      The school moved to its current campus, a sprawling
                      10-acre property with modern infrastructure and
                      facilities.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2010</div>
                  <div className="event-content">
                    <h4>Sports Complex</h4>
                    <p>
                      A state-of-the-art sports complex was inaugurated,
                      featuring a swimming pool, basketball courts, football
                      field, and indoor sports facilities.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Sports Complex Photo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-era">
              <h3 className="era-title">
                Innovation and Excellence (2011-2020)
              </h3>
              <div className="era-events">
                <div className="era-event">
                  <div className="event-year">2012</div>
                  <div className="event-content">
                    <h4>Smart Classrooms</h4>
                    <p>
                      All classrooms were upgraded to smart classrooms with
                      interactive whiteboards, projectors, and internet
                      connectivity.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2015</div>
                  <div className="event-content">
                    <h4>International Recognition</h4>
                    <p>
                      Excellence Academy received international accreditation
                      for its educational standards and innovative teaching
                      methodologies.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Accreditation Ceremony
                      </div>
                    </div>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2018</div>
                  <div className="event-content">
                    <h4>STEM Innovation Lab</h4>
                    <p>
                      The school established a STEM Innovation Lab to promote
                      science, technology, engineering, and mathematics
                      education through hands-on projects.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2020</div>
                  <div className="event-content">
                    <h4>Digital Transformation</h4>
                    <p>
                      In response to the global pandemic, Excellence Academy
                      successfully transitioned to online learning, implementing
                      a comprehensive digital learning platform.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Online Learning Photo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-era">
              <h3 className="era-title">
                The Present and Future (2021-Present)
              </h3>
              <div className="era-events">
                <div className="era-event">
                  <div className="event-year">2021</div>
                  <div className="event-content">
                    <h4>Hybrid Learning Model</h4>
                    <p>
                      The school implemented a hybrid learning model, combining
                      the best of in-person and online education to provide
                      flexibility and personalized learning.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2022</div>
                  <div className="event-content">
                    <h4>Sustainability Initiative</h4>
                    <p>
                      Excellence Academy launched a comprehensive sustainability
                      initiative, including solar power installation, rainwater
                      harvesting, and a green curriculum.
                    </p>
                    <div className="event-image">
                      <div className="placeholder-image">
                        Solar Panels Photo
                      </div>
                    </div>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">2023</div>
                  <div className="event-content">
                    <h4>AI and Robotics Program</h4>
                    <p>
                      The school introduced an advanced AI and Robotics program
                      to prepare students for the future of technology and
                      innovation.
                    </p>
                  </div>
                </div>
                <div className="era-event">
                  <div className="event-year">Future</div>
                  <div className="event-content">
                    <h4>Vision for the Future</h4>
                    <p>
                      Excellence Academy continues to evolve and innovate, with
                      plans for international collaborations, research centers,
                      and expanded programs to meet the changing needs of
                      education in the 21st century.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials Section */}
      <section className="alumni-testimonials-section">
        <div className="section-header">
          <h2>Alumni Voices</h2>
          <div className="section-divider"></div>
        </div>
        <div className="alumni-testimonials-container">
          <div className="alumni-testimonial">
            <div className="alumni-image">
              <div className="placeholder-image">Alumni Photo</div>
            </div>
            <div className="alumni-content">
              <p className="alumni-quote">
                "My years at Excellence Academy shaped not just my academic
                journey but my entire approach to life. The values of integrity,
                perseverance, and excellence that I learned here have guided me
                throughout my career."
              </p>
              <div className="alumni-info">
                <h4>Dr. Amit Verma</h4>
                <p>Batch of 2000 | Cardiologist at Apollo Hospital</p>
              </div>
            </div>
          </div>
          <div className="alumni-testimonial">
            <div className="alumni-image">
              <div className="placeholder-image">Alumni Photo</div>
            </div>
            <div className="alumni-content">
              <p className="alumni-quote">
                "Excellence Academy provided me with a strong foundation in
                science and mathematics that prepared me well for my engineering
                studies. But more importantly, it taught me how to think
                critically and solve problems creatively."
              </p>
              <div className="alumni-info">
                <h4>Ms. Priya Patel</h4>
                <p>Batch of 2010 | Software Engineer at Google</p>
              </div>
            </div>
          </div>
          <div className="alumni-testimonial">
            <div className="alumni-image">
              <div className="placeholder-image">Alumni Photo</div>
            </div>
            <div className="alumni-content">
              <p className="alumni-quote">
                "The diverse opportunities at Excellence Academy allowed me to
                explore my passion for arts alongside academics. The school's
                holistic approach to education helped me discover my true
                calling and pursue it with confidence."
              </p>
              <div className="alumni-info">
                <h4>Mr. Rahul Singh</h4>
                <p>Batch of 2015 | Award-winning Filmmaker</p>
              </div>
            </div>
          </div>
        </div>
        <div className="alumni-link">
          <Link to="/alumni" className="btn btn-primary">
            Join Our Alumni Network
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Be Part of Our Legacy</h2>
          <p>
            Join Excellence Academy and become part of our continuing story of
            excellence.
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

export default History;
