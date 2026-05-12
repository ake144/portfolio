import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0c0c0c] text-[#e0e0e0] font-mono overflow-hidden flex flex-col justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background Huge Text */}
      <div className="absolute inset-x-0 top-1/4 flex justify-center opacity-5 pointer-events-none z-0">
        <h1 className="text-[12vw] font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden text-center">STRUCTURAL</h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
           <div className="mb-6">
             <span className="text-[#a8e036] font-mono text-sm border-l border-[#222] pl-3">
               const role = "FRONTEND_ARCHITECT";
             </span>
           </div>

           <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] mb-2">
             BUILDING
           </h2>
           <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif italic text-gray-500 tracking-tight leading-[0.9] mb-2">
             DIGITAL
           </h2>
           <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] mb-8">
             MONUMENTS.
           </h2>

           <p className="max-w-xl text-gray-400 font-mono text-sm leading-relaxed mb-10">
             Specializing in high-performance web interfaces and brutalist design systems. Merging structural mechanics with avant-garde aesthetics to create digital experiences that feel tangible.
           </p>

           <div className="flex flex-wrap items-center gap-6 border-t border-[#333] pt-8 max-w-xl">
             <Link href="/#projects" className="bg-[#9366ff] hover:bg-[#7e52eb] text-white px-8 py-3 text-sm font-bold tracking-widest transition-colors">
               VIEW PROJECTS
             </Link>
             <Link href="/#contact" className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 text-sm font-bold tracking-widest transition-colors">
               GET IN TOUCH
             </Link>
           </div>
        </div>

        {/* Right Column (Code Window) */}
        <div className="lg:col-span-4 flex items-center justify-end">
          <div className="border border-[#222] bg-[#0c0c0c] w-full max-w-sm">
            {/* Window Header */}
            <div className="border-b border-[#222] p-4 flex gap-2">
              <div className="w-2 h-2 bg-gray-600"></div>
              <div className="w-2 h-2 bg-gray-600"></div>
              <div className="w-2 h-2 bg-gray-600"></div>
            </div>
            {/* Window Content */}
            <div className="p-6">
              <p className="text-gray-500 text-xs mb-6 font-bold tracking-widest">CORE_STACK.JSON</p>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[#a8e036]">"framework"</span><span className="text-white">: "React/Next.js",</span>
                </div>
                <div>
                  <span className="text-[#a8e036]">"styling"</span><span className="text-white">: "Tailwind CSS",</span>
                </div>
                <div>
                  <span className="text-[#a8e036]">"animation"</span><span className="text-white">: "Framer Motion",</span>
                </div>
                <div>
                  <span className="text-[#a8e036]">"architecture"</span><span className="text-white">: "Micro-frontends"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;