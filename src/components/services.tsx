import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, PaintRoller, Armchair, Building2, Layers, Utensils, View } from "lucide-react";

const mainServices = [
    {
        title: "Commercial Interior",
        description: "We provide the Best Commercial Interior to customers based on their requirements.",
        icon: <Building2 className="h-8 w-8 text-primary" />,
    },
    {
        title: "3D Visualization",
        description: "We are specialized in creating high-quality 3D visualizations for Commercial interior design and decor.",
        icon: <View className="h-8 w-8 text-primary" />,
    }
];

const commercialServices = [
    { name: "Office Interiors", icon: <Building2 className="h-10 w-10 text-primary" /> },
    { name: "Bespoke Furnitures", icon: <Armchair className="h-10 w-10 text-primary" /> },
    { name: "False Ceiling", icon: <Layers className="h-10 w-10 text-primary" /> },
    { name: "Restaurant Interiors", icon: <Utensils className="h-10 w-10 text-primary" /> }
];

const features = [
    {
        title: "New Office Setup",
        description: "Setting up a new office requires careful planning and consideration of various factors to ensure productivity, efficiency, and comfort for everyone.",
        icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
        title: "Office Renovation",
        description: "Office renovation projects can breathe new life into your workspace, enhance productivity, and improve employee morale.",
        icon: <PaintRoller className="h-8 w-8 text-primary" />,
    },
    {
        title: "Furniture & Products",
        description: "Selecting furniture and products for your office, it's important to prioritize comfort, functionality, durability, and aesthetics.",
        icon: <Armchair className="h-8 w-8 text-primary" />,
    }
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What We Do
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We Provide best Commerical Interior Designs. Our designs are contemporary while maintaining a classic elegance, resulting in a wider market appeal.
          </p>
        </div>

        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-12">
            {mainServices.map(service => (
                <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <CardHeader className="flex flex-col items-center gap-4">
                        {service.icon}
                        <CardTitle className="font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-16 md:mt-24">
            <h3 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl font-headline">
                Our Commercial Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">
                {commercialServices.map(service => (
                    <Card key={service.name} className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        {service.icon}
                        <h4 className="mt-4 text-lg font-semibold text-center font-headline">{service.name}</h4>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mt-16 md:mt-24">
            <h3 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl font-headline">
                Our Features
            </h3>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 mt-8">
                {features.map(feature => (
                    <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <CardHeader className="flex flex-col items-center gap-4">
                            {feature.icon}
                            <CardTitle className="font-headline">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
