import React from "react";
import "./footer.css"
import { FaInstagram, FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const contacts = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="contactIcon" />,
      link: "https://wa.me/1234567890",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="contactIcon" />,
      link: "https://instagram.com/your_account",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="contactIcon" />,
      link: "https://t.me/your_account",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="contactIcon" />,
      link: "mailto:yourmail@example.com",
    },
  ];

  return (
    <footer className="footerContainer">
      <div className="footerWave"></div>
      <h2 className="footerTitle">BloomVerse 🌸</h2>
      <p className="footerSubtitle">Место, где цветы оживают и шепчут свои истории</p>

      <div className="contactList">
        {contacts.map((c) => (
          <div
            key={c.name}
            className="contactItem"
            onClick={() => window.open(c.link, "_blank")}
            title={`Перейти в ${c.name}`}
          >
            {c.icon}
            <span>{c.name}</span>
          </div>
        ))}
      </div>

      <p className="footerCopy">
        © 2026 BloomVerse. Все права защищены. Сделано с любовью 🌸
      </p>
    </footer>
  );
}
