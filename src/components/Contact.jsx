import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djbfh2k",
        "template_bso4trh",
        form.current,
        "TDj-e8_hYKjnnDz63"
      )
      .then(() => {
        alert("Message envoyé !");
        form.current.reset();
      })
      .catch(() => {
        alert("Erreur lors de l’envoi.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Me contacter</h2>


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <input type="text" name="title" placeholder="Sujet" required />
        <textarea name="message" placeholder="Votre message" required />

        <button type="submit" className="btn-submit">Envoyer</button>
      </form>
      <div className="social-buttons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-btn">
            <div className="svg-wrapper">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8.8-.8-.8-.1-1.6-.4-2.2-.9-1.4-1.1-1.4-3.1-.1-4.3.4-.4.9-.7 1.4-.9-.1-.3-.2-.8-.2-1.2 0-1.2.4-2.1 1.1-2.8-.4-.9-.4-2 .1-3 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.4 2.9-1.1 2.9-1.1.5 1 .5 2.1.1 3 .7.7 1.1 1.6 1.1 2.8 0 .4-.1.9-.2 1.2.5.2 1 .5 1.4.9 1.3 1.2 1.3 3.2-.1 4.3-.6.5-1.4.8-2.2.9 0 0-.2.9.8.8 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.7 2.1-3.9 1.4v2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </div>
            <span>GitHub</span>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/axel-arnold-29452938b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-btn">
            <div className="svg-wrapper">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-8.3c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
              </svg>
            </div>
            <span>LinkedIn</span>
          </button>
        </a>
      </div>

    </section>
    
  );
}
