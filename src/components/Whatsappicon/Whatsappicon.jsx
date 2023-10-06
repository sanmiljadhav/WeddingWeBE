import React from "react";
import whatsappicon from "../../assets/whatsappicon/whatappp.png";
import "./whatsapp.css";

export default function Whatsappicon() {
  const handleWhatsappIconClick = () => {
    const phoneNumber = "9552705890"; // Replace with your WhatsApp phone number
    const message = "Hello, I want to chat!"; // Replace with your desired message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div className="whatsapp-float">
      <img src={whatsappicon} alt="" onClick={handleWhatsappIconClick} />
    </div>
  );
}



