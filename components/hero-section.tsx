import { cn } from "@/lib/utils";
import GridPattern from "./grid-layout";

const HeroSection=()=>{
    return (
<div className="flex min-h-screen max-w-4xl w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
   

      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
           
     <div
        className={cn(
          "absolute inset-0 z-0 px-22 mx-22 ",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

  </main>
  </div>

    )
}


export default HeroSection;