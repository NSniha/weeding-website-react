import { useState } from "react";

import contactImage from "../../assets/images/contact-couple.png";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./contact.css";

const CONTACT_EMAIL = "hello@tessamorgan.com";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function validateForm(formData) {
  const validationErrors = {};

  if (!formData.name.trim()) {
    validationErrors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    validationErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    validationErrors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    validationErrors.message = "Please write a short message.";
  }

  return validationErrors;
}

export default function Contact() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.16,
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setStatusMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage("");
      return;
    }

    const subject = encodeURIComponent(
      `Wedding photography inquiry from ${formData.name}`,
    );

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    setStatusMessage("Your email application is opening.");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      ref={elementRef}
      className={`contact-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className="contact-section__container">
        <div className="contact-section__form-panel">
          <header className="contact-section__header">
            <p className="contact-section__eyebrow contact-reveal">
              Contact
            </p>

            <h2
              id="contact-heading"
              className="contact-section__heading contact-reveal"
            >
              Let&apos;s Create Something Beautiful
            </h2>

            <p className="contact-section__intro contact-reveal">
              Tell me a little about your celebration, your date, and the
              moments you would love to preserve.
            </p>
          </header>

          <form
            className="contact-form contact-reveal"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-form__field">
              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
              />

              {errors.name && (
                <span
                  id="contact-name-error"
                  className="contact-form__error"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
              />

              {errors.email && (
                <span
                  id="contact-email-error"
                  className="contact-form__error"
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-form__field contact-form__field--message">
              <label htmlFor="contact-message">
                Tell Me About Your Day
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />

              {errors.message && (
                <span
                  id="contact-message-error"
                  className="contact-form__error"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="contact-form__button"
            >
              Send Inquiry
            </button>

            <p
              className="contact-form__status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          </form>
        </div>

        <figure className="contact-section__media">
          <img
            src={contactImage}
            alt="An engaged couple sharing a quiet moment beside a lake"
            className="contact-section__image"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}