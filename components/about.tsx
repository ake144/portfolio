import { cn } from "@/lib/utils";
import GridPattern from "./grid-layout";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import SocialButtons from "./ui/social-buttons";
import CopyButton from "./ui/copy-button";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="mx-auto relative overflow-visible w-full flex flex-col justify-center  mt-44">
      {/* <GridPattern
                    width={200}
                    height={200}
                    x={0}
                    y={-1}
                    strokeDasharray={"4 2"}
                /> */}
      <div className="text-3xl w-full flex justify-items-start items-center gap-12">
        <div className="flex flex-col font-bold ">
           <h2 className="mb-4 w-1/3 text-2xl font-bold leading-8 tracking-widest  text-gray-900 dark:text-gray-100">
                About Me
            </h2>
          <PixelatedCanvas
            src="/avatar.jpg"
            width={400}
            height={400}
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
            className="rounded-xl border border-neutral-800 mt-14  shadow-lg w-full max-w-md"
          />

        </div>
       

        <div className="flex-1 max-w-4xl w-2/3  ">

        <p className=" ml-12 justify-end items-end flex text-lg leading-7 text-gray-700 dark:text-gray-300">
          Hello! I'm Aklilu Tamirat, a passionate developer with a love for
          creating innovative solutions. With expertise in Javascript, and it's frameworks like React, Next.js, Node.js,Express, and Python, and other technologies. I
          enjoy building applications that make a difference and involve in a day-to-day problem solving. When I'm not
          coding, you can find me exploring new technologies or indulging in my
          hobbies like hiking, reading, exploring nature and trying to do some research . Let's connect and create something
          amazing together!
        
        </p>
          <p className=" ml-12 mt-6 justify-end items-end text-lg   text-gray-700 dark:text-gray-300 ">
            I'm currently a software developer at <Link href="https://www.linkedin.com/company/african-fintech-hub/" className="underline text-green-600">Safaricom Ethiopia</Link> where I work on building scalable web applications and improving user experiences on fintech solutions.
            it's been an exciting journey so far, and I'm eager to continue growing and contributing  to impactful projects in Fintech Industry.
          </p>

          <div className="flex justify-end items-center mt-12 pr-8">
            <div className="bg-white/5 dark:bg-white/3 rounded-2xl p-2">
              <SocialButtons
                size="lg"
                className="gap-12"
                github="https://github.com/ake144"
                twitter="https://twitter.com/your-handle"
                linkedin="https://www.linkedin.com/in/your-profile"
              />
            </div>
          </div>

      </div>
      </div>
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-start justify-between w-full gap-8">
       
          {/* <PixelatedCanvas
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
            className="rounded-xl border border-neutral-800 shadow-lg w-full max-w-md"
          /> */}
      

        {/* <aside className="w-full lg:w-96">
          <div className="rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-neutral-800 p-6 shadow-xl">
            <div className="flex items-center gap-4">
          
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Aklil Tamirat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Full‑stack Developer • Designer</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <IconPhone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="underline">+1 234 567 890</a>
                </div>
                <CopyButton value="+1 234 567 890" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <IconMail className="w-4 h-4" />
                  <a href="mailto:your-email@example.com" className="underline">your-email@example.com</a>
                </div>
                <CopyButton value="your-email@example.com" />
              </div>
            </div>

            <div className="mt-4 mb-7" >
              <SocialButtons
                github="https://github.com/your-username"
                twitter="https://twitter.com/your-handle"
                linkedin="https://www.linkedin.com/in/your-profile"
              />
            </div>

                 <Link href="mailto:tamiratake@gmail.com" className="mt-6">
                    
                  <HoverBorderGradient className="w-[330px] " >
                    
                      let's talk
                  </HoverBorderGradient>
            </Link>
       
          </div>
        </aside> */}
      </div>
    </div>
  );
};

export default AboutMe;
