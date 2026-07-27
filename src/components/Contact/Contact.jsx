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
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    errors.message = "Please write a short message.";
  }

  return errors;
}

function getRevealStyle(delay) {
  return { "--contact-delay": `${delay}ms` };
}

function FormField({
  id,
  label,
  name,
  type = "text",
  value,
  error,
  autoComplete,
  multiline = false,
  onChange,
}) {
  const describedBy = error ? `${id}-error` : undefined;

  const controlClasses = `
    block w-full border-0 border-b bg-transparent px-0 pb-2 pt-[10px]
    font-primary text-[19px] font-normal leading-[1.4] text-[#403e3c]
    outline-none transition-[border-color,box-shadow] duration-250
    hover:border-[#bcb5ae] focus:border-[#b68d69]
    focus:shadow-[0_1px_0_#b68d69] max-[600px]:text-[18px]
    ${error ? "border-[#a45858]" : "border-[#cbc8c5]"}
  `;

  return (
    <div className="relative mb-[27px] flex w-full flex-col max-[1024px]:mb-[23px] max-[600px]:mb-6">
      <label
        htmlFor={id}
        className="m-0 font-primary text-[17px] font-normal uppercase leading-none tracking-[0.065em] text-[#555351] max-[600px]:text-[15px]"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${controlClasses} min-h-[105px] resize-y pt-[14px] max-[1024px]:min-h-[90px] max-[600px]:min-h-[100px]`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={controlClasses}
        />
      )}

      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 block text-[11px] leading-[1.4] text-error [font-family:Arial,Helvetica,sans-serif]"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.16,
    rootMargin: "0px 0px -60px",
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
      aria-labelledby="contact-heading"
      className={`contact-reveal-scope section-shell w-full overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container grid min-h-[704px] grid-cols-2 max-[1280px]:min-h-[660px] max-[1024px]:min-h-[620px] max-[850px]:min-h-0 max-[850px]:grid-cols-1">
        <div className="contact-panel-reveal flex min-h-[704px] min-w-0 flex-col justify-center bg-surface px-[clamp(48px,5vw,74px)] py-[62px] max-[1280px]:min-h-[660px] max-[1280px]:px-[50px] max-[1280px]:py-[55px] max-[1024px]:min-h-[620px] max-[1024px]:px-10 max-[1024px]:py-12 max-[850px]:row-start-2 max-[850px]:min-h-0 max-[850px]:px-[58px] max-[850px]:pb-[60px] max-[850px]:pt-[62px] max-[600px]:px-[27px] max-[600px]:pb-[46px] max-[600px]:pt-[50px] max-[380px]:px-5 max-[380px]:pb-[42px] max-[380px]:pt-11">
          <header className="w-full text-left">
            <p
              style={getRevealStyle(180)}
              className="contact-content-reveal section-eyebrow text-left"
            >
              Contact
            </p>

            <h2
              id="contact-heading"
              style={getRevealStyle(270)}
              className="contact-content-reveal section-title max-w-[475px] text-left leading-[0.98] max-[1280px]:max-w-[430px] max-[850px]:max-w-[560px]"
            >
              Let&apos;s Create Something Beautiful
            </h2>

            <p
              style={getRevealStyle(350)}
              className="contact-content-reveal mb-0 mt-[23px] max-w-[460px] font-primary text-[21px] font-normal leading-[1.38] text-[#686562] max-[1200px]:text-[19px] max-[850px]:max-w-[560px] max-[600px]:mt-5 max-[600px]:text-[17px] max-[380px]:text-[16px]"
            >
              Share the story of your celebration, your wedding date, and the
              meaningful moments you would love to preserve through timeless
              photographs.
            </p>
          </header>

          <form
            noValidate
            onSubmit={handleSubmit}
            style={getRevealStyle(440)}
            className="contact-content-reveal mt-[49px] flex w-full max-w-[485px] flex-col max-[1280px]:mt-11 max-[1280px]:max-w-[450px] max-[1024px]:mt-[39px] max-[850px]:mt-[47px] max-[850px]:max-w-full max-[600px]:mt-10 max-[380px]:mt-9"
          >
            <FormField
              id="contact-name"
              label="Name"
              name="name"
              value={formData.name}
              error={errors.name}
              autoComplete="name"
              onChange={handleChange}
            />

            <FormField
              id="contact-email"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              autoComplete="email"
              onChange={handleChange}
            />

            <FormField
              id="contact-message"
              label="Tell Me About Your Day"
              name="message"
              value={formData.message}
              error={errors.message}
              multiline
              onChange={handleChange}
            />

            <button
              type="submit"
              className="mt-px inline-flex min-h-[68px] min-w-[181px] cursor-pointer items-center justify-center self-start border border-transparent bg-accent-soft px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] max-[380px]:min-w-[150px] motion-reduce:transform-none"
            >
              Send Inquiry
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mb-0 mt-2.5 min-h-[17px] text-[11px] leading-[1.4] text-[#947253] [font-family:Arial,Helvetica,sans-serif]"
            >
              {statusMessage}
            </p>
          </form>
        </div>

        <figure className="contact-media-reveal relative m-0 min-h-[704px] min-w-0 overflow-hidden bg-[#ded8cf] max-[1280px]:min-h-[660px] max-[1024px]:min-h-[620px] max-[850px]:row-start-1 max-[850px]:min-h-0 max-[850px]:aspect-[5/4] max-[600px]:aspect-[4/4.4]">
          <img
            src={contactImage}
            alt="An engaged couple sharing a quiet moment beside a lake"
            loading="lazy"
            decoding="async"
            className="contact-image-reveal h-full min-h-[704px] w-full object-cover object-center max-[1280px]:min-h-[660px] max-[1024px]:min-h-[620px] max-[850px]:min-h-0 max-[850px]:object-[center_42%] max-[600px]:object-center"
          />
        </figure>
      </div>
    </section>
  );
}