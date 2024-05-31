import Link from "next/link";
import { MoveDown } from "lucide-react";
import CustomCard from "@/components/custom-card";
import { Button } from "@/components/ui/button";
import aboutMe from "@/data/about-me";

export default function AboutMe() {
  const FooterBtns = <>
    <Button className="w-1/3 mr-2" size="res">
      <Link href="/about/#career" className="flex">
        Dive Into My Career <MoveDown className="hidden md:block ml-[2px] h-4 w-4 self-baseline"/>
      </Link>
    </Button>
    <Button variant="secondary" className="w-1/3 ml-2" size="res">
      <Link href="/projects" className="flex">
        Explore My Work
      </Link>
    </Button>
  </>

  return (
    <CustomCard
      title="Who am I?"
      description={aboutMe}
      footer={FooterBtns}
      className="w-[350px] md:w-1/2"
    />
  )
}