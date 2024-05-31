import Image from "next/image"
import AboutMe from "./_components/about-me"
import Career from "./_components/career"


export default function About() {
  return <div className="max-h-[calc(100svh-4rem)] mt-16">
    <div className="flex flex-row flex-wrap justify-center items-center h-full w-full">
      <div className="relative w-1/3 h-[200px] md:h-[400px]">
          <Image src="/headshot.jpg" alt="A headshot picture of Harsha" fill className="object-contain"/>
      </div>
      <AboutMe />
    </div>
    <Career />
  </div>
}