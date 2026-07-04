import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="py-32 w-full flex justify-center">
      <motion.div 
        style={{ scale, opacity }}
        className="glass-panel p-12 sm:p-20 w-full max-w-5xl shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

        <h2 className="text-section-title font-light mb-4 tracking-tighter">Experience</h2>
        <p className="text-ink-dim font-light tracking-wide mb-16 italic">💼 where I learned that production databases are not meant for testing.</p>

        <div className="flex flex-col gap-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          {/* Role 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full border border-white bg-void" />
            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-4">
              <h3 className="text-2xl sm:text-3xl font-light">Software Engineering Intern</h3>
              <span className="text-[10px] uppercase tracking-widest text-ink-dim mb-1">Feb 2026 — Present</span>
            </div>
            <p className="text-xl font-light text-ink/70 mb-4">Edgeverve - Infosys Finacle</p>
            <p className="text-ink-dim font-light leading-relaxed max-w-2xl">
              Working on the Infosys Finacle project, the industry-leading digital banking solution. Architecting scalable backend services and optimizing microservices to reduce API latency and improve system reliability.
            </p>
          </div>

          {/* Role 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full border border-white/30 bg-void" />
            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-4">
              <h3 className="text-2xl sm:text-3xl font-light text-white/60">PDA Trainee</h3>
              <span className="text-[10px] uppercase tracking-widest text-ink-dim mb-1">Dec 2024 — Jan 2026</span>
            </div>
            <p className="text-xl font-light text-ink/40 mb-4">Edgeverve - Infosys Finacle</p>
            <p className="text-ink-dim/60 font-light leading-relaxed max-w-2xl">
              Developed and maintained core modules for enterprise banking software using Java and Spring Boot. Collaborated with product teams to translate business requirements into technical implementations.
            </p>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
