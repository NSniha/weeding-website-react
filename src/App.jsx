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

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services/>
        <CreativeStory/>
        <FeaturedStory/>
        <Testimonials/>
        <Stats/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}