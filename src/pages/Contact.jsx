import { useState } from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation here if desired
    setSubmitted(true);

    // Optional: clear form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return ( 
    <motion.section className="contact-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 1, ease: 'easeInOut' }}>
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />

        <button type="submit">Send</button>
      </form>

      {submitted && (
        <div className="form-feedback">Message sent! I’ll get back to you soon</div>
      )}
    </section>
    </motion.section>
  );
}

export default Contact;
