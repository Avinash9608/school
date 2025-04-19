import React, { useState, useEffect } from "react";
import "../Website.css";
import "./Facilities.css";
import "./Classrooms.css";

const Classrooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [smartClassrooms, setSmartClassrooms] = useState(0);
  const [studentsPerClass, setStudentsPerClass] = useState(0);
  const [digitalIntegration, setDigitalIntegration] = useState(0);
  const [techSupport, setTechSupport] = useState("0");
  const classrooms = [
    {
      id: 1,
      name: "Smart Classroom A101",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      capacity: 30,
      features: [
        "Interactive Whiteboard",
        "Projector System",
        "Surround Sound",
        "Individual Tablets",
        "Climate Control",
      ],
      description:
        "State-of-the-art smart classroom equipped with the latest educational technology.",
    },
    {
      id: 2,
      name: "Digital Lab B202",
      image:
        "https://images.unsplash.com/photo-1719210722633-2756cda18bcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: 25,
      features: [
        "Computer Workstations",
        "3D Printing Station",
        "Coding Setup",
        "Virtual Reality Equipment",
        "Digital Library Access",
      ],
      description:
        "Specialized classroom for digital learning and computer science education.",
    },
    {
      id: 3,
      name: "Collaborative Space C303",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f",
      capacity: 35,
      features: [
        "Modular Furniture",
        "Group Work Stations",
        "Wireless Presentation",
        "Writing Walls",
        "Flexible Seating",
      ],
      description:
        "Flexible learning environment designed for group activities and collaborative learning.",
    },
    {
      id: 4,
      name: "Science Laboratory D404",
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc",
      capacity: 20,
      features: [
        "Lab Workstations",
        "Microscopes",
        "Chemistry Equipment",
        "Safety Stations",
        "Interactive Science Software",
      ],
      description:
        "Fully-equipped laboratory for hands-on science experiments and research.",
    },
    {
      id: 5,
      name: "Art Studio E505",
      image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232",
      capacity: 15,
      features: [
        "Natural Lighting",
        "Pottery Wheels",
        "Drawing Tables",
        "Digital Art Stations",
        "Gallery Wall",
      ],
      description:
        "Creative space designed for artistic expression across various media.",
    },
    {
      id: 6,
      name: "Language Center F606",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
      capacity: 18,
      features: [
        "Audio Booths",
        "Language Software",
        "Interactive Displays",
        "Cultural Resources",
        "Recording Equipment",
      ],
      description:
        "Specialized facility for language learning with immersive technology.",
    },
    {
      id: 7,
      name: "Lecture Hall G707",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      capacity: 100,
      features: [
        "Tiered Seating",
        "Professional Audio",
        "Dual Projectors",
        "Lecture Capture",
        "Wireless Microphones",
      ],
      description:
        "Large auditorium-style space for lectures and presentations.",
    },
    {
      id: 8,
      name: "Music Room H808",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      capacity: 25,
      features: [
        "Acoustic Treatment",
        "Digital Pianos",
        "Recording Studio",
        "Instrument Storage",
        "Practice Booths",
      ],
      description: "Sound-optimized space for music education and performance.",
    },
    {
      id: 9,
      name: "Robotics Lab I909",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
      capacity: 20,
      features: [
        "Robotics Kits",
        "Programming Stations",
        "Competition Arena",
        "3D Printers",
        "AI Development Tools",
      ],
      description:
        "Advanced facility for robotics engineering and programming.",
    },
    {
      id: 10,
      name: "Outdoor Classroom J1010",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
      capacity: 30,
      features: [
        "Weatherproof Furniture",
        "Solar Charging Stations",
        "Whiteboard Walls",
        "WiFi Coverage",
        "Gardening Area",
      ],
      description: "Nature-integrated learning space with modern technology.",
    },
    {
      id: 11,
      name: "Media Production K1111",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
      capacity: 15,
      features: [
        "Green Screen",
        "Video Editing Suites",
        "Broadcast Equipment",
        "Lighting Grid",
        "Sound Mixing Console",
      ],
      description:
        "Professional-grade media production studio for digital content creation.",
    },
    {
      id: 12,
      name: "Math Center L1212",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      capacity: 25,
      features: [
        "Interactive Math Tools",
        "Graphing Calculators",
        "Geometry Visualization",
        "Collaborative Boards",
        "Math Software",
      ],
      description:
        "Technology-enhanced space dedicated to mathematical learning.",
    },
    {
      id: 13,
      name: "History Archive M1313",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      capacity: 20,
      features: [
        "Document Viewers",
        "Historical Replicas",
        "Research Stations",
        "Virtual Reality History",
        "Special Collections",
      ],
      description:
        "Immersive learning environment for historical study and research.",
    },
  ];
  useEffect(() => {
    const animateValue = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.ceil(start));
        }
      }, 16);
    };

    animateValue(setSmartClassrooms, 30, 2000);
    animateValue(setStudentsPerClass, 25, 2000);
    animateValue(setDigitalIntegration, 100, 2000);

    // Special 24/7 animation
    let count = 0;
    const techTimer = setInterval(() => {
      count++;
      if (count >= 24) {
        setTechSupport("24/7");
        clearInterval(techTimer);
      } else {
        setTechSupport(count.toString());
      }
    }, 2000 / 24);
  }, []);
  return (
    <div className="website-container">
      <section className="classroom-banner">
        <div className="banner-overlay">
          <h1>Our Smart Classrooms</h1>
          <p>Technology-Enabled Learning Spaces for the Digital Age</p>
        </div>
      </section>

      <section className="classroom-intro">
        <div className="intro-content">
          <h2>Modern Learning Environment</h2>
          <p>
            Our classrooms are designed to provide an optimal learning
            environment that combines traditional teaching methods with
            cutting-edge technology. Each space is carefully crafted to enhance
            student engagement and facilitate interactive learning experiences.
          </p>
        </div>
      </section>

      <section className="classroom-features">
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-laptop"></i>
            <h3>Digital Integration</h3>
            <p>Smart boards and digital learning tools in every classroom</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Collaborative Spaces</h3>
            <p>Flexible seating arrangements for group activities</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-wifi"></i>
            <h3>High-Speed Internet</h3>
            <p>Seamless connectivity for digital learning resources</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-temperature-low"></i>
            <h3>Climate Control</h3>
            <p>Maintained temperature for comfortable learning</p>
          </div>
        </div>
      </section>

      <section className="classroom-gallery">
        <h2>Explore Our Classrooms</h2>
        <div className="classroom-grid">
          {classrooms.map((room) => (
            <div
              key={room.id}
              className="classroom-card"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="classroom-image">
                <img src={room.image} alt={room.name} />
              </div>
              <div className="classroom-info">
                <h3>{room.name}</h3>
                <p className="capacity">
                  <i className="fas fa-users"></i> Capacity: {room.capacity}{" "}
                  students
                </p>
                <p className="description">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedRoom && (
        <div className="classroom-modal" onClick={() => setSelectedRoom(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedRoom(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image">
              <img src={selectedRoom.image} alt={selectedRoom.name} />
            </div>
            <div className="modal-details">
              <h2>{selectedRoom.name}</h2>
              <p className="capacity">
                <i className="fas fa-users"></i> Capacity:{" "}
                {selectedRoom.capacity} students
              </p>
              <p className="description">{selectedRoom.description}</p>
              <div className="features-list">
                <h3>Features:</h3>
                <ul>
                  {selectedRoom.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="classroom-stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>{smartClassrooms}+</h3>
            <p>Smart Classrooms</p>
          </div>
          <div className="stat-item">
            <h3>{studentsPerClass}</h3>
            <p>Students per Class</p>
          </div>
          <div className="stat-item">
            <h3>{digitalIntegration}%</h3>
            <p>Digital Integration</p>
          </div>
          <div className="stat-item">
            <h3>{techSupport}</h3>
            <p>Technical Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classrooms;
