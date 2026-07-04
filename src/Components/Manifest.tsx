import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Manifest() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="py-24 sm:py-32 w-full">
      <motion.div style={{ y, opacity }} className="glass-panel p-8 sm:p-16 flex flex-col gap-12 w-full max-w-5xl mx-auto shadow-2xl">
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl font-light mb-8 text-ink leading-tight">
              Hello, I'm Avishkar Dhanorkar — a passionate Full Stack Developer.
            </h2>
            <p className="text-lg text-ink-dim leading-relaxed font-light">
              Currently, I'm focused on backend mastery with Node.js, Express, MongoDB, and Spring Boot, while also exploring Rust and AI integrations. 
              My goal is to architect robust, scalable systems that power cinematic and flawless digital experiences.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6 md:pl-12 md:border-l border-border text-sm">
            <div className="flex flex-col gap-2">
              <span className="uppercase tracking-widest text-[10px] text-ink-dim">Core Stack</span>
              <span className="text-ink text-base">Node.js, Express, MongoDB, Spring Boot, React</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="uppercase tracking-widest text-[10px] text-ink-dim">Currently Exploring</span>
              <span className="text-ink text-base">Rust & AI Integrations</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="uppercase tracking-widest text-[10px] text-ink-dim">Location</span>
              <span className="text-ink text-base">Bengaluru</span>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
