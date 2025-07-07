import Image from "next/image";
import { DraftingCompass, Lightbulb, Wrench } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              CubicleCraft
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We use an artistic approach to interior design to create a one-of-a-kind reflection of self in each place. Our strategy is always in line with our client's goals; hence, we build locations that promote profitable real estate results. We design in a collaborative setting so that we can fulfill the client's final vision. Our designs are contemporary while maintaining a classic elegance, resulting in a wider market appeal.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our designers are constantly on the lookout for the most attractive design trends and materials of the most incredible quality. We can customize each design specifically for your target market after hours of rigorous market research.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              data-ai-hint="office interior design team meeting"
              width="550"
              height="550"
              alt="About us"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">
              Why Choose Us
            </h3>
             <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Idea & Concept</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                  <DraftingCompass className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Design & Create</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Build & Install</h4>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
