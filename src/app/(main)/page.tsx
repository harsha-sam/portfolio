import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-h-[calc(100svh-4rem)] mt-16">
      <div className="flex flex-col md:flex-row items-center md:gap-10 h-full w-full">
        <div className="relative w-1/3 h-[300px]">
          <Image src="/avatar.png" alt="a male avatar" fill
            className="object-contain dark:hidden" 
          />
          <Image src="/avatar-dark-1.png" 
          alt="a male avatar" 
          className="object-contain hidden dark:block" fill/>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-2/3">
          <h1 className="text-xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {`Hi, I'm Harsha!`} 
            <span className="wave transform-origin-70-70 animate-wave inline-block">
              👋🏻 
            </span>
          </h1>
          <h2 className="text-center sm:text-md md:text-lg dark:text-slate-400 text-gray-700 mb-4">
            Software Engineer / Full Stack JavaScript Developer, keen on learning something new everyday.
          </h2>
          <div className="flex gap-2 md:gap-4">
            <Button variant="secondary" size="lg">
              <Link href="/about">
                Know More
              </Link>
            </Button>
            <Button size="lg">
              <Link href="/projects" className="flex">
                Check Work
                <MoveUpRight className="ml-[2px] h-4 w-4 relative top-[2px]" />
              </Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
