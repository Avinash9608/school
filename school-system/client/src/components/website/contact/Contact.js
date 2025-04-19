import React, { useState, useEffect } from "react";
import { initFaqToggles } from "../utils/faqToggle";
import { Link } from "react-router-dom";
import "../Website.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize FAQ toggles after component mounts
  useEffect(() => {
    initFaqToggles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  return (
    <div className="website-container">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="placeholder-image">Contact Banner</div>
        <div className="banner-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-info-container">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Address</h3>
            <p>Excellence Academy</p>
            <p>123 Education Street</p>
            <p>Knowledge City - 110001</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Phone</h3>
            <p>Main Office: +91 98765 43210</p>
            <p>Admissions: +91 98765 43211</p>
            <p>Transport: +91 98765 43212</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>info@excellenceacademy.edu</p>
            <p>admissions@excellenceacademy.edu</p>
            <p>principal@excellenceacademy.edu</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Office Hours</h3>
            <p>Monday to Friday: 8:00 AM - 4:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="section-header">
          <h2>Send Us a Message</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-form-container">
          {formSubmitted ? (
            <div className="form-success">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Thank You for Your Message!</h3>
              <p>
                We have received your message and will get back to you shortly.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setFormSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-header">
          <h2>Find Us</h2>
          <div className="section-divider"></div>
        </div>
        <div className="map-container">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2714095233196!2d77.2272289!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzguMCJF!5e0!3m2!1sen!2sin!4v1627896374263!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
          <div className="map-directions">
            <h3>Directions</h3>
            <div className="direction-item">
              <div className="direction-icon">
                <i className="fas fa-car"></i>
              </div>
              <div className="direction-content">
                <h4>By Car</h4>
                <p>
                  From City Center: Take Main Road towards North, turn right at
                  Education Junction, and continue for 2 km. The school is on
                  the right side.
                </p>
              </div>
            </div>
            <div className="direction-item">
              <div className="direction-icon">
                <i className="fas fa-bus"></i>
              </div>
              <div className="direction-content">
                <h4>By Public Transport</h4>
                <p>Bus Routes: 101, 102, 103 (Stop: Excellence Academy)</p>
                <p>Metro: Blue Line (Station: Knowledge Park, 500m walk)</p>
              </div>
            </div>
            <div className="direction-item">
              <div className="direction-icon">
                <i className="fas fa-walking"></i>
              </div>
              <div className="direction-content">
                <h4>Landmarks</h4>
                <p>
                  The school is located opposite Central Park and next to City
                  Hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="department-contacts-section">
        <div className="section-header">
          <h2>Department Contacts</h2>
          <div className="section-divider"></div>
        </div>
        <div className="department-contacts-container">
          <div className="department-contact">
            <h3>Admissions Office</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43211
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              admissions@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> Monday to Friday: 9:00 AM - 3:00
              PM
            </p>
          </div>
          <div className="department-contact">
            <h3>Principal's Office</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43213
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              principal@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> By appointment only
            </p>
          </div>
          <div className="department-contact">
            <h3>Accounts Department</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43214
            </p>
            <p>
              <i className="fas fa-envelope"></i> accounts@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> Monday to Friday: 9:00 AM - 2:00
              PM
            </p>
          </div>
          <div className="department-contact">
            <h3>Transport Department</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43212
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              transport@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> Monday to Friday: 8:00 AM - 4:00
              PM
            </p>
          </div>
          <div className="department-contact">
            <h3>IT Support</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43215
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              itsupport@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> Monday to Friday: 8:00 AM - 4:00
              PM
            </p>
          </div>
          <div className="department-contact">
            <h3>Sports Department</h3>
            <p>
              <i className="fas fa-phone-alt"></i> +91 98765 43216
            </p>
            <p>
              <i className="fas fa-envelope"></i> sports@excellenceacademy.edu
            </p>
            <p>
              <i className="fas fa-clock"></i> Monday to Saturday: 7:00 AM -
              5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <h3>How can I schedule a campus visit?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                You can schedule a campus visit by filling out the contact form
                above or by calling our Admissions Office at +91 98765 43211.
                Campus visits are available on weekdays between 9:00 AM and 2:00
                PM, by appointment only.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>
                How do I check the status of my child's admission application?
              </h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                You can check the status of your child's admission application
                by logging into the Parent Portal on our website or by
                contacting the Admissions Office directly.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>How can I pay school fees?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>School fees can be paid through the following methods:</p>
              <ul>
                <li>Online payment through the Parent Portal</li>
                <li>Direct bank transfer</li>
                <li>Cheque payment at the Accounts Department</li>
                <li>Cash payment at the school's designated bank</li>
              </ul>
              <p>
                For more information, please contact the Accounts Department.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>How do I report a change in contact information?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                You can report a change in contact information by updating your
                profile on the Parent Portal or by submitting a Change of
                Information Form to the Administrative Office.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>How can I request a meeting with a teacher?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                You can request a meeting with a teacher by sending an email to
                the teacher directly or by contacting the respective Section
                Coordinator. Teacher meetings are typically scheduled during
                designated parent-teacher meeting hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <div className="section-header">
          <h2>Connect With Us</h2>
          <div className="section-divider"></div>
        </div>
        <div className="social-media-container">
          <p>
            Stay updated with the latest news, events, and announcements by
            following us on social media.
          </p>
          <div className="social-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Stay informed about school events, news, and announcements by
              subscribing to our monthly newsletter.
            </p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
