import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    title: "Modern Open-Plan Office",
    description: "A spacious, collaborative environment featuring modular workstations and integrated storage solutions.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976155/600x400-04_nbavxy.jpg",
  },
  {
    title: "Executive Suite",
    description: "Premium workstations and elegant furniture for professional, executive spaces.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976155/600x400-03_yf86ha.jpg",
  },
  {
    title: "Collaborative Breakout Space",
    description: "Comfortable areas with flexible seating and storage to encourage creativity and teamwork.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976155/600x400-06_czlbf2.jpg",
  },
  {
    title: "Tech Startup Headquarters",
    description: "Agile workstations and furniture designed for fast-moving, innovative teams.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976155/600x400-05_sg2wri.jpg",
  },
  {
    title: "Corporate Boardroom",
    description: "Functional boardroom furniture, including ergonomic chairs and advanced meeting tables.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976154/600x400-01_g8b97h.jpg",
  },
  {
    title: "Welcoming Reception Area",
    description: "Reception spaces with stylish desks and seating that leave a lasting first impression.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751976154/600x400-02_bhcv0s.jpg",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of offices we’ve helped furnish. Each project showcases our focus on quality, functionality, and modern design.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group border-none shadow-lg">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
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