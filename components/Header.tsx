"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/favicon.ico"
      alt="DocDial Logo"
      width={32}
      height={32}
      className="rounded-full"
    />

    <span className="font-bold text-xl text-primary">DocDial</span>
  </Link>
);

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Hospitals", href: "/search" },
    { name: "Specialists", href: "/search" },
    { name: "Contact", href: "/Contact" },
    { name: "Chatbot", href: "/chatbot" },
    { name: "Services", href: "/Services" },
    { name: "Appointments", href: "/appointments/book" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Logo />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex md:space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  My Profile <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/bookings">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account">Account Details</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-border/40">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <User className="h-8 w-8 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-primary">
                User Name
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                user@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              href="/bookings"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              My Bookings
            </Link>
            <Link
              href="/settings"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              Settings
            </Link>
            <Link
              href="/account"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              Account Details
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
