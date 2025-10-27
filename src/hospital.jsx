import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hospital.css";

const HospitalLandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="hospital-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content" data-aos="fade-up">
          <h1>Compassionate Care, Modern Medicine</h1>
          <p>
            Healing Hands Hospital delivers expert healthcare with modern
            facilities and dedicated professionals.
          </p>
          <a href="#contact" className="btn-primary">
            Book Appointment
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container" data-aos="fade-up">
          <h2>About Our Hospital</h2>
          <p>
            With over 25 years of experience, we provide top-quality,
            patient-centered care. Our mission is to combine compassion and
            innovation to ensure your health and comfort.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 data-aos="fade-up">Our Services</h2>
          <div className="service-grid">
            <div className="service-card" data-aos="fade-right">
              <img src="https://cdn-icons-png.flaticon.com/512/2966/2966485.png" alt="Cardiology" />
              <h3>Cardiology</h3>
              <p>
                Advanced heart care with state-of-the-art diagnostic and
                treatment options.
              </p>
            </div>

            <div className="service-card" data-aos="fade-up">
              <img src="https://cdn-icons-png.flaticon.com/512/2966/2966500.png" alt="Pediatrics" />
              <h3>Pediatrics</h3>
              <p>
                Comprehensive care for infants, children, and adolescents in a
                friendly environment.
              </p>
            </div>

            <div className="service-card" data-aos="fade-left">
              <img src="https://cdn-icons-png.flaticon.com/512/2966/2966467.png" alt="Surgery" />
              <h3>General Surgery</h3>
              <p>
                Experienced surgeons and modern operation theatres for precise
                and safe procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in touch to book an appointment or ask a question.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Healing Hands Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HospitalLandingPage;
