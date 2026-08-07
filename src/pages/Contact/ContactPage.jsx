import { useState } from "react";

import contactBrideImage from "../../assets/images/contact-bride.png";
import contactDetailsImage from "../../assets/images/contact-details.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./contact-page.css";

const initialFormData = {
  name: "",
  phone: "",
  eventDate: "",
  message: "",
};

const contactItems = [
  {
    id: 1,
    type: "email",
    title: "Email",
    lines: ["contact@TessaMorgan.xyz"],
    href: "mailto:contact@TessaMorgan.xyz",
  },
  {
    id: 2,
    type: "location",
    title: "Address",
    lines: ["5396 North Reese Avenue,", "Fresno CA 93722"],
    href: "https://www.google.com/maps/search/?api=1&query=5396+North+Reese+Avenue+Fresno+CA+93722",
  },
  {
    id: 3,
    type: "phone",
    title: "Contact",
    lines: ["+1 901 247 5467"],
    href: "tel:+19012475467",
  },
];

const buttonClasses =
  "inline-flex min-h-[68px] min-w-[181px] cursor-pointer items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none tracking-[0.12em] text-[#504d4a] transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none";

function getRevealStyle(delay) {
  return {
    "--contact-delay": `${delay}ms`,
  };
}

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-[47px] w-[47px] stroke-current max-[600px]:h-[42px] max-[600px]:w-[42px]"
      >
        <rect
          x="7"
          y="11"
          width="34"
          height="26"
          rx="1"
          strokeWidth="1.6"
        />

        <path d="M8 13L24 27L40 13" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-[50px] w-[50px] stroke-current max-[600px]:h-[44px] max-[600px]:w-[44px]"
      >
        <path
          d="M37 19.5C37 30 24 41 24 41S11 30 11 19.5C11 12.04 16.82 6 24 6C31.18 6 37 12.04 37 19.5Z"
          strokeWidth="1.7"
        />

        <circle cx="24" cy="19" r="4" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-[50px] w-[50px] stroke-current max-[600px]:h-[44px] max-[600px]:w-[44px]"
    >
      <rect
        x="14"
        y="5"
        width="20"
        height="38"
        rx="1.5"
        strokeWidth="1.7"
      />

      <path d="M18 10H30" strokeWidth="1.7" />
      <path d="M21 38H27" strokeWidth="1.7" />
    </svg>
  );
}

