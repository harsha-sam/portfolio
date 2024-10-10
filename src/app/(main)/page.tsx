import Image from "next/image";
import Link from "next/link";
import Avatar from "@public/avatar.png";
import AvatarDark from "@public/avatar-dark.png";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <section className="max-h-[calc(90svh-4rem)] mt-16">
      <div className="flex flex-col md:flex-row items-center md:gap-10 h-full w-full">
        <div className="relative w-1/3 h-[300px]">
          <Image src={Avatar}
            alt="a male avatar"
            className="object-contain dark:hidden"
            quality={100}
            fill
          />
          <Image src={AvatarDark}
            alt="a male avatar" 
            className="object-contain hidden dark:block"
            placeholder="blur"
            quality={100}
            fill
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-2/3">
          <h1 className="text-xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {`Hi, I'm Harsha!`} 
            <span className="wave transform-origin-70-70 animate-wave inline-block">
              👋🏻 
            </span>
          </h1>
          <h2 className="text-center sm:text-md md:text-lg dark:text-slate-400 text-gray-700 mb-4">
            A Software Engineer / Full Stack JavaScript Developer, keen on learning something new everyday.
          </h2>
          <div className="flex gap-2 md:gap-4">
            <Link href="/about">
              <Button variant="secondary" size="lg">
                Know More
              </Button>
            </Link>
            <Link href="/projects" className="flex">
              <Button size="lg">
                Explore My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
