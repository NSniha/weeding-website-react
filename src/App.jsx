import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Header />
      <Hero />

      <section
        id="about"
        className="flex min-h-[500px] items-center justify-center bg-[#f7f4ef] px-6 py-24 text-center"
      >
        <div className="max-w-3xl">
          <p className="font-script text-5xl text-[#b99a7b]">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-medium text-neutral-800 sm:text-5xl">
            Timeless moments, artistically captured
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We transform the genuine emotions and intimate moments of your
            wedding day into photographs that remain meaningful for
            generations.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;