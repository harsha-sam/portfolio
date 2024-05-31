import { Navbar } from "./_components/navbar";

export default function MainLayout({ children }: {
  children: React.ReactNode;
}) {
  return <>
  <Navbar />
  <main className="h-[100svh] flex flex-wrap justify-center">
    {children}
  </main>
  </>
}