import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "trongphuc221205@gmail.com",
    href: "mailto:trongphuc221205@gmail.com",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+84 366 006 257",
    href: "tel:+84366006257",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
  },
];

const INITIAL_FORM: FormData = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Replace with your actual endpoint (e.g. EmailJS, Formspree, etc.)
      await new Promise<void>((resolve) => setTimeout(resolve, 1500)); // mock
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

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
            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Your Name"
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
                  aria-label="Your Email"
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>

              <div
                className={`form-group ${errors.message ? "has-error" : ""}`}
              >
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your Message"
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
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-feedback error">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Info */}
            <div className="contact-info">
              {CONTACT_INFO.map((item) => (
                <p key={item.label}>
                  <i className={item.icon} />
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    item.value
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;