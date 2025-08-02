import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert("Message Send Successfully")
  };

  return (
    <>
       <div
        className="navLinks"
        style={{ alignContent: "end", justifyContent: "end", padding: "20px" }}
      >
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/about" className="navItem">
          About
        </Link>
        <Link to="/contact" className="navItem">
          Contact
        </Link>
      </div>
    <section className="contact-section" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📞 Contact Us</h2>

      <div style={{ marginBottom: '2rem' }}>
        <p><strong>Email:</strong> support@shoppin.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Address:</strong> 123, Market Street, Delhi, India</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' , backgroundColor:"white", color:"black" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', fontSize: '1rem', backgroundColor:"white", color:"black" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: '0.5rem', fontSize: '1rem' , backgroundColor:"white", color:"black" }}
        />

        <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </section>
    </>
  );
};

export default Contact;
