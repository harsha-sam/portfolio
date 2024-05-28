import { Navbar } from "./_components/navbar";

export default function MainLayout({ children }: {
  children: React.ReactNode;
}) {
  return <main className="px-24 pt-12 pb-0 h-[100svh] flex flex-col justify-center items-center">
    <Navbar />
    <div>
      {children}
    </div>
  </main>
}