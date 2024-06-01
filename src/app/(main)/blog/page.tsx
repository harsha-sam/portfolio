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
      <BentoGrid className="max-w-4xl mx-auto pb-16 px-4">
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
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </Link>
        ))}
      </BentoGrid>
    }
  </section>
}