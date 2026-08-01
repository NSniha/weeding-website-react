import aboutPageHeroImage from "../../assets/images/page-hero.png";

import Header from "../../components/Header/Header";
import PageHero from "../../components/PageHero/PageHero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <PageHero
          image={aboutPageHeroImage}
          imageAlt="Wedding photographer creating timeless wedding memories"
          imagePosition="center"
        />

        <About />

        {/* =====================================================
            Add the next About Page section below this comment.
            Keep each section inside its own semantic component.
        ====================================================== */}
      </main>

      <Footer />
    </div>
  );
}