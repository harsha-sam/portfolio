export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/actions";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <section className="max-h-[calc(90svh-4rem)] mt-16 w-full pt-8">
    {
      !blogs?.length ?
        <div className="flex flex-col justify-center items-center gap-10 pt-16 pb-16">
          <p>🤯 No Blogs Found !</p>
        </div>
      :
        <div className="max-w-4xl mx-auto pb-16 px-16 sm:text-md md:text-lg dark:text-slate-400 text-gray-700 mb-4">
          <h1 className="text-3xl mb-6">
            {`Welcome to the Little Corner of my brain! 🎉`} 
          </h1>
          <p className="mb-4">{`I use this space to share whatever I feel like—whether it's notes from a book I just read or a podcast I heard, some of my thoughts, or my latest learnings.`}</p>
          
          <p className="mb-10">{`My posts may vary in style and structure, and I want to give you a heads-up that my English might not always be perfect. But I hope you still find value in what I share!`}</p>
        <BentoGrid>
          {blogs.map((item, i) => (
            <Link key={item.id} href={item.public_url} rel="noopener noreferrer" target="_blank">
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={
                  item.cover_url &&
                  <Image
                    src={item.cover_url}
                    alt={item.title}
                    width={150}
                    height={100}
                    quality={100}
                  />
                }
                createdDate={item.createdDate}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>  
    }
  </section>
}