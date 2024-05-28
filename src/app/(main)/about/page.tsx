import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { MoveDown } from "lucide-react"
import Image from "next/image"

const ABOUT_ME = `Hi, I'm Harshavardhan Samudrala, but you can call me Harsha! I'm a ${new Date().getFullYear() - 2001}-year-old software engineer and full-stack javascript developer with a knack for exploring the science of computers and technology. I've been programming for ${new Date().getFullYear() - 2019} years and professionally developing software for ${new Date().getFullYear() - 2021} years. I've got a Master's degree in Computer Software Engineering from UMBC and a Bachelor's degree in Computer Science. When I'm not coding, you'll find me working out.`

export default function About() {
  return <div className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full">
      <div className="relative w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] mt-auto">
        <Image src="/headshot.jpg" alt="A headshot picture of Harsha" fill className="object-contain"/>
    </div>
    <div className="flex flex-col gap-2 md:gap-4 justify-center w-[350px] md:w-2/3">
      <Card>
        <CardHeader>
          <CardTitle>
            Who am I?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            { ABOUT_ME } 
          </CardDescription>
        </CardContent>
      <CardFooter>
        <Button className="w-1/3 mr-2" size="res">
          Read My Story <MoveDown className="ml-[2px] h-4 w-4 self-baseline"/>
        </Button>
        <Button variant="secondary" className="w-1/3 ml-2" size="res">
          Explore My Work
        </Button>
      </CardFooter>
      </Card>
    </div>
  </div>
}