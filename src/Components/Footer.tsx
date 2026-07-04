export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-32 text-center relative overflow-hidden">
      
      {/* Huge cinematic typography in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="text-[20vw] font-bold tracking-tighter leading-none text-white whitespace-nowrap">
          AVISHKAR
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <h2 className="text-4xl sm:text-6xl font-light tracking-tighter">Let's build something extraordinary.</h2>
        
        <a 
          href="mailto:avidhanorkar23@gmail.com" 
          target="_blank"
          rel="noreferrer"
          className="text-xl sm:text-2xl font-light border-b border-white/20 pb-2 hover:border-white transition-colors relative z-20"
        >
          avidhanorkar23@gmail.com
        </a>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-[10px] tracking-[0.2em] uppercase text-ink-dim">
          <a href="https://www.linkedin.com/in/avishkar23" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.github.com/avidhanorkar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://x.com/avidhanorkar23" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>

        <div className="mt-24 text-[10px] tracking-[0.2em] uppercase text-ink/30">
          © {new Date().getFullYear()} Avishkar Dhanorkar. All rights reserved.
        </div>
      </div>

    </div>
  );
}
