"use client";

import { useState } from "react";

const services = [
  "SAP Business One",
  "ERP Solutions",
  "Cloud Infrastructure",
  "Data Backup & Recovery",
  "Healthcare Solutions",
  "Manufacturing ERP",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Other"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // For now we just mock success
    setStatus("success");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="contact-form-wrapper">
      {status === "success" ? (
        <div className="contact-success">
          <div className="success-icon" aria-hidden="true" />
          <h3>Thank You!</h3>
          <p>Your message has been received successfully. One of our experts will get back to you shortly.</p>
          <button className="button button-secondary" onClick={() => setStatus("idle")}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Full Name *
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Company Name
              <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>
          </div>
          
          <div className="form-row">
            <label>
              Email Address *
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Service Interested In *
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </label>

          <label>
            Message *
            <textarea name="message" rows={6} value={formData.message} onChange={handleChange} required />
          </label>

          <div className="form-actions">
            <button className="button button-primary" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            <button className="button button-secondary" type="button" onClick={handleReset} disabled={status === "submitting"}>
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
