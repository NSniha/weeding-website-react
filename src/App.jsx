import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CreativeStory from "./components/CreativeStory/CreativeStory";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services/>
        <CreativeStory/>
      </main>
    </>
  );
}