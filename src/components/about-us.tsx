import Image from "next/image";

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              CubicleCraft
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We use an artistic approach to interior design to create a one-of-a-kind reflection of self in each place. Our strategy is always in line with our client's goals; hence, we build locations that promote profitable real estate results. We design in a collaborative setting so that we can fulfill the client's final vision. Our designs are contemporary while maintaining a classic elegance, resulting in a wider market appeal.
            </p>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our designers are constantly on the lookout for the most attractive design trends and materials of the most incredible quality. We can customize each design specifically for your target market after hours of rigorous market research.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/800x550.png"
              data-ai-hint="office interior design team meeting"
              width="800"
              height="550"
              alt="About us"
              className="mx-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">
              Our Process
            </h3>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              We follow a collaborative and streamlined process to bring your vision to life, from initial concept to final installation.
            </p>
             <div className="mt-12 grid gap-12 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://placehold.co/400x300.png"
                  data-ai-hint="designers brainstorming sketch"
                  width={400}
                  height={300}
                  alt="Idea & Concept"
                  className="rounded-lg mb-4 object-cover w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">1. Idea & Concept</h4>
                <p className="text-muted-foreground">We start with a deep dive into your vision, needs, and the unique potential of your space.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://placehold.co/400x300.png"
                  data-ai-hint="interior design 3d model"
                  width={400}
                  height={300}
                  alt="Design & Create"
                  className="rounded-lg mb-4 object-cover w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">2. Design & Create</h4>
                <p className="text-muted-foreground">Our designers craft detailed plans and 3D visualizations to help you see the future.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://placehold.co/400x300.png"
                  data-ai-hint="workspace construction install"
                  width={400}
                  height={300}
                  alt="Build & Install"
                  className="rounded-lg mb-4 object-cover w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">3. Build & Install</h4>
                <p className="text-muted-foreground">We manage the project to completion, ensuring quality craftsmanship and a seamless installation.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
