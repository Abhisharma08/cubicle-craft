import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    title: "Office Interiors",
    description:
      "Innovative and productive office interior designs.",
    image: "https://placehold.co/600x400.png",
    hint: "modern office interior",
  },
  {
    title: "False Ceiling",
    description:
      "Creative and elegant false ceiling solutions for a modern look.",
    image: "https://placehold.co/600x400.png",
    hint: "creative false ceiling",
  },
  {
    title: "Restaurant Interiors",
    description:
      "Ambiance that complements your culinary creations.",
    image: "https://placehold.co/600x400.png",
    hint: "stylish restaurant interior",
  },
  {
    title: "Café Interiors",
    description:
      "Cozy and inviting cafe designs for your customers.",
    image: "https://placehold.co/600x400.png",
    hint: "cozy cafe interior",
  },
  {
    title: "Bespoke Furnitures",
    description:
      "Custom furniture that fits your space and style perfectly.",
    image: "https://placehold.co/600x400.png",
    hint: "bespoke office furniture",
  },
  {
    title: "Office Workstation",
    description:
      "Modular and smart office workstations for collaborative environments.",
    image: "https://placehold.co/600x400.png",
    hint: "modular office workstation",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Gallery
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of our finest work. Each project tells a story
              of collaboration, creativity, and craftsmanship.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group border-none shadow-lg">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  data-ai-hint={project.hint}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="object-cover w-full h-60 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <CardHeader className="bg-card">
                <CardTitle className="font-headline text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
