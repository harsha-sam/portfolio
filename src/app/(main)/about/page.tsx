import Image from "next/image"
import Headshot from "@public/headshot.jpg";
import AboutMe from "./_components/about-me"
import Career from "./_components/career"


export default function AboutPage() {
  return <section className="max-h-[calc(90svh-4rem)] mt-16">
    <div className="flex flex-row flex-wrap justify-center items-center h-full w-full gap-4">
      <div className="relative w-[30%] h-[200px] md:h-[400px]">
        <Image src={Headshot}
          alt="A headshot picture of Harsha"
          className="object-contain"
          placeholder="blur"
          fill 
          quality={100}
        />
      </div>
      <AboutMe />
    </div>
    <Career />
  </section>
}