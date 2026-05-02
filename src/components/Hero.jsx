import React from "react";
import heroImg from "../assets/IMG_1744.png";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <p className="hero-tag">Axel ARNOLD</p>

        <h1 className="hero-title">
          Étudiant 
          <span className="accent"> Epitech</span>.
        </h1>

        <p className="hero-subtitle">
          Étudiant à Epitech en première année de bachelor
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn ghost">
            Me contacter
          </a>

          <a href="/cv.pdf" download className="btn primary cv-btn">
            Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="avatar" />
      </div>
    </section>
  );
}
