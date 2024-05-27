"use client"
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-ui-toggle";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (<NavigationMenu className={cn(
    "md:justify-between fixed top-8 left-12 md:top-12 md:left-24 flex items-center w-[80%]",
    scrolled && "border-b shadow-sm"
  )}>
    <NavigationMenuList className="justify-between">
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
       </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
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