"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = ({ className = "" }: { className?: string }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "text-lg md:text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-foreground/60",
            className
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          {/* <Palette className="h-6 w-6 text-primary" /> */}
          <span className="font-bold font-headline text-lg">
            dobs<span className="text-primary">designs</span>
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          <NavItems className="font-headline" />
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="font-headline" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2 mb-4">
                {/* <Palette className="h-6 w-6 text-primary" /> */}
                <span className="font-bold font-headline text-lg">
                  dobsdesigns
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                <NavItems className="font-headline lg:text-2xl" />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
