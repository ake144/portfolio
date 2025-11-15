import { cn } from "@/lib/utils";
import GridPattern from "./grid-layout";

const AboutMe = () => {
    return (
        <div className="min-h-screen relative overflow-visible w-full flex flex-col items-center justify-center">
                <GridPattern
                    width={200}
                    height={200}
                    x={0}
                    y={-1}
                    strokeDasharray={"4 2"}
                />

            </div>
    );
};


export default AboutMe; 