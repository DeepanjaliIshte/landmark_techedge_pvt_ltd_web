"use client";

import SiteHeader from "../components/SiteHeader";
import mobileAppImg from "../img/MobileApp.jpg";
import webdevImg from "../img/webdev.jpg";
import softdevImg from "../img/softdev.jpg";
import iotdevImg from "../img/IOTDev.jpg";
import plcAutoImg from "../img/PLCAUto.jpg";
import aidevImg from "../img/AIDev.jpg";

const services = [
  { 
    name: "Mobile Apps", 
    icon: "📱",
    description: "We are specialize in creating engaging applications across all platforms and devices for a multitude of enterprises from start-ups to global giants of all kinds focusing towards user acquisition and return on investment.",
    image: mobileAppImg.src
  },
  { 
    name: "Web Development", 
    icon: "🌐",
    description: "We develop web applications of any complexity that help companies small and large better manage pipelines, streamline mission critical business processes and drastically expand online sales growth.",
    image: webdevImg.src
  },
  { 
    name: "Software Development", 
    icon: "💻",
    description: "We believe that your business should not work around inflexibilities of your software. Whether you are building a CRM for lead management, an Ecommerce platform to generate sales - you need your software.",
    image: softdevImg.src
  },
  { 
    name: "IoT Development", 
    icon: "🔌",
    description: "We provide End to End Industrial IoT and Automation Systems using devices like Raspberry Pi, ESP8266, ESP32 also making custom based devices based on those controller and also Software Development",
    image: iotdevImg.src
  },
  { 
    name: "PLC Automation", 
    icon: "⚙️",
    description: "PLC is an industrial computer that monitors inputs and outputs to make decisions based on based on the program stored to the PLC's memory. The use of PLC's help to reduce human decision-making efforts to gain higher efficiency",
    image: plcAutoImg.src
  },
  { 
    name: "AI Development", 
    icon: "🤖",
    description: "The Artificial Intelligence transformation is rising in all enterprises to enhance customer experience and sales of the companies. AI is a software program developed to advance the process",
    image: aidevImg.src
  },
];

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const demoHref = "https://calendly.com/bizpluscrm/freedemo";

export default function ServicesPage() {
  return (
    <main>
     {/* <main>
      <div className="topbar">
        <div>
          <a href="tel:+917030323838">+91 70303 23838</a>
          <a href="tel:+919921388999">+91 99213 88999</a>
        </div>
        <div>
          <a href="https://www.facebook.com/landmarktechs/">Facebook</a>
          <a href="https://www.instagram.com/landmarktechedge/?hl=en">Instagram</a>
          <a href="https://x.com/LTechedge">X</a>
          <a href="https://in.linkedin.com/company/landmark-techedge-pvt-ltd">LinkedIn</a>
        </div>
      </div>
      */}

      <SiteHeader />

      <section className="services-hero">
        <div className="services-hero-content">
          <h2 className="animate__animated animate__fadeInDown">
            Our Services & Technology Stack
          </h2>
          <p>Innovative solutions for modern business challenges</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <div className="section-heading">
            <span className="eyebrow">Technology Excellence</span>
            <h2>Cutting-edge services tailored for your needs</h2>
            <p>
              From mobile and web applications to industrial automation and AI-powered solutions,
              we deliver comprehensive technology services designed to drive your business forward.
            </p>
          </div>

          <div className="services-extended-grid">
            {services.map((service) => (
              <div className="service-extended-card" key={service.name}>
                <div className="service-icon-wrapper">
                  <span className="service-icon-emoji" aria-hidden="true">{service.icon}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href="/#contact" className="service-link">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Get in touch with our team to discuss how our services can help you achieve your goals.</p>
          <div className="cta-buttons">
            <a href="/#products" className="button button-tertiary">Start Free Trial</a>
            <a href="/#contact" className="button button-primary">Book Free Demo</a>
            <a href={demoHref} className="button button-secondary">Request ERP Demo</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2>LandMark TechEdge</h2>
        <div>
          <a href="/Privacy.html">Privacy Policy</a>
          <a href="/Terms.html">Terms & Conditions</a>
          <a href="/Refund.html">Refund Policy</a>
        </div>
        <p>Copyright LandMark TechEdge Pvt. Ltd. All Rights Reserved.</p>
      </footer>

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span>WhatsApp</span>
        <strong>Chat Now</strong>
      </a>
    </main>
  );
}
