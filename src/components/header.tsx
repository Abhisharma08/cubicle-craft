"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-20 items-center px-4 lg:px-6">
        <Link
          href="#"
          className="flex items-center justify-center gap-2"
          prefetch={false}
        >
          <Image
            src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751608109/unnamed_vzj8wb.png"
            alt="CubicleCraft Logo"
            width={180}
            height={45}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-8 items-center">
          <Link
            href="#about"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Gallery
          </Link>
          <Link
            href="#faq"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            FAQ
          </Link>
          <Button onClick={onContactClick}>Contact Us</Button>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex justify-center mt-6 mb-8">
                <SheetClose asChild>
                  <Link href="#" className="flex items-center" prefetch={false}>
                    <Image
                      src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751608109/unnamed_vzj8wb.png"
                      alt="CubicleCraft Logo"
                      width={180}
                      height={45}
                      className="h-10 w-auto"
                    />
                  </Link>
                </SheetClose>
              </div>
              <nav className="grid gap-6 text-lg font-medium text-center">
                <SheetClose asChild>
                  <Link
                    href="#about"
                    className="hover:text-primary"
                    prefetch={false}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#services"
                    className="hover:text-primary"
                    prefetch={false}
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#gallery"
                    className="hover:text-primary"
                    prefetch={false}
                  >
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#faq"
                    className="hover:text-primary"
                    prefetch={false}
                  >
                    FAQ
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button onClick={onContactClick}>Contact Us</Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
