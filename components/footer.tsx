import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import GridPattern from "./grid-layout";


const FooterPage=()=>{
    return(
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
{/* <GridPattern   /> */}

    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="UIForest" />
    </div> 
        </main>
    </div>
    )
}


export default FooterPage;