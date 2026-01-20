
function Contact() {
  return (
    <div>
      <section id="contact-section">
        <div className="contact-container">
          <h1>Let's work together</h1>
          <p>
            If you'd like to get in touch, feel free to send me a message or
            connect through social media.
          </p>

          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> trongphuc221205@gmail.com</p>
              <p><i className="fas fa-phone"></i> +84 366 006 257</p>
              <p><i className="fas fa-map-marker-alt"></i> Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;