import { Dribbble, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {/* <Palette className="h-6 w-6 text-primary" /> */}
            <span className="font-bold font-headline text-lg">
              dobs<span className="text-primary">designs</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-headline">
            &copy; {new Date().getFullYear()} dobsdesigns. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://web.facebook.com/profile.php?id=61574678883473"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/dobsdesigns?igsh=bmh0NWtqbWwxam5x"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.behance.net/dobsdesigns"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Dribbble className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
