import { send } from "emailjs-com"; // import EmailJS library
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import send_message_sound from "../assets/audios/send_message.mp3";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send("service_1rf0dxo", "template_dzyhmgr", formData, "YnozC7859R6X7IA55")
      .then((response) => {
        Swal.fire({
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out! We'll get back to you shortly.",
          icon: "success",
          customClass: {
            popup: "my-popup",
            title: "swal2-title",
            content: "swal2-content",
            icon: "swal2-icon",
            confirmButton: "swal-button",
          },
        });
        const send_message_audio = new Audio(send_message_sound);
        send_message_audio.volume = 0.3;
        send_message_audio.play();
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          budget: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("There was an issue with sending your message.");
      });
  };

  return (
    <div className="form-wrapper">
      <h1>Let's Work Together!</h1>
      <form onSubmit={handleSubmit}>
        <div className="top-inputs">
          <input
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          placeholder="Your Budget (optional)"
          type="text"
          className="budget-input"
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
        />
        <input
          placeholder="Message"
          type="text"
          className="message-input"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          <span>SEND</span> <FaEnvelope id="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
