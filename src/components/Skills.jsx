import React from "react";

const skills = [
  "JavaScript",
  "React / Vite",
  "HTML / CSS",
  "GitHub",
  "Python",
  "Docker",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Compétences</h2>
      <p className="section-text center">
        Les compétences acquises et en cours d'apprentissage.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
