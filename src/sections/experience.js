import { useState } from "react";
import "./sections.css";

export const Experience = () => {
  const [active, setActive] = useState("Teacher's Assistant");

  const experiences = {
    "Teacher's Assistant": {
      title: "Teacher's Assistant",
      company: "Northeastern University",
      period: "Sept 2024 – Dec 2024",
      bullets: [
        "Hosted solo/group office hours during the week. Helped students with GitHub, design, testing, and debugging issues.",
        "Graded ~ 30 unique assignments per week, providing detailed feedback to help students improve their coding skills.",
        "Proctored and manually graded exams for classes of 100+ students, ensuring academic integrity and fairness.",
      ],
    },
    "Pharmacy Technician": {
      title: "Pharmacy Intern Co-op/Per-Diem Pharmacy Technician",
      company: "New England Baptist Hospital, Inpatient Pharmacy",
      period: "May 2021 – Aug 2023",
      bullets: [
        "Maintained and conducted inventory of Pyxis MedStations.",
        "Prepared sterile IV admixtures following the USP <797> and <800> guidelines.",
        "Communicated with nurses and inpatient staff and resolved problems ranging from available products, discrepancies, and missing doses.",
      ],
    },
    "Pharmacy Technician 2": {
      title: "Pharmacy Technician",
      company: "Beth Israel Layhey Health, Outpatient Pharmacy",
      period: "Jan 2022 – April 2022",
      bullets: [
        "Led a Quality Improvement (QI) Project focusing on how to improve the efficiency and communication throughout the pharmacy workflow.",
        "Interacted with patients in the outpatient setting dispensing prescriptions, processing insurance claims, counseling patients, and interacting with prescribers when appropriate.",
        "Assisted Med-to-Bed program with delivering medications to patients, communicating with discharge coordinators, and patients to ensure adherence.",
        "Worked with specialty pharmacy liaisons for prior authorizations, requesting refills and renewals, and employing copay assistance programs and discount pricing programs.",
        "Utilized patient medical records to review medication profiles and researched medications using various drug information resources.",
      ],
    },
  };

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <nav className="experience-nav">
        <ul>
          {Object.keys(experiences).map((role) => (
            <li
              key={role}
              className={`experience-nav-item ${
                active === role ? "active" : ""
              }`}
              onClick={() => setActive(role)}
            >
              {role}
            </li>
          ))}
        </ul>
      </nav>

      <div className="experience-content">
        <h3>{experiences[active].title}</h3>
        <p>
          <strong>{experiences[active].company}</strong> •{" "}
          {experiences[active].period}
        </p>
        <ul>
          {experiences[active].bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
