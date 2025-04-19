import React, { useState, useEffect } from "react";
import { initFaqToggles } from "./utils/faqToggle";
import { Link } from "react-router-dom";
import "./Website.css";
import "./Admissions.css";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    applyingForClass: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: "",
    previousSchool: "",
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
        <div className="placeholder-image">Admissions Banner</div>
        <div className="banner-overlay">
          <h1>Admissions</h1>
          <p>Join Excellence Academy for a bright future</p>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="announcement-section">
        <div className="announcement-container">
          <div className="announcement-icon">
            <i className="fas fa-bullhorn"></i>
          </div>
          <div className="announcement-content">
            <h3>Admissions Open for 2023-24</h3>
            <p>
              Applications are now being accepted for all classes. Limited seats
              available!
            </p>
          </div>
          <a href="#admission-form" className="btn btn-sm">
            Apply Now
          </a>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="admission-process-section">
        <div className="section-header">
          <h2>Admission Process</h2>
          <div className="section-divider"></div>
        </div>
        <div className="process-container">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Application Submission</h3>
              <p>
                Fill out the online application form or visit our admissions
                office to obtain and submit a physical application.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Entrance Assessment</h3>
              <p>
                Students applying for Classes 2 and above will be required to
                take an entrance assessment to evaluate their academic
                readiness.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Interview</h3>
              <p>
                Selected candidates and their parents will be invited for an
                interview with the school administration.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Admission Offer</h3>
              <p>
                Based on the assessment and interview, successful candidates
                will receive an admission offer.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Fee Payment & Documentation</h3>
              <p>
                Complete the admission process by paying the required fees and
                submitting all necessary documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <div className="section-header">
          <h2>Eligibility Criteria</h2>
          <div className="section-divider"></div>
        </div>
        <div className="eligibility-container">
          <div className="eligibility-content">
            <h3>Age Requirements</h3>
            <table className="eligibility-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Age as of 31st March 2023</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nursery</td>
                  <td>3+ years</td>
                </tr>
                <tr>
                  <td>LKG</td>
                  <td>4+ years</td>
                </tr>
                <tr>
                  <td>UKG</td>
                  <td>5+ years</td>
                </tr>
                <tr>
                  <td>Class 1</td>
                  <td>6+ years</td>
                </tr>
                <tr>
                  <td>Other Classes</td>
                  <td>Age appropriate for the class</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="eligibility-content">
            <h3>Required Documents</h3>
            <ul className="document-list">
              <li>
                <i className="fas fa-file-alt"></i> Completed application form
              </li>
              <li>
                <i className="fas fa-id-card"></i> Birth certificate
              </li>
              <li>
                <i className="fas fa-graduation-cap"></i> Previous school
                records (for Classes 2 and above)
              </li>
              <li>
                <i className="fas fa-passport"></i> Passport-sized photographs
                (4 copies)
              </li>
              <li>
                <i className="fas fa-address-card"></i> Proof of residence
              </li>
              <li>
                <i className="fas fa-file-medical"></i> Medical fitness
                certificate
              </li>
              <li>
                <i className="fas fa-id-badge"></i> Aadhar card (if available)
              </li>
              <li>
                <i className="fas fa-file-signature"></i> Transfer certificate
                (for Classes 2 and above)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="fee-structure-section">
        <div className="section-header">
          <h2>Fee Structure</h2>
          <div className="section-divider"></div>
        </div>
        <div className="fee-container">
          <div className="fee-note">
            <p>
              <i className="fas fa-info-circle"></i> The fee structure for the
              academic year 2023-24 is given below. Fees are subject to revision
              for subsequent academic years.
            </p>
          </div>
          <div className="fee-table-container">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Nursery - UKG</th>
                  <th>Classes 1-5</th>
                  <th>Classes 6-8</th>
                  <th>Classes 9-10</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Fee (One-time)</td>
                  <td>₹25,000</td>
                  <td>₹30,000</td>
                  <td>₹35,000</td>
                  <td>₹40,000</td>
                </tr>
                <tr>
                  <td>Annual Fee</td>
                  <td>₹15,000</td>
                  <td>₹18,000</td>
                  <td>₹20,000</td>
                  <td>₹25,000</td>
                </tr>
                <tr>
                  <td>Tuition Fee (Quarterly)</td>
                  <td>₹12,000</td>
                  <td>₹15,000</td>
                  <td>₹18,000</td>
                  <td>₹22,000</td>
                </tr>
                <tr>
                  <td>Development Fee (Annual)</td>
                  <td>₹8,000</td>
                  <td>₹10,000</td>
                  <td>₹12,000</td>
                  <td>₹15,000</td>
                </tr>
                <tr>
                  <td>Computer Lab Fee (Annual)</td>
                  <td>₹5,000</td>
                  <td>₹6,000</td>
                  <td>₹7,000</td>
                  <td>₹8,000</td>
                </tr>
                <tr>
                  <td>Library Fee (Annual)</td>
                  <td>₹3,000</td>
                  <td>₹4,000</td>
                  <td>₹5,000</td>
                  <td>₹6,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fee-notes">
            <h3>Additional Notes:</h3>
            <ul>
              <li>Transport fees are additional and depend on the distance.</li>
              <li>Fees can be paid quarterly, half-yearly, or annually.</li>
              <li>Late payment will attract a penalty of 2% per month.</li>
              <li>All fees are non-refundable except caution deposit.</li>
            </ul>
          </div>
          <div className="fee-download">
            <a href="#" className="btn btn-primary">
              <i className="fas fa-download"></i> Download Complete Fee
              Structure
            </a>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section id="admission-form" className="admission-form-section">
        <div className="section-header">
          <h2>Admission Enquiry Form</h2>
          <div className="section-divider"></div>
        </div>
        {formSubmitted ? (
          <div className="form-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Thank You for Your Enquiry!</h3>
            <p>
              Your admission enquiry has been submitted successfully. Our
              admissions team will contact you shortly.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setFormSubmitted(false)}
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentName">Student's Full Name *</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="applyingForClass">Applying for Class *</label>
                <select
                  id="applyingForClass"
                  name="applyingForClass"
                  value={formData.applyingForClass}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number *</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
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
              <div className="form-group">
                <label htmlFor="address">Residential Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="previousSchool">
                  Previous School (if applicable)
                </label>
                <input
                  type="text"
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group form-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the <a href="#">terms and conditions</a> and
                  consent to the processing of my personal data.
                </label>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="section-divider"></div>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <h3>What is the admission process for new students?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                The admission process involves filling out an application form,
                entrance assessment (for Classes 2 and above), interview, and
                document verification. Once selected, you'll need to pay the
                admission fee and submit all required documents.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Is there a waiting list for admissions?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                Yes, for classes that have reached their capacity, we maintain a
                waiting list. Candidates on the waiting list will be offered
                admission if seats become available.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Are there any scholarships available?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                Yes, we offer merit-based scholarships to deserving students.
                These scholarships are awarded based on academic excellence,
                sports achievements, or exceptional talent in arts and culture.
                Please contact the admissions office for more details.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>What is the student-teacher ratio?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                We maintain a student-teacher ratio of 20:1 to ensure
                personalized attention for each student.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Is transportation available?</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>
                Yes, we provide transportation services covering most areas of
                the city. The transport fee varies depending on the distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-header">
          <h2>Contact Admissions Office</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>
                  Excellence Academy, 123 Education Street, Knowledge City -
                  110001
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
                <p>+91 12345 67890</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>admissions@excellenceacademy.edu</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Office Hours</h3>
                <p>Monday to Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2714095233196!2d77.2272289!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzguMCJF!5e0!3m2!1sen!2sin!4v1627896374263!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join Excellence Academy?</h2>
          <p>Take the first step towards a bright future for your child.</p>
          <div className="cta-buttons">
            <a href="#admission-form" className="btn btn-primary">
              Apply Now
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
