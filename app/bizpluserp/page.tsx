"use client";

import logo from "../img/LTPLLogo.png";
import bizplusLogo from "../img/bizplus ERP.png";
import SiteHeader from "../components/SiteHeader";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

export default function BizPlusErpPage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero hero-blue">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Automate Your Business</span>
            <h1>From Leads to Revenue<br/>With Smart Automation System</h1>
            <p>
              Built for growing businesses doing ₹1Cr+ revenue. Eliminate manual work, increase conversions, and gain complete
              control with BizPlus Business Automation System.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start Free Trial</a>
              <a className="button button-secondary" href="#contact">Get Free Business Audit</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <img src={bizplusLogo.src} alt="BizPlus ERP" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2>About BizPlus ERP</h2>
          <p>
            BizPlus ERP is a powerful business automation platform by Landmark Techedge Pvt. Ltd. built for companies aiming to scale beyond
            ₹1Cr+ revenue. It centralizes sales, CRM, finance, inventory, and operations into a single system, enabling better visibility and
            faster decision-making. With automation at its core, BizPlus reduces manual effort, improves team productivity, and enhances
            customer conversion rates.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28 }}>
            <div>
              <h3>Our Mission</h3>
              <p>To provide businesses with intelligent, scalable, and user-friendly ERP solutions that empower them to optimize operations and achieve sustainable growth.</p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>To be a trusted partner for businesses in India, delivering advanced, scalable, and reliable ERP solutions that help improve productivity and streamline operations.</p>
            </div>
          </div>

          <h3 style={{ marginTop: 32 }}>What Changes After Implementing BizPlus</h3>
          <ul style={{ marginTop: 12, lineHeight: 1.8 }}>
            <li>Never lose a lead again</li>
            <li>Automated follow-ups and reminders</li>
            <li>Complete visibility of your sales pipeline</li>
            <li>Real-time reports for better decision making</li>
            <li>Streamlined operations from enquiry to billing</li>
            <li>Better team productivity and accountability</li>
          </ul>

          <h3 style={{ marginTop: 28 }}>AI POWERED ANALYTICS — Meet BizPlus AI</h3>
          <p>
            BizPlus AI Assistant helps you get instant insights from your business data. Ask questions, get summaries, generate reports, and
            receive guided recommendations — right inside the BizPlus ERP dashboard.
          </p>

          <h3 style={{ marginTop: 28 }}>Features (selected)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginTop: 12 }}>
            {[
              'CEO Dashboards',
              'Enquiry & Lead Management',
              'Quotation & Invoicing',
              'Inventory & Stock Transfer',
              'Expense & Cashbook',
              'Complaint & AMC Management',
              'WhatsApp & Email Integrations',
              'Payments (Razorpay, Instamojo)'
            ].map((f) => (
              <div key={f} className="impact-card" style={{ padding: 18 }}>
                <h4 style={{ margin: 0 }}>{f}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" style={{ padding: '56px 24px', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div className="section-heading">
              <h2>Contact</h2>
            </div>

            <div className="info" style={{ marginTop: 12 }}>
              <div className="address">
                <h4>Location:</h4>
                <p>Dhruta Complex, Office 104 &amp; 105, Narayan Peth, Pune, Maharashtra.</p>
              </div>

              <div className="phone" style={{ marginTop: 18 }}>
                <h4>Contact Us:</h4>
                <p>+91 70303 23838<br/>+91 99213 88999</p>
              </div>

              <div style={{ marginTop: 18 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520"
                  title="LandMark TechEdge location"
                  style={{ border: 0, width: '100%', height: 290 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label>
                Your Name
                <input type="text" name="name" required />
              </label>
              <label>
                Your Email
                <input type="email" name="email" required />
              </label>
              <label>
                Subject
                <input type="text" name="subject" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={7} required />
              </label>
              <button className="button button-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp" />
    </main>
  );
}
