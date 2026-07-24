import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}