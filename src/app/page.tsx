import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div style={{ background: 'linear-gradient(to bottom right, white, #FFEBCD, #F64A8A)', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <BackgroundGradientAnimation
        gradientBackgroundStart="white"
        gradientBackgroundEnd="#FFEBCD"
        firstColor="246, 74, 138"
        secondColor="255, 235, 205"
        thirdColor="255, 235, 205"
        fourthColor="246, 74, 138"
        fifthColor="255, 255, 255"
        pointerColor="246, 74, 138"
        size="80%"
        blendingValue="hard-light"
        containerClassName="absolute inset-0"
      >
        <NavigationMenu>
          <div 
            className="flex justify-between items-center py-3 px-5 shadow-md fixed top-0 left-0 right-0 bg-[#F64A8A] z-1000 shadow-lg"
            style={{ boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.1)' }} // Shadow for bottom line
          >
            <div className="text-[#FFEBCD] font-bold">
              Sandrina Eka Putri
            </div>

            <NavigationMenuList className="flex gap-8 list-none p-0 m-0">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-[#FFEBCD] no-underline">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/Skills" className="text-[#FFEBCD] no-underline">
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/Experience" className="text-[#FFEBCD] no-underline">
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/Project" className="text-[#FFEBCD] no-underline">
                  Project
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/Contact" className="text-[#FFEBCD] no-underline">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>

        <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center">
          <Image
            src="/portofolio.jpg"
            alt="Your Alt Text"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-right p-8 absolute top-1/2 right-0 transform -translate-y-1/2" style={{ width: '50%' }}>
          <h1 className="text-[#F64A8A] font-bold text-4xl mb-4">
            NETWORK ENGINEER<br />
            AT TELKOM UNIVERSITY
          </h1>
          <h2 className="text-[#98623C] font-semibold text-3xl mt-4 mb-4">About Me</h2>
          <p className="text-[#98623C] font-normal text-xl mt-4">
            <span className="text-base">I am a student at Telkom University, Bachelor of Engineering<br />
            Study Program Telecommunication, Faculty of Electrical Engineering.<br />
            I have a high interest in learning and adapting to technology<br />
            which continues to grow. I am to become a student who graduates with<br />
            the best grades and has a profession according to the skills I have.</span>
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
