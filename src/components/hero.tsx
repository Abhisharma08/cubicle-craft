import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, GalleryVertical } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976158/1200x600-01_jzuera.jpg"
          fill
          alt="Hero Interior Design"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-[3.5rem] leading-tight font-bold tracking-tighter lg:text-6xl xl:text-7xl/none font-headline">
            CubicleCraft
          </h1>
          <p className="text-lg text-neutral-200 md:text-xl max-w-2xl mx-auto">
            We create workspaces that inspire teams, offering modular workstations, ergonomic chairs, and smart storage solutions.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#about">Read More <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#gallery">Gallery <GalleryVertical className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}