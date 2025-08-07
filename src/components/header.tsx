import Link from "next/link";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <>
      {/* Mobile Navbar */}
      <MobileNav />
      {/* Navbar */}
      <nav className="bg-ctp-lavender-800 text-ctp-text shadow-base hidden p-6 shadow-md md:flex">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bold">foreynd</h1>
          </Link>
          <div className="flex items-center justify-center gap-4 font-medium">
            <Link
              href="/#about"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
