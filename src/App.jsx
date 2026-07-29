import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CreativeStory from "./components/CreativeStory/CreativeStory";
import FeaturedStory from "./components/FeaturedStory/FeaturedStory";
import Testimonials from "./components/Testimonials/Testimonials";
import Stats from "./components/Stats/Stats";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";

function HomePage() {
  return (
    <>
      <Header variant="overlay" />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <CreativeStory />
        <FeaturedStory />
        <Testimonials />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/portfolio" element={<PortfolioPage />} />

      <Route path="/blog" element={<BlogPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}