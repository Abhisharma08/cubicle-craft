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
              At CubicleCraft, we focus on transforming offices into practical, comfortable, and inspiring spaces. Our solutions go beyond aesthetics—we help you maximize productivity and comfort with furniture that works as hard as you do.
            </p>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether it’s modular workstations that support collaboration, ergonomic seating for all-day comfort, or storage that keeps things organized, we ensure every piece fits your workspace perfectly. We’re committed to staying ahead of trends in workplace furniture and technology, delivering solutions that combine functionality, durability, and style.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976157/800x550-01_ncg4wy.jpg"
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
              We make upgrading your office simple, efficient, and stress-free.
            </p>
             <div className="mt-12 grid gap-12 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752133126/1_obuzyw.jpg"
                  width={400}
                  height={300}
                  alt="Understand Your Space"
                  className="rounded-lg mb-4 object-contain w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">1. Understand Your Space</h4>
                <p className="text-muted-foreground">We assess your current workspace, team size, and specific furniture needs.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752133126/2_jzjrwd.jpg"
                  width={400}
                  height={300}
                  alt="Recommend Solutions"
                  className="rounded-lg mb-4 object-contain w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">2. Recommend Solutions</h4>
                <p className="text-muted-foreground">Our experts suggest workstation layouts, storage options, and furniture pieces that fit your goals and budget.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752133126/3_xq0ckk.jpg"
                  width={400}
                  height={300}
                  alt="Deliver & Set Up"
                  className="rounded-lg mb-4 object-contain w-full aspect-[4/3] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <h4 className="text-xl font-bold font-headline mb-2">3. Deliver & Set Up</h4>
                <p className="text-muted-foreground">We handle delivery, assembly, and placement so your new workspace is ready for immediate use.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