function ContactHeading() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="contact-page-heading"
      className={`contact-reveal-scope contact-heading-section overflow-hidden bg-white py-[88px] max-[1280px]:py-[82px] max-[1024px]:py-[76px] max-[768px]:py-[68px] max-[600px]:py-[60px] max-[480px]:py-[54px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(80)}
            className="contact-reveal section-eyebrow"
          >
            Contact
          </p>

          <h1
            id="contact-page-heading"
            style={getRevealStyle(180)}
            className="contact-reveal section-title uppercase"
          >
            Get in Touch
          </h1>
        </header>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { elementRef, isVisible } = useRevealOnScroll();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your contact number.";
    }

    if (!formData.eventDate) {
      nextErrors.eventDate = "Please select your event date.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell me a little about your event.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("success");
    setFormData(initialFormData);
  };

  return (
    <section
      ref={elementRef}
      aria-label="Contact enquiry form"
      className={`contact-reveal-scope contact-form-section overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="contact-form__layout grid w-full grid-cols-2 overflow-hidden max-[820px]:grid-cols-1">
          <div
            style={getRevealStyle(100)}
            className="contact-reveal contact-reveal--left flex min-h-[700px] w-full min-w-0 items-center bg-[#f4f4f4] px-[82px] py-[72px] max-[1280px]:min-h-[650px] max-[1280px]:px-[65px] max-[1100px]:px-[52px] max-[900px]:px-[42px] max-[820px]:min-h-0 max-[820px]:px-[60px] max-[820px]:py-[70px] max-[600px]:px-[34px] max-[600px]:py-[58px] max-[480px]:px-[24px]"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full"
            >
              <div
                style={getRevealStyle(220)}
                className="contact-reveal"
              >
                <label
                  htmlFor="contact-name"
                  className="contact-form__label"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={`contact-form__input ${
                    errors.name ? "has-error" : ""
                  }`}
                />

                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="contact-form__error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div
                style={getRevealStyle(320)}
                className="contact-reveal mt-[35px] max-[600px]:mt-[30px]"
              >
                <label
                  htmlFor="contact-phone"
                  className="contact-form__label"
                >
                  Contact Number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "contact-phone-error" : undefined
                  }
                  className={`contact-form__input ${
                    errors.phone ? "has-error" : ""
                  }`}
                />

                {errors.phone && (
                  <p
                    id="contact-phone-error"
                    className="contact-form__error"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div
                style={getRevealStyle(420)}
                className="contact-reveal mt-[35px] max-[600px]:mt-[30px]"
              >
                <label
                  htmlFor="contact-date"
                  className="contact-form__label"
                >
                  Wedding / Event Date
                </label>

                <input
                  id="contact-date"
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.eventDate)}
                  aria-describedby={
                    errors.eventDate ? "contact-date-error" : undefined
                  }
                  className={`contact-form__input contact-form__input--date ${
                    errors.eventDate ? "has-error" : ""
                  }`}
                />

                {errors.eventDate && (
                  <p
                    id="contact-date-error"
                    className="contact-form__error"
                  >
                    {errors.eventDate}
                  </p>
                )}
              </div>

              <div
                style={getRevealStyle(520)}
                className="contact-reveal mt-[35px] max-[600px]:mt-[30px]"
              >
                <label
                  htmlFor="contact-message"
                  className="contact-form__label"
                >
                  Tell me about yourself / event plan
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`contact-form__input contact-form__textarea ${
                    errors.message ? "has-error" : ""
                  }`}
                />

                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="contact-form__error"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div
                style={getRevealStyle(620)}
                className="contact-reveal mt-[36px]"
              >
                <button
                  type="submit"
                  className={buttonClasses}
                >
                  Submit
                </button>

                <div
                  className="mt-4 min-h-[24px]"
                  aria-live="polite"
                >
                  {status === "success" && (
                    <p className="m-0 font-primary text-[17px] leading-[1.4] text-[#8d694c]">
                      Thank you. Your enquiry has been received.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="m-0 font-primary text-[17px] leading-[1.4] text-[#9c625d]">
                      Please complete the required fields.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          <figure
            style={getRevealStyle(200)}
            className="contact-reveal contact-reveal--right contact-form__media m-0 min-h-[700px] w-full min-w-0 overflow-hidden bg-[#ded8cf] max-[1280px]:min-h-[650px] max-[820px]:min-h-0 max-[820px]:aspect-[4/4.6]"
          >
            <img
              src={contactBrideImage}
              alt="Bride holding an elegant wedding bouquet beside a window"
              loading="eager"
              decoding="async"
              className="contact-form__image block h-full w-full object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function ContactQuote() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="contact-quote-heading"
      className={`contact-reveal-scope contact-quote overflow-hidden bg-white py-[105px] max-[1280px]:py-[96px] max-[1024px]:py-[88px] max-[768px]:py-[78px] max-[600px]:py-[68px] max-[480px]:py-[60px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto max-w-[790px] text-center">
          <p
            style={getRevealStyle(80)}
            className="contact-reveal m-0 font-script text-[59px] font-normal leading-[0.9] text-accent max-[1280px]:text-[56px] max-[1024px]:text-[52px] max-[600px]:text-[48px] max-[480px]:text-[44px]"
          >
            Enquire Now!
          </p>

          <h2
            id="contact-quote-heading"
            style={getRevealStyle(200)}
            className="contact-reveal mx-auto mb-0 mt-[28px] max-w-[760px] font-primary text-[clamp(36px,3.2vw,48px)] font-normal uppercase leading-[1.18] tracking-[0.015em] text-heading max-[600px]:mt-[23px] max-[480px]:text-[32px]"
          >
            “You will never know the value of a moment until it becomes a
            memory.”
          </h2>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ item, index }) {
  const externalLink = item.type === "location";

  return (
    <div
      style={getRevealStyle(260 + index * 140)}
      className="contact-reveal contact-details__item text-center"
    >
      <a
        href={item.href}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noreferrer" : undefined}
        className="group flex flex-col items-center text-[#5a5652] no-underline"
      >
        <span className="contact-details__icon text-[#b98558] transition-[color,transform] duration-300 group-hover:-translate-y-[3px] group-hover:text-[#a8724b]">
          <ContactIcon type={item.type} />
        </span>

        <span className="mt-[18px] font-primary text-[21px] font-normal uppercase leading-none tracking-[0.02em] text-heading max-[1200px]:text-[19px] max-[600px]:text-[17px]">
          {item.title}
        </span>

        <span className="mt-[11px] font-primary text-[19px] font-normal leading-[1.35] text-body max-[1200px]:text-[18px] max-[600px]:text-[16px]">
          {item.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}

function ContactDetails() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-label="Contact information"
      className={`contact-reveal-scope contact-details relative isolate min-h-[610px] w-full overflow-hidden bg-[#d8d2ca] max-[1280px]:min-h-[570px] max-[1024px]:min-h-[530px] mb-28 max-[760px]:min-h-0 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <figure
        style={getRevealStyle(80)}
        className="contact-reveal contact-details__background absolute inset-0 z-0 m-0 h-full w-full overflow-hidden max-[760px]:relative max-[760px]:aspect-[4/3.15]"
      >
        <img
          src={contactDetailsImage}
          alt="Elegant wedding floral arrangement and dessert table"
          loading="lazy"
          decoding="async"
          className="contact-details__background-image block h-full w-full object-cover object-center"
        />
      </figure>

      <div className="site-container relative z-[2] flex min-h-[610px] items-stretch justify-end max-[1280px]:min-h-[570px] max-[1024px]:min-h-[530px] max-[760px]:min-h-0 max-[760px]:p-0">
        <aside
          style={getRevealStyle(180)}
          className="contact-reveal contact-reveal--right contact-details__panel mr-[7%] flex w-[34%] min-w-[350px] flex-col justify-center bg-white/[0.91] px-[46px] py-[48px] backdrop-blur-[1px] max-[1280px]:mr-[5%] max-[1280px]:w-[36%] max-[1100px]:mr-[3%] max-[1100px]:w-[39%] max-[900px]:mr-0 max-[900px]:w-[43%] max-[900px]:px-[34px] max-[760px]:mr-0 max-[760px]:w-full max-[760px]:min-w-0 max-[760px]:bg-[#f7f5f2] max-[760px]:px-[34px] max-[760px]:py-[64px] max-[600px]:px-[28px] max-[480px]:px-[22px]"
        >
          <div className="flex flex-col gap-[62px] max-[1280px]:gap-[54px] max-[1024px]:gap-[48px] max-[760px]:gap-[50px]">
            {contactItems.map((item, index) => (
              <ContactInfoItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel="Contact Tessa Morgan Photography"
          imageAlt="Couple sharing a quiet intimate moment"
        />

        <ContactHeading />

        <ContactFormSection />

        <ContactQuote />

        <ContactDetails />
      </main>

      <Footer />
    </div>
  );
}