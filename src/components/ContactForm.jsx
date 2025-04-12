import React, { useState } from "react";
import { send } from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import send_message_sound from "../assets/audios/send_message.mp3";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("There was an issue with sending your message.");
      });
  };

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 50, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 1000,
        damping: 100,
      }}
      viewport={{ once: true }}
    >
      <h1>Let's Work Together!</h1>
      <form onSubmit={handleSubmit}>
        <div className="top-inputs">
          <input
            placeholder="First Name *"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Last Name *"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Email Address *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Phone Number *"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <input
          placeholder="Subject *"
          type="text"
          className="subject-input"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Message *"
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
    </motion.div>
  );
};

export default ContactForm;
