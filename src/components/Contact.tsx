import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Enter a valid email.";
    }

    if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;
    if (status === "sending") return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing EmailJS config");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Trọng Phúc",
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY,
      );

      setStatus("success");
      setFormData(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact-section">
      <div className="contact-container">
        <h1>Let's work together</h1>
        <p>If you'd like to get in touch, feel free to send me a message.</p>

        <div className="contact-content">
          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${errors.name ? "has-error" : ""}`}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="field-error">{errors.name}</span>
              )}
            </div>

            <div className={`form-group ${errors.email ? "has-error" : ""}`}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>

            <div className={`form-group ${errors.message ? "has-error" : ""}`}>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="field-error">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-feedback success">
                Message sent! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-feedback error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* INFO */}
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope" />
              <a href="mailto:trongphuc221205@gmail.com">
                trongphuc221205@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone" />
              <a href="tel:+84366006257">+84 366 006 257</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt" />
              Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
