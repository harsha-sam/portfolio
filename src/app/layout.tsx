import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsha | SWE & Full Stack JS Develope",
  description: "Explore the portfolio of Harsha, a curious Software Engineer and Full Stack JS Developer. Dive into innovative projects, insightful blogs, and learn more about my journey of continuous learning and development",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/avatar.png",
        href: "/avatar.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/avatar-dark.png",
        href: "/avatar-dark.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
