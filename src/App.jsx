import React, { useState } from 'react';
import './App.css';

const site = {
  name: 'Sample For Hotel 1',
  tagline: 'A calm stay in the heart of the city',
  heroImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop&sat=-20',
  about: {
    title: 'Modern comfort, minimal design',
    body: 'Sample For Hotel 1 blends contemporary minimalism with warm hospitality. Each room is designed for clarity, calm, and restful sleep — just steps away from the city\'s best attractions.',
  },
  rooms: [
    {
      name: 'Deluxe Room',
      price: 'From $55/night',
      desc: 'Spacious room with king bed, city view, and fast Wi-Fi.',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop&sat=-20',
    },
    {
      name: 'Suite',
      price: 'From $95/night',
      desc: 'Open-plan suite with lounge area and premium amenities.',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop&sat=-20'
    },
    {
      name: 'Standard',
      price: 'From $40/night',
      desc: 'Cozy and efficient room for the smart traveler.',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop&sat=-20'
    }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop&sat=-20',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop&sat=-20',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop&sat=-20',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop&sat=-20',
  ],
  contact: {
    phone: '+251 9xx xxx xxx',
    email: 'hello@luminous.example',
    address: 'Banquet Square, Addis Ababa',
    mapLink: 'https://maps.google.com',
    whatsapp: 'https://wa.me/2519xxxxxxxx',
  },
};

export default function HotelLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img className="logo-img" src="/logo.png" alt="logo" />
          <h3>{site.name}</h3>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${site.heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-outline">Contact</a>
            <a href="#rooms" className="btn-primary">View Rooms</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>{site.about.title}</h2>
        <p>{site.about.body}</p>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms">
        <h2>Rooms & Rates</h2>
        <div className="room-grid">
          {site.rooms.map((room) => (
            <div key={room.name} className="room-card">
              <img src={room.img} alt={room.name} />
              <div className="room-info">
                <h3>{room.name}</h3>
                <p>{room.desc}</p>
                <span>{room.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {site.gallery.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Address: {site.contact.address}</p>
        <p>Phone: {site.contact.phone}</p>
        <p>Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
        <a href={site.contact.whatsapp} className="btn-primary">WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} {site.name} — Built with care.
      </footer>
    </div>
  );
}
