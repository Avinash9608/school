// import React from 'react';
// import '../Website.css';
// import './Academics.css';

// const Examinations = () => {
//   return (
//     <div className="website-container">
//       <section className="page-banner">
//         <div className="placeholder-image">Examinations Banner</div>
//         <div className="banner-overlay">
//           <h1>Examinations</h1>
//           <p>Assessment and Evaluation System</p>
//         </div>
//       </section>

//       <section className="content-section">
//         <div className="section-header">
//           <h2>Examination System</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="content-container">
//           <p>Our comprehensive examination system ensures fair and thorough assessment of students' academic progress.</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Examinations;
import React from "react";
import "../Website.css";
import "./Academics.css";

const exams = [
  {
    title: "Formative Assessments",
    description:
      "Regular class tests, assignments, and activities conducted throughout the year to assess day-to-day learning.",
    image:
      "https://img.freepik.com/free-photo/children-doing-homework_1098-12695.jpg",
  },
  {
    title: "Summative Examinations",
    description:
      "Held at the end of each term to evaluate overall academic achievement based on the full syllabus.",
    image:
      "https://img.freepik.com/free-photo/children-writing-exam-school_23-2148888954.jpg",
  },
  {
    title: "Subject Enrichment",
    description:
      "Practical work, lab activities, oral tests, and projects are part of holistic evaluation.",
    image:
      "https://img.freepik.com/free-photo/laboratory-students-experiment_23-2148895680.jpg",
  },
  {
    title: "Report Cards",
    description:
      "Detailed report cards are issued after every term, highlighting academic and co-curricular performance.",
    image:
      "https://img.freepik.com/free-photo/teacher-handing-report-card-student_23-2148756856.jpg",
  },
  {
    title: "Parent-Teacher Meetings",
    description:
      "PTMs are held after every exam cycle to ensure healthy communication between teachers and parents.",
    image:
      "https://img.freepik.com/free-photo/father-daughter-talking-with-teacher_23-2148915032.jpg",
  },
  {
    title: "Promotion Policy",
    description:
      "Students are promoted based on cumulative academic performance, attendance, and behavior.",
    image:
      "https://img.freepik.com/free-photo/graduation-cap-books-blue-background_23-2149762222.jpg",
  },
];

const Examinations = () => {
  return (
    <div className="website-container">
      <section className="page-banner">
        <div className="placeholder-image exam-banner">
          <img
            src="https://img.freepik.com/free-photo/high-angle-kids-writing-desk_23-2148921975.jpg"
            alt="Examination Banner"
            className="banner-img"
          />
        </div>
        <div className="banner-overlay">
          <h1>Examinations</h1>
          <p>Assessment and Evaluation System</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Examination System</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-container">
          <p>
            Our school follows a structured and inclusive assessment system that
            caters to continuous evaluation of students' knowledge, skills, and
            values. Through formative and summative exams, we aim to foster
            academic excellence while supporting individual growth.
          </p>
        </div>

        <div className="exam-grid">
          {exams.map((exam, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-image">
                <img src={exam.image} alt={exam.title} />
              </div>
              <div className="exam-content">
                <h3>{exam.title}</h3>
                <p>{exam.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Examinations;
