import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Timeline } from "@/components/ui/timeline"
import { MoveDown, MoveUpRight } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link";

const ABOUT_ME = `Hi, I'm Harshavardhan Samudrala, but you can call me Harsha! I'm a ${new Date().getFullYear() - 2001}-year-old software engineer and full-stack javascript developer with a knack for exploring the science of computers and technology. I've been programming for almost ${new Date().getFullYear() - 2019} years and professionally developing software for ${new Date().getFullYear() - 2021} years. I've got a Master's degree in Computer Software Engineering from UMBC and a Bachelor's degree in Computer Science. When I’m not busy debugging life, you’ll find me lifting weights or hanging out with friends and family.`

const TimeLineTitle = ({ title, subtitle, date}) => {
  return <div>
    <p className="text-lg md:text-xl mb-1">{title}</p>
    <p className="mb-1 md:text-lg">{subtitle}</p>
    <p className="text-md md:text-lg text-muted-foreground">{date}</p>
  </div>
}

const TimelineDescription = ({ description, className }: { description:string }) => {
  return <ul className="list-disc list-inside">
    {
      description.split('\n').map((line, index) => {
        return <li key={`line-${index}`} className="text-sm md:text-lg">
          { line.trim() }
        </li>
      })
    }
  </ul>
}

const timelineData = [
  {
    title: <TimeLineTitle title="Software Engineer & Research Assistant" subtitle="University of Maryland, Baltimore County" date="July, 2023 – Present"/>,
    description: <TimelineDescription description={`Leading a 4-member development team in creating a privacy focused full-stack web and mobile application, using agile methodologies, which doubled the project delivery speed.\nConceptualized and designed 5 innovative and user-centric "nutritional label" designs for software transparency, leveraging market research, user surveys, A/B testing, and iterative feedback, which secured lab funding.\nEngineered a real-time backend system for tracking Terms of Service, Policies and app updates for 100+ apps in marketplaces, leveraging web scraping and Twilio’s Send Grid API, reducing manual efforts by 90% and saving 200+ hours annually.`} />
  },
  {
    title: <TimeLineTitle title="Software Engineer, Full-Stack" subtitle="Deque Systems - APAC" date="April, 2022 - December, 2022" />,
    description: <TimelineDescription description={`Engineered a backend framework, by integrating TypeScript, Node.js, Express.js and Object Oriented Programming principles, leading to acceleration in development processes for developers.\nDeveloped 3+ Proofs-of-Concept, and integrated one into an existing product, resulting in a increase in user retention.\nEnhanced a deprecated product by migrating to React for the frontend and Node.js for the backend, achieving a uptick in performance, which translated into a 10% increase in user engagement and satisfaction.`} />
  },
  {
    title: <TimeLineTitle title="Software Development Engineer" subtitle="Devathon" date="May, 2021 - April, 2022" />,
    description: <TimelineDescription description={`Migrated 50+ legacy React Class Components to Functional Components, resulting in a 80% improvement in code quality.\nArchitected and scaled 15+ Restful API endpoints by leveraging software design patterns, data structures and algorithms, which reduced API response times by 60-80%, enhancing overall app performance.\nDesigned relational database models adhering to ACID properties, and utilized Sequelize ORM, Mongoose ODM for validations and constraints, which ensured 99.9% data integrity across 5000+ records.`} />
  },
  {
    title: <TimeLineTitle title="SWE Apprentice (Engage Mentorship Program)" subtitle="Microsoft" date="November, 2021" />,
    description: <TimelineDescription description={`Designed and built “Engage Board”, a real time forum and note sharing platform, completing within a three-week timeline, demonstrating rapid development and deployment capabilities.\nDeveloped scalable features such as chat room spaces capable of handling 2000+ daily messages utilizing socket.io.\nIntegrated Azure Content Moderation AI for 98% profanity filtering to enhance the user experience and content safety.`} />
  }
];
const educationData = [
  {
    title: <TimeLineTitle title="University of Maryland, Baltimore County" subtitle="Master of Professional Studies , Computer Software Engineering" date="January, 2023 – December, 2024"/>,
    description: <>
      <p className="text-sm md:text-lg">GPA: 3.76/4.0</p>
      <p className="text-sm md:text-lg">Course Work:</p>
      <TimelineDescription description={
        "Designing Data-Intensive Applications\nReal-time and Time-Series Databases\nFundamentals of Human-Computer Interaction\nSolution Engineering\nEngineering Management and Leadership\nAdvanced Software Engineering\nSoftware Testing\nStructured System Design and Analysis\nEthics in Software Engineering"
      }/>
    </>
  },
  {
    title: <TimeLineTitle title="Jawaharlal Nehru Technological University Hyderabad, India" subtitle="Bachelor of Technology, Computer Science & Engineering" date="July, 2018 – July, 2022"/>,
    description: <>
      <p className="text-sm md:text-lg">First Class with Distinction (Highest Possible Grade Class)</p>
      <p className="text-sm md:text-lg">Core Courses:</p>
      <TimelineDescription description={
        "Design and Analysis of Algorithms\nData Structures\nDatabases\nSoftware Process and Management\nComputer Networks\nOperating System\nComputer Architecture\nCompiler Design\nC Programming\nObject Oriented Programming with C++\nDiscrete Mathemathics"
      }/>
    </>
  },
];





export default function About() {
  return <div className="max-h-[calc(100svh-4rem)] mt-16">
    <div className="flex flex-row flex-wrap justify-center items-center h-full w-full">
      <div className="relative w-1/3 h-[200px] md:h-[300px]">
          <Image src="/headshot.jpg" alt="A headshot picture of Harsha" fill className="object-contain"/>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 justify-center w-[350px] md:w-1/2">
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
            <Link href="/about/#career" className="flex">
              Dive Into My Career <MoveDown className="ml-[2px] h-4 w-4 self-baseline"/>
            </Link>
          </Button>
          <Button variant="secondary" className="w-1/3 ml-2" size="res">
            Explore My Work
          </Button>
        </CardFooter>
        </Card>
      </div>
    </div>
    <div id="career" className="h-full m-auto pt-16">
      <Tabs defaultValue="experience" className="w-[350px] sm:w-[400px] md:w-3/4 h-full m-auto">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="experience">
          Experience 🚀
        </TabsTrigger>
        <TabsTrigger value="skills">
          Skills 🛠️
        </TabsTrigger>
        <TabsTrigger value="education">
          Education 🎓
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Timeline
          items={timelineData}
        />
      </TabsContent>
      <TabsContent value="education">
        <Timeline
          items={educationData}
        />
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>
              Skills 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>
                <span className="font-bold">Programming & Web Development:</span> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express.js, Rest APIs, JWT, Socket.io, Data Modeling, ACID, ORMs - Prisma, Mongoose, Sequelize, Docker.
              </p>
              <p>
                <span className="font-bold">Additional Skills:</span> Software Design Patterns, Data Structures, Algorithms, Python, C, Object Oriented Programming OOP with C++.
              </p>
              <p>
                <span className="font-bold">Datastores:</span> SQL, PostgreSQL, MongoDB, Neo4j, Redis, Apache Kafka.
              </p>
              <p>
                 <span className="font-bold">Development Tools & Version Control:</span> Git, GitHub, Figma, Visual Studio Code, Terminal (bash and zsh shell), Notion.
              </p>
            </CardDescription>
          </CardContent>
        <CardFooter>
          <Button className="w-1/3" size="res">
            Explore My Work <MoveUpRight className="ml-[2px] h-4 w-4 relative bottom-[0.8px]" />
          </Button>
        </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  </div>
}