import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does a commercial interior designer or decorator work?",
    answer: "An interior designer always works on a commercial interior design project after considering various elements like the business brand, business model, and their explicit priorities. The functionality of the entire space will have a definite say on how the interior layout is going to be.",
  },
  {
    question: "What are the different stages or phases of a commercial interior design project?",
    answer: "There is a particular system that allows seamless integration of plans and processing of the project. The different stages that will help with the successful completion of the commercial interior design project include: initial consultation, concept development, design development, documentation, and project management.",
  },
  {
    question: "What are the design considerations for different commercial spaces?",
    answer: "Designing functional and inspiring office spaces involves considerations such as open-plan layouts, ergonomic furniture, collaborative areas, breakout zones, and incorporating technology for seamless connectivity.",
  },
  {
    question: "Why Choose Us for commercial interior design?",
    answer: "Commercial interior design is similar to that of home interior design, but the needs and requirements expected from commercial spaces have huge differences from those of a personal space. We specialize in understanding these unique needs to deliver functional and aesthetic environments.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-headline text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
