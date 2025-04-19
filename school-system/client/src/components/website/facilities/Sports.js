import { useEffect, useState } from "react";
import "../Website.css";
import "./Facilities.css";
import {
  FaRunning,
  FaSwimmer,
  FaFutbol,
  FaBasketballBall,
  FaTableTennis,
  FaVolleyballBall,
  FaHockeyPuck,
  FaTrophy,
} from "react-icons/fa";

// CountUpNumber component with improved animation
const CountUpNumber = ({ end, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 10; // Dynamic interval based on target number
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Sports = () => {
  // Image URLs from free image services
  const sportsBanner =
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const playground =
    "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const swimming =
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const basketball =
    "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const football =
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const athletics =
    "https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const indoorSports =
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  // State for achievement counts
  const [footballChampions, setFootballChampions] = useState(0);
  const [swimmingMedals, setSwimmingMedals] = useState(0);
  const [basketballWins, setBasketballWins] = useState(0);

  useEffect(() => {
    // Animate achievement numbers
    const animateAchievements = () => {
      // Football champions count (up to 1)
      let footballCount = 0;
      const footballInterval = setInterval(() => {
        footballCount += 0.05;
        if (footballCount >= 1) {
          setFootballChampions(1);
          clearInterval(footballInterval);
        } else {
          setFootballChampions(Math.floor(footballCount));
        }
      }, 100);

      // Swimming medals count (up to 5)
      let swimmingCount = 0;
      const swimmingInterval = setInterval(() => {
        swimmingCount += 0.25;
        if (swimmingCount >= 5) {
          setSwimmingMedals(5);
          clearInterval(swimmingInterval);
        } else {
          setSwimmingMedals(Math.floor(swimmingCount));
        }
      }, 100);

      // Basketball wins count (up to 3)
      let basketballCount = 0;
      const basketballInterval = setInterval(() => {
        basketballCount += 0.15;
        if (basketballCount >= 3) {
          setBasketballWins(3);
          clearInterval(basketballInterval);
        } else {
          setBasketballWins(Math.floor(basketballCount));
        }
      }, 100);
    };

    animateAchievements();
  }, []);

  return (
    <div className="website-container">
      {/* Hero Banner */}
      <section className="page-banner sports-banner">
        <img
          src={sportsBanner}
          alt="School Sports Facilities"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>Sports & Athletics</h1>
          <p>Building Champions On and Off the Field</p>
          <div className="opening-hours">
            <span>Facilities Open: Monday-Saturday 7:00 AM - 7:00 PM</span>
            <span>Coached Sessions Available for All Age Groups</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section intro-section">
        <div className="section-header">
          <h2>Our Sports Program</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-container two-column">
          <div className="text-content">
            <p>
              Our comprehensive sports program is designed to develop physical
              fitness, teamwork, and sportsmanship for students from Grades 1
              through 10. We offer age-appropriate training and facilities to
              nurture athletic talent at every level.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <CountUpNumber end={15} suffix="+" />
                <span className="stat-label">Sports Offered</span>
              </div>
              <div className="stat-item">
                <CountUpNumber end={8} />
                <span className="stat-label">Playing Fields</span>
              </div>
              <div className="stat-item">
                <CountUpNumber end={12} />
                <span className="stat-label">Certified Coaches</span>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src={playground}
              alt="School playground"
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* Sports by Age Group Section */}
      <section className="content-section age-groups-section">
        <div className="section-header">
          <h2>Sports by Grade Level</h2>
          <div className="section-divider"></div>
        </div>
        <div className="age-groups-container">
          <div className="age-group">
            <h3>Grades 1-3</h3>
            <div className="sports-list">
              <div className="sport-item">
                <div className="sport-icon">🏃</div>
                <span>Basic Athletics</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">⚽</div>
                <span>Mini Soccer</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏀</div>
                <span>Basketball Fundamentals</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🤸</div>
                <span>Gymnastics</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🎾</div>
                <span>Mini Tennis</span>
              </div>
            </div>
          </div>

          <div className="age-group">
            <h3>Grades 4-6</h3>
            <div className="sports-list">
              <div className="sport-item">
                <div className="sport-icon">⚽</div>
                <span>Football</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏀</div>
                <span>Basketball</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏃</div>
                <span>Athletics</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏊</div>
                <span>Swimming</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏏</div>
                <span>Cricket</span>
              </div>
            </div>
          </div>

          <div className="age-group">
            <h3>Grades 7-10</h3>
            <div className="sports-list">
              <div className="sport-item">
                <div className="sport-icon">⚽</div>
                <span>Competitive Football</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏀</div>
                <span>Basketball Team</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏐</div>
                <span>Volleyball</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏸</div>
                <span>Badminton</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🎾</div>
                <span>Tennis</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🏏</div>
                <span>Cricket Academy</span>
              </div>
              <div className="sport-item">
                <div className="sport-icon">🤺</div>
                <span>Fencing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="content-section facilities-section">
        <div className="section-header">
          <h2>Our Sports Facilities</h2>
          <div className="section-divider"></div>
        </div>
        <div className="facilities-grid">
          <div className="facility-card">
            <img
              src={football}
              alt="Football field"
              className="facility-image"
            />
            <div className="facility-content">
              <div className="facility-icon">
                <FaFutbol className="icon" />
              </div>
              <h3>Football Field</h3>
              <ul className="facility-features">
                <li>FIFA-standard turf field</li>
                <li>Floodlights for evening practice</li>
                <li>
                  Seating for <CountUpNumber end={200} /> spectators
                </li>
                <li>Junior and senior teams</li>
              </ul>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={basketball}
              alt="Basketball court"
              className="facility-image"
            />
            <div className="facility-content">
              <div className="facility-icon">
                <FaBasketballBall className="icon" />
              </div>
              <h3>Basketball Courts</h3>
              <ul className="facility-features">
                <li>
                  <CountUpNumber end={4} /> professional courts
                </li>
                <li>Indoor and outdoor options</li>
                <li>Electronic scoreboards</li>
                <li>Skills development program</li>
              </ul>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={swimming}
              alt="Swimming pool"
              className="facility-image"
            />
            <div className="facility-content">
              <div className="facility-icon">
                <FaSwimmer className="icon" />
              </div>
              <h3>Swimming Pool</h3>
              <ul className="facility-features">
                <li>
                  Olympic-size <CountUpNumber end={50} />m pool
                </li>
                <li>Learner's pool for beginners</li>
                <li>Certified lifeguards on duty</li>
                <li>Competitive swim team</li>
              </ul>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={athletics}
              alt="Athletics track"
              className="facility-image"
            />
            <div className="facility-content">
              <div className="facility-icon">
                <FaRunning className="icon" />
              </div>
              <h3>Athletics Track</h3>
              <ul className="facility-features">
                <li>
                  <CountUpNumber end={400} />m synthetic track
                </li>
                <li>Field event facilities</li>
                <li>Electronic timing system</li>
                <li>Annual inter-school meet</li>
              </ul>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={indoorSports}
              alt="Indoor sports complex"
              className="facility-image"
            />
            <div className="facility-content">
              <div className="facility-icon">
                <FaVolleyballBall className="icon" />
              </div>
              <h3>Indoor Sports Complex</h3>
              <ul className="facility-features">
                <li>
                  Badminton courts (<CountUpNumber end={6} />)
                </li>
                <li>Table tennis arena</li>
                <li>Gymnastics center</li>
                <li>Martial arts dojo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="content-section achievements-section">
        <div className="section-header">
          <h2>Sports Achievements</h2>
          <div className="section-divider"></div>
        </div>
        <div className="achievements-container">
          <div className="achievement-item">
            <div className="achievement-icon">
              <FaTrophy className="icon" />
            </div>
            <div className="achievement-content">
              <h3>State Champions</h3>
              <p>Football U-14 Team - 2023</p>
              <div className="achievement-count">
                <CountUpNumber end={1} /> championship
              </div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">
              <FaTrophy className="icon" />
            </div>
            <div className="achievement-content">
              <h3>National Medalists</h3>
              <p>Swimming - 2022</p>
              <div className="achievement-count">
                <CountUpNumber end={3} /> gold, <CountUpNumber end={2} /> silver
              </div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">
              <FaTrophy className="icon" />
            </div>
            <div className="achievement-content">
              <h3>Zonal Winners</h3>
              <p>Basketball Senior Girls - 2023</p>
              <div className="achievement-count">
                <CountUpNumber end={3} /> consecutive wins
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Join Our Sports Program?</h2>
        <p>
          Whether you're a beginner or competitive athlete, we have
          opportunities for all students.
        </p>
        <div className="cta-buttons">
          <button className="primary-button">View Sports Schedule</button>
          <button className="secondary-button">Meet Our Coaches</button>
        </div>
      </section>
    </div>
  );
};

export default Sports;
