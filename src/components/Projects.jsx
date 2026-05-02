import React from "react";

import hotel from "../assets/mes_projets/hotel.png";
import login from "../assets/mes_projets/login.png";
import todo from "../assets/mes_projets/todo.png";
import eliza from "../assets/mes_projets/eliza.png";

export default function Projects() {
  const projects = [
    {
      name: "Site Hôtel",
      img: hotel,
      desc: "Mon premier site que j'ai fait !",
      link: "assets/mes_projets/hotel/index.html",   // 🔥 corrigé
    },
    {
      name: "Page Login",
      img: login,
      desc: "Un projet pour m'entraîner au CSS.",
      link: "assets/mes_projets/login/index.html",   // 🔥 corrigé
    },
    {
      name: "To‑Do List",
      img: todo,
      desc: "Projet React fait à Epitech en groupe.",
      download: "assets/mes_projets/to-do-list.zip", // 🔥 corrigé
    },
    {
      name: "Eliza",
      img: eliza,
      desc: "Chatbot React + Python réalisé pour une entreprise.",
      download: "assets/mes_projets/eliza.zip",      // 🔥 corrigé
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Mes Projets</h2>

      <div className="projects-carousel">
        <div className="projects-track">
          {[...projects, ...projects].map((p, index) => (
            <div key={index} className="project-card">
              <img src={p.img} alt={p.name} className="project-img" />

              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              {p.link && (
                <a
                  href={p.link}
                  className="btn primary"
                  style={{ marginTop: "10px" }}
                  target="_blank"              // 🔥 ouvre dans un nouvel onglet
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
              )}

              {p.download && (
                <a
                  href={p.download}
                  download
                  className="btn ghost"
                  style={{ marginTop: "10px" }}
                >
                  Télécharger
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
