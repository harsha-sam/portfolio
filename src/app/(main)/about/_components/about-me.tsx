import Link from "next/link";
import { MoveDown } from "lucide-react";
import CustomCard from "@/components/custom-card";
import { Button } from "@/components/ui/button";
import aboutMe from "@/data/about-me";

export default function AboutMe() {
  const FooterBtns = <>
    <Link href="/about/#career" className="w-1/3 mr-4">
      <Button size="res">
        Dive Into My Career <MoveDown className="hidden md:block ml-[2px] h-4 w-4 self-baseline"/>
      </Button>
      </Link>
    <Link href="/projects" className="w-1/3">
      <Button variant="secondary" size="res">
        Explore My Work
      </Button>
    </Link>
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