import React, { useState, useEffect } from "react";
import "../Website.css";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    month: "all",
    audience: "all",
  });

  // Mock data - In real app, this would come from an API
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Independence Day Celebration",
        date: "2024-08-15",
        startTime: "09:00",
        endTime: "12:00",
        location: "School Auditorium",
        category: "cultural",
        audience: "all",
        description:
          "Join us for flag hoisting, cultural performances, and patriotic activities.",
        image:
          "data:image/jpeg;base64,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",
        organizer: "Cultural Committee",
        registrationRequired: true,
        registrationDeadline: "2024-08-10",
      },
      {
        id: 2,
        title: "Annual Science Exhibition",
        date: "2024-08-25",
        startTime: "10:00",
        endTime: "16:00",
        location: "Science Block",
        category: "academic",
        audience: "students",
        description:
          "Students showcase innovative science projects and experiments.",
        image: "/images/events/science-exhibition.jpg",
        organizer: "Science Department",
        registrationRequired: true,
        registrationDeadline: "2024-08-20",
      },
      // Add more mock events here
    ];

    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    // Apply filters
    let filtered = events;
    if (newFilters.category !== "all") {
      filtered = filtered.filter(
        (event) => event.category === newFilters.category
      );
    }
    if (newFilters.month !== "all") {
      filtered = filtered.filter((event) => {
        const eventMonth = new Date(event.date).getMonth();
        return eventMonth === parseInt(newFilters.month);
      });
    }
    if (newFilters.audience !== "all") {
      filtered = filtered.filter(
        (event) => event.audience === newFilters.audience
      );
    }

    setFilteredEvents(filtered);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }),
      year: date.getFullYear(),
    };
  };

  return (
    <div className="website-container">
      <section className="page-banner">
        <div className="placeholder-image">Events Banner</div>
        <div className="banner-overlay">
          <h1>School Events</h1>
          <p>Activities and Celebrations at Excellence Academy</p>
        </div>
      </section>

      <section className="events-filter">
        <div className="filter-options">
          <div className="filter-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="all">All Categories</option>
              <option value="cultural">Cultural</option>
              <option value="academic">Academic</option>
              <option value="sports">Sports</option>
              <option value="celebration">Celebration</option>
              <option value="competition">Competition</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="month">Month</label>
            <select
              name="month"
              value={filters.month}
              onChange={handleFilterChange}
            >
              <option value="all">All Months</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(2024, i, 1).toLocaleString("default", {
                    month: "long",
                  })}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="audience">Audience</label>
            <select
              name="audience"
              value={filters.audience}
              onChange={handleFilterChange}
            >
              <option value="all">Everyone</option>
              <option value="students">Students</option>
              <option value="parents">Parents</option>
              <option value="teachers">Teachers</option>
            </select>
          </div>
        </div>
      </section>

      <section className="events-list">
        {filteredEvents.length === 0 ? (
          <div className="no-events">
            <h3>No events found</h3>
            <p>Try adjusting your filters to see more events</p>
          </div>
        ) : (
          filteredEvents.map((event) => {
            const { day, month, year } = formatDate(event.date);
            return (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="event-day">{day}</span>
                  <span className="event-month">{month}</span>
                  <span className="event-year">{year}</span>
                </div>

                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p className="event-time">
                      <i className="fas fa-clock"></i>
                      {event.startTime} - {event.endTime}
                    </p>
                    <p className="event-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {event.location}
                    </p>
                    <p className="event-organizer">
                      <i className="fas fa-user"></i>
                      {event.organizer}
                    </p>
                  </div>
                  <p className="event-description">{event.description}</p>

                  <div className="event-tags">
                    <span className={`tag category-${event.category}`}>
                      {event.category}
                    </span>
                    <span className="tag audience">For: {event.audience}</span>
                    {event.registrationRequired && (
                      <span className="tag registration">
                        Registration Required
                      </span>
                    )}
                  </div>

                  <div className="event-actions">
                    {event.registrationRequired && (
                      <button className="btn btn-primary">Register Now</button>
                    )}
                    <button className="btn btn-secondary">
                      Add to Calendar
                    </button>
                    <button className="btn btn-outline">Share Event</button>
                  </div>
                </div>

                {event.image && (
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      <section className="upcoming-events">
        <div className="section-header">
          <h2>Calendar View</h2>
          <div className="section-divider"></div>
        </div>
        <div className="calendar-view">
          {/* Calendar implementation would go here */}
          <p className="text-center">Calendar feature coming soon!</p>
        </div>
      </section>
    </div>
  );
};

export default Events;
