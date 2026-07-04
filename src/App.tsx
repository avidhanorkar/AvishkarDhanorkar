import { useEffect, useState } from "react";
import Lenis from "lenis";
import Page from "./Page";
import Cursor from "./Components/Cursor";
import Preloader from "./Components/Preloader";

function App() {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-void">
      
      {/* Solid Aesthetic Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* Subtle Noise Overlay for texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <Cursor />
      <Preloader onComplete={() => setContentReady(true)} />

      <div style={{ opacity: contentReady ? 1 : 0, transition: "opacity 1.5s ease" }} className="relative z-10">
        <Page />
      </div>
    </div>
  );
}

export default App;