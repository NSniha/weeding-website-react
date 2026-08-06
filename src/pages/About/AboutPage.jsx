import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel="About Tessa Morgan Photography"
          imageAlt="Bride and groom sharing a quiet wedding moment"
        />

        {/* Add About Page sections below this comment. */}
      </main>

      <Footer />
    </div>
  );
}