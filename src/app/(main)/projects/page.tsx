export const revalidate = 0;

import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { getProjects } from "@/actions";
import CustomCard from "@/components/custom-card";
import { Button } from "@/components/ui/button";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const FooterBtns = ({ btnA, btnB }: {
    btnA: {
      title: string,
      href: string
    },
    btnB?: {
      title: string,
      href: string
    },
  }) => { 
    return <>
      <Button className="w-1/3 mr-2" size="res">
        <Link href={btnA.href} rel="noopener noreferrer" target="_blank" className="flex">
          {btnA.title}
          <MoveUpRight className="ml-[2px] h-4 w-4 relative top-[0.5px]" />
        </Link>
      </Button>
      {btnB &&
       <Button variant="secondary" className="w-1/3 ml-2" size="res">
        <Link href={btnB.href} rel="noopener noreferrer" target="_blank" className="flex">
          {btnB.title}
          <MoveUpRight className="ml-[2px] h-4 w-4 relative top-[0.5px]" />
        </Link>
      </Button>}
    </>
  }

  const renderProjects = projects?.map((proj) => {
    return <CustomCard
      key={proj.id}
      title={proj.title}
      description={proj.description}
      footer={
        <FooterBtns
          btnA={{ title: "Learn More", href: proj.public_url }}
          { ...(proj.preview_url && {btnB: { title: "Preview", href: proj.preview_url}})}
        />
      }
      className="w-[350px] md:w-1/2"
      />
  })
  

  return <section className="max-h-[calc(90svh-4rem)] mt-16 pt-8 w-full">
    <div className="flex flex-col justify-center items-center gap-10 pt-16 pb-16">
      {!projects?.length ?
        <p>🤯 No Projects Found !</p>
        :
        renderProjects
      }
    </div>
  </section>
}