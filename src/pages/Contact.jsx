import { useState } from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) return;
  
    setSubmitted(true);
  
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
      setErrors({});
    }, 3000);
  };
  

  return ( 
    <motion.section className="contact-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 1, ease: 'easeInOut' }}>
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="input-error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="input-error">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />
        {errors.name && <p className="input-error">{errors.message}</p>}

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
