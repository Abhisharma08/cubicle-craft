import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Balakrishana",
    role: "Customer",
    quote: "I would definitely like to thank Teckfore for the interiors they designed and implemented. Definitely we appreciate their ideas & innovations.",
    avatar: "https://placehold.co/100x100.png",
    hint: "smiling man",
  },
  {
    name: "Naveen Kumar",
    role: "Customer",
    quote: "The overall experience is really impressive and commendable. What I observed is the whole Teckfore team were involved in this whole journey.",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional man",
  },
  {
    name: "Santosh Kumar",
    role: "Customer",
    quote: "I would definitely like to thank Teckfore for the interiors they designed and implemented. Definitely we appreciate their ideas & innovations.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man glasses",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What Our Client Say's
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with CubicleCraft.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="border-none shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <blockquote className="text-lg text-card-foreground italic border-l-4 border-primary pl-4 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6 flex items-center">
                          <Avatar className="h-12 w-12 border-2 border-primary">
                            <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}