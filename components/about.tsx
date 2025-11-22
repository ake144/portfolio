import { cn } from "@/lib/utils";
import GridPattern from "./grid-layout";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

const AboutMe = () => {
    return (
        <div className="mx-auto relative overflow-visible w-full flex flex-col justify-center ">
                {/* <GridPattern
                    width={200}
                    height={200}
                    x={0}
                    y={-1}
                    strokeDasharray={"4 2"}
                /> */}
                <div className="text-3xl w-full flex justify-items-start items-center gap-12">
                    <h2 className="mb-4 w-1/3 text-4xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-100 md:text-3xl sm:text-2xl">
                        About Me
                    </h2>
                    <p className="max-w-4xl w-2/3  ml-12 justify-end items-end flex text-lg leading-7 text-gray-700 dark:text-gray-300">
                        Hello! I'm [Your Name], a passionate developer with a love for creating innovative solutions. With expertise in [Your Skills], I enjoy building applications that make a difference. When I'm not coding, you can find me exploring new technologies or indulging in my hobbies like [Your Hobbies]. Let's connect and create something amazing together!
                    </p>

                </div>
                   <div className="mt-12 flex justify-between ">
                  <div>
                     <PixelatedCanvas
                    src="/avatar.jpg"
                    width={400}
                    height={500}
                    cellSize={3}
                    dotScale={0.9}
                    shape="square"
                    backgroundColor="#000000"
                    dropoutStrength={0.4}
                    interactive
                    distortionStrength={3}
                    distortionRadius={80}
                    distortionMode="swirl"
                    followSpeed={0.2}
                    jitterStrength={4}
                    jitterSpeed={4}
                    sampleAverage
                    tintColor="#FFFFFF"
                    tintStrength={0.2}
                    className="rounded-xl border border-neutral-800 shadow-lg"
                />
                  </div>
                    <div>
                        

                    </div>

                

                  </div>

            </div>
    );
};


export default AboutMe; 