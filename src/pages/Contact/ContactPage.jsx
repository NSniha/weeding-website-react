import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <Contact />

        {/* Add more Contact Page sections here */}
      </main>

      <Footer />
    </div>
  );
}