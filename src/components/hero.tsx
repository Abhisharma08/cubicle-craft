import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, GalleryVertical } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                CubicleCraft: Redefining Workspaces
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We use an artistic approach to interior design to create a one-of-a-kind reflection of self in each place. Our strategy is always in line with our client's goals; hence, we build locations that promote profitable real estate results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#about">Read More <ArrowRight /></Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#gallery">View Gallery <GalleryVertical /></Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="modern office reception"
            width="1200"
            height="600"
            alt="Hero Interior Design"
            className="mx-auto overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
