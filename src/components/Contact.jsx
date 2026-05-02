import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_djbfh2k",      // ✔️ ton Service ID
      "template_bso4trh",     // ✔️ ton Template ID
      form.current,
      "TDj-e8_hYKjnnDz63"     // ✔️ ta Public Key
    )
    .then(() => {
      alert("Message envoyé !");
      form.current.reset();   // 🔥 Vide tous les champs après l’envoi
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
    </section>
  );
}
