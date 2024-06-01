"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-ui-toggle";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const path = usePathname();
  const scrolled = useScrollTop();
  return (<NavigationMenu className={cn(
    "fixed top-0 flex justify-center md:justify-around w-[100%] bg-background h-16",
    scrolled && "border-b shadow-sm"
  )}>
    <NavigationMenuList className="justify-between">
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}
              active={path === '/'}
            >
                  Home
              </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}
              active={path === '/about'}
            >
              About
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}
              active={path === '/blog'}
            >
              Blog
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}
              active={path === '/projects'}
            >
              Projects
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuList>
      <NavigationMenuItem>
          <ModeToggle />
       </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)}