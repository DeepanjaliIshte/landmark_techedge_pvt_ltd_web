export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="contact-panel">
          <div className="section-heading" style={{ alignItems: "flex-start", textAlign: "left", marginBottom: 16 }}>
            <h2>Contact</h2>
          </div>

          <div className="info" style={{ marginTop: 12 }}>
            <div className="address">
              <h4>Location:</h4>
              <p>Dhruta Complex, 104 &amp; 105, NC Kelkar Road, Narayan Peth, Pune, Maharashtra 411030</p>
            </div>

            <div className="phone" style={{ marginTop: 18 }}>
              <h4>Contact Us:</h4>
              <p>+91 70303 23838<br/>+91 99213 88999</p>
            </div>

            <div style={{ marginTop: 18 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520!5m2!1sen!2sin"
                title="LandMark TechEdge location"
                style={{ border: 0, width: '100%', height: 290 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <form className="contact-form">
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
    </section>
  );
}
