import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] pt-12">
        <Image src="/avatar.png" alt="a male avatar" fill
          className="object-contain dark:hidden" 
        />
        <Image src="/avatar-dark-1.png" alt="a male avatar" className="object-contain hidden dark:block" fill/>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Hi, I'm Harsha! <span className="wave transform-origin-70-70 animate-wave inline-block">👋🏻 </span>
        </h1>
        <h2 className="text-center sm:text-md md:text-lg dark:text-slate-400 text-gray-700 mb-4">
          Software Engineer / Full Stack JS Developer, keen on learning something new everyday.
        </h2>
        <div className="flex gap-2 md:gap-4">
          <Button variant="secondary" size="lg">Know More</Button>
          <Button size="lg">Check Work<MoveUpRight className="ml-[2px] h-4 w-4 relative bottom-[0.8px]" /></Button>
        </div>
      </div>
    </div>
  );
}
