import { cn } from "@/lib/utils"
import ExprienceCard from "./exprience/card"
import { ExperienceShowcase } from "./exprience/showCase"

const ExpriencePage = ()=>{
    return (
         <div
                className={cn(
                    "absolute inset-0 z-0 px-22 mx-76 ",
                    "[background-size:100px_100px]",
                    
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
                >

        {/* <ExprienceCard  /> */}
          <ExperienceShowcase />
        </div>
    )
}

export default ExpriencePage