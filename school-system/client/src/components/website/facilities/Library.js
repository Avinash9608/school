import { useEffect, useState } from "react";
import "../Website.css";
import "./Facilities.css";

const Library = () => {
  // Image URLs from free image services
  const libraryBanner =
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const readingArea =
    "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const bookCollection =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const digitalSection =
    "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const studyRoom =
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const [books, setBooks] = useState(0);
  const [journals, setJournals] = useState(0);
  const [studyRooms, setStudyRooms] = useState(0);
  const [onlineAccess, setOnlineAccess] = useState("0");
  useEffect(() => {
    // Animation configuration
    const animationDuration = 2000; // 2 seconds total
    const intervalDelay = 2; // 2ms between increments

    // Calculate steps needed for each counter
    const animateCounter = (target, setter, withPlus = false) => {
      let current = 0;
      const totalSteps = animationDuration / intervalDelay;
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(withPlus ? `${Math.floor(target)}+` : Math.floor(target));
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, intervalDelay);
    };

    // Animate each counter
    animateCounter(25000, setBooks, true);
    animateCounter(50, setJournals, true);
    animateCounter(12, setStudyRooms);

    // Special animation for 24/7
    let count = 0;
    const accessTimer = setInterval(() => {
      count++;
      if (count >= 24) {
        setOnlineAccess("24/7");
        clearInterval(accessTimer);
      } else {
        setOnlineAccess(count.toString());
      }
    }, animationDuration / 24);

    // Clean up intervals on unmount
    return () => {
      clearInterval(accessTimer);
    };
  }, []);
  return (
    <div className="website-container">
      {/* Hero Banner */}
      <section className="page-banner library-banner">
        <img
          src={libraryBanner}
          alt="School Library"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>Wisdom Heights Library</h1>
          <p>Where Knowledge Comes to Life</p>
          <div className="opening-hours">
            <span>Open Monday-Friday: 8:00 AM - 6:00 PM</span>
            <span>Saturday: 9:00 AM - 2:00 PM</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section intro-section">
        <div className="section-header">
          <h2>Our Knowledge Sanctuary</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-container two-column">
          <div className="text-content">
            <p>
              The Wisdom Heights Library is more than just a collection of books
              - it's a vibrant learning hub designed to inspire curiosity and
              support academic excellence. With over 25,000 physical volumes,
              extensive digital resources, and comfortable study spaces, we
              provide an environment where students can explore, discover, and
              grow.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{books.toLocaleString()}</span>
                <span className="stat-label">Books</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{journals}</span>
                <span className="stat-label">Academic Journals</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{studyRooms}</span>
                <span className="stat-label">Study Rooms</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{onlineAccess}</span>
                <span className="stat-label">Online Access</span>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src={readingArea}
              alt="Library reading area"
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section features-section">
        <div className="section-header">
          <h2>Library Features</h2>
          <div className="section-divider"></div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Extensive Collections</h3>
            <p>
              Curated selection of fiction, non-fiction, reference materials,
              and periodicals across all academic disciplines.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Digital Resources</h3>
            <p>
              Access to e-books, online databases, academic journals, and
              research tools available on campus or remotely.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛋️</div>
            <h3>Comfortable Spaces</h3>
            <p>
              Variety of seating options from quiet study carrels to
              collaborative work tables and lounge areas.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👩‍🏫</div>
            <h3>Research Support</h3>
            <p>
              Professional librarians available to assist with research
              projects, citations, and information literacy.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="content-section gallery-section">
        <div className="section-header">
          <h2>Explore Our Spaces</h2>
          <div className="section-divider"></div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={bookCollection} alt="Book collections" />
            <div className="gallery-caption">Main Collection Area</div>
          </div>
          <div className="gallery-item">
            <img src={digitalSection} alt="Digital resources section" />
            <div className="gallery-caption">Digital Resource Center</div>
          </div>
          <div className="gallery-item">
            <img src={studyRoom} alt="Study rooms" />
            <div className="gallery-caption">Group Study Rooms</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-section services-section">
        <div className="section-header">
          <h2>Library Services</h2>
          <div className="section-divider"></div>
        </div>
        <div className="services-list">
          <div className="service-item">
            <h3>Book Checkout</h3>
            <p>
              Students may borrow up to 5 books for 2 weeks with optional
              renewals.
            </p>
          </div>
          <div className="service-item">
            <h3>Research Assistance</h3>
            <p>
              Schedule one-on-one sessions with our librarians for research
              projects.
            </p>
          </div>
          <div className="service-item">
            <h3>Interlibrary Loan</h3>
            <p>
              Request materials from partner libraries if we don't have what you
              need.
            </p>
          </div>
          <div className="service-item">
            <h3>Printing & Scanning</h3>
            <p>Affordable printing and free scanning services available.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Begin Your Learning Journey?</h2>
        <p>
          Visit us today or explore our online catalog to discover our
          resources.
        </p>
        <div className="cta-buttons">
          <button className="primary-button">Online Catalog</button>
          <button className="secondary-button">Contact Librarian</button>
        </div>
      </section>
    </div>
  );
};

export default Library;
