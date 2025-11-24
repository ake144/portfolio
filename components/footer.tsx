import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import GridPattern from "./grid-layout";


const FooterPage=()=>{
    return(
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="max-w-4xl  items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
{/* <GridPattern   /> */}

    <div className="h-[20rem] flex items-center justify-center">
      <TextHoverEffect text="UIForest" />
    </div> 

    <div>
        <p className="flex items-end justify-end text-muted">
        © 2024 UIForest. All rights reserved.
        </p>
        
    </div>
        </main>
    </div>
    )
}


export default FooterPage;