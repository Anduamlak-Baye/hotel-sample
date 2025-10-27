/*
Modern-Minimalist Hotel Landing - React (CSS version)

- Pure JavaScript (no TypeScript)
- Uses plain CSS (no Tailwind)
- Minimal and clean look

Setup:
1. Create a React app (Vite or CRA)
2. Replace App.jsx with this file
3. Create an App.css file with the styles below
4. Import './App.css' at the top of this component
*/

import React from 'react';
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
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img className="logo-img" src='/logo.png'></img>
          <h3>{site.name}</h3>

        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" style={{ backgroundImage: `url(${site.heroImage})` }}>
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

      <section id="about" className="about">
        <h2>{site.about.title}</h2>
        <p>{site.about.body}</p>
      </section>

      <section id="rooms" className="rooms">
        <h2>Rooms & Rates</h2>
        <div data-aos='fade-up' className="room-grid">
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

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div data-aos='fade-in' className="gallery-grid">
          {site.gallery.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} />
          ))}
        </div>
      </section>

      <section data-aos='slide-up' id="contact" className="contact">
        <h2>Contact</h2>
        <p>Address: {site.contact.address}</p>
        <p>Phone: {site.contact.phone}</p>
        <p>Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
        <a href={site.contact.whatsapp} className="btn-primary">WhatsApp</a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} {site.name} — Built with care.</footer>
    </div>
  );
}
// and for the same and at the same time they would like to say the sam stu