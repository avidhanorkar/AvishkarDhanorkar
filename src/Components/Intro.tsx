import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="flex flex-col items-center z-10 px-4"
      >
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 3.2, duration: 1 }}
           className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ink-dim mb-4"
        >
          Full Stack Developer based in Bengaluru
        </motion.div>

        <div className="overflow-hidden mask-text mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 3.5 }}
            className="text-5xl sm:text-7xl lg:text-8xl text-ink font-light uppercase tracking-tighter"
          >
            Avishkar Dhanorkar
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mask-text mb-12">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 3.8 }}
            className="text-lg sm:text-2xl text-ink-dim font-light max-w-3xl leading-relaxed"
          >
            Software Engineering Intern at Edgeverve. I bridge the gap between robust, scalable backend systems and highly cinematic user experiences.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#work" className="glass-panel px-8 py-4 rounded-full flex items-center gap-3 text-ink hover:bg-white/10 transition-colors">
            Explore Work <ArrowDownRight size={16} />
          </a>
          <a href="https://drive.google.com/file/d/17v3Pd726wl2IsQwS76ekmdJtb4Vhon7H/view" target="_blank" rel="noreferrer" className="glass-panel px-8 py-4 rounded-full flex items-center gap-3 text-ink hover:bg-white/10 transition-colors">
            View Resume
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center gap-4 text-ink-dim"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase pl-[0.2em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-ink-dim to-transparent"
          />
        </motion.div>
      </div>

    </div>
  );
}
