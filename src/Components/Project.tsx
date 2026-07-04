import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const projects = [
  {
    name: "Mockable",
    category: "AI Product",
    tagline: "Immersive AI interviews powered by real-time voice analysis and GPT-4.",
    tech: ["Generative AI", "NLP", "Speech-to-Text", "Prompt Engineering", "WebRTC", "Node.js", "Express", "MongoDB", "Mongoose", "RESTful APIs", "JWT Authentication", "OAuth", "AI SaaS"],
    image: "/mockable.png",
    links: { demo: "https://mockable-demo.vercel.app", code: "https://github.com/avidhanorkar/mockable" }
  },
  {
    name: "ResumeCraft",
    category: "Productivity Tool",
    tagline: "An elegant, highly customizable resume builder designed for software engineers.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "React Query", "Radix UI", "Data Visualization", "Full-Stack Development", "EdTech", "SPA"],
    links: {}
  },
  {
    name: "UnBoundEd",
    category: "Online Learning Platform",
    tagline: "A full-stack EdTech platform featuring AI-powered Socratic teaching, course management, and a custom leaderboard system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "TailwindCSS"],
    links: { code: "https://github.com/avidhanorkar/UnBoundEd" }
  }
];

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Scale down the card as we scroll past it, unless it's the last one
  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0]);

  return (
    <div 
      ref={cardRef}
      className="w-full h-screen flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ scale, opacity }}
        className="glass-panel w-full max-w-5xl h-[80vh] max-h-[600px] flex flex-col md:flex-row shadow-2xl relative overflow-hidden group origin-top mt-[10vh]"
      >
        
        {/* Project Visual Area */}
        <div className="md:w-1/2 h-1/2 md:h-full bg-void/50 border-b md:border-b-0 md:border-r border-border relative overflow-hidden flex items-center justify-center p-6 md:p-12">
          
          {project.name === "Coming Soon" ? (
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 md:w-96 md:h-96 border-[1px] border-white/10 rounded-full border-dashed opacity-50"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 md:w-72 md:h-72 border-[1px] border-white/20 rounded-full border-dotted opacity-50"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 bg-white/10 blur-3xl rounded-full"
              />
              
              <div className="z-10 w-48 h-12 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-sm shadow-2xl group-hover:scale-105 transition-transform duration-500">
                 <span className="text-xs tracking-[0.5em] text-white/80 uppercase">Redacted</span>
              </div>
            </div>
          ) : project.image ? (
            <div className="w-full h-full rounded-2xl border border-white/10 bg-void flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden p-2">
              <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-xl" />
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none" />
            </div>
          ) : (
            <div className="w-3/4 h-3/4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-1000" />
              <span className="text-4xl font-light text-white/30 uppercase text-center px-4 relative z-10">{project.name}</span>
            </div>
          )}

        </div>

        {/* Project Info Area */}
        <div className="md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-void/80 backdrop-blur-xl">
          <span className="text-[10px] uppercase tracking-widest text-ink-dim mb-4">{project.category}</span>
          <h3 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">{project.name}</h3>
          <p className="text-lg text-ink-dim font-light leading-relaxed mb-8">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 rounded-full border border-border text-xs text-ink/70">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-auto">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                View Site <ExternalLink size={14} />
              </a>
            )}
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink-dim hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                Source Code <Github size={14} />
              </a>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="w-full flex flex-col pb-32">
      <div className="text-center mb-16">
        <h2 className="text-section-title font-light tracking-tighter">Selected Works</h2>
      </div>

      <div className="flex flex-col relative">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </div>
  );
}