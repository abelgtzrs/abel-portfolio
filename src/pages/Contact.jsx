import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Message:</label>
        <textarea name="message" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
