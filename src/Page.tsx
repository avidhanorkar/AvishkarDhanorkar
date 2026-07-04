import Intro from "./Components/Intro";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Manifest from "./Components/Manifest";

export default function Page() {
  return (
    <div className="relative w-full">
      {/* Cinematic Hero */}
      <section id="hero" className="w-full min-h-screen">
        <Intro />
      </section>

      {/* Main Content with Glassmorphism Panels */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-32 pb-32">
        
        <section id="manifest">
          <Manifest />
        </section>

        <section id="work">
          <Project />
        </section>
        
        <section id="experience">
          <Experience />
        </section>

      </main>

      {/* Footer */}
      <section id="contact" className="w-full border-t border-white/5">
        <Footer />
      </section>
    </div>
  );
}