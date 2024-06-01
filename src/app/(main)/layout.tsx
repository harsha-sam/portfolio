import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "./_components/navbar";

export default function MainLayout({ children }: {
  children: React.ReactNode;
}) {
  return <>
    <Navbar />
    <main className="h-[100svh] flex flex-wrap justify-center w-screen">
      {children}
    </main>
    <footer className="fixed w-full bottom-0 left-0 bg-background flex justify-around py-4 items-center">
      Learn. Build. Grow. 🚀
      <div className="flex w-[1/4] justify-center gap-6">
        <Link href="https://www.linkedin.com/in/harshavardhan-samudrala/">
          <Linkedin />
        </Link>
        <Link href="https://github.com/harsha-sam">
          <Github />
        </Link>
        <Link href="mailto:harsha.sam23@gmail.com">
          <Mail />
        </Link>
      </div>
    </footer>
  </>
}