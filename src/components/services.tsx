import { Briefcase, PaintRoller, Armchair, Building2, Layers, Utensils, View } from "lucide-react";
import React from "react";

const mainServices = [
    {
        title: "Commercial Interior",
        description: "We provide the Best Commercial Interior to customers based on their requirements.",
        icon: Building2,
    },
    {
        title: "3D Visualization",
        description: "We are specialized in creating high-quality 3D visualizations for Commercial interior design and decor.",
        icon: View,
    }
];

const commercialServices = [
    { name: "Office Interiors", icon: Building2 },
    { name: "Bespoke Furnitures", icon: Armchair },
    { name: "False Ceiling", icon: Layers },
    { name: "Restaurant Interiors", icon: Utensils }
];

const features = [
    {
        title: "New Office Setup",
        description: "Setting up a new office requires careful planning and consideration of various factors to ensure productivity, efficiency, and comfort for everyone.",
        icon: Briefcase,
    },
    {
        title: "Office Renovation",
        description: "Office renovation projects can breathe new life into your workspace, enhance productivity, and improve employee morale.",
        icon: PaintRoller,
    },
    {
        title: "Furniture & Products",
        description: "Selecting furniture and products for your office, it's important to prioritize comfort, functionality, durability, and aesthetics.",
        icon: Armchair,
    }
]

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description?: string }) {
    return (
        <div className="flex flex-col h-full items-center text-center p-8 rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border">
            <Icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
            {description && <p className="text-muted-foreground flex-grow">{description}</p>}
        </div>
    );
}

function CommercialServiceCard({ icon: Icon, name }: { icon: React.ElementType, name: string }) {
    return (
        <div className="flex flex-col h-full items-center justify-center p-6 rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border">
            <Icon className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-center font-headline">{name}</h4>
        </div>
    )
}

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What We Do
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We Provide best Commerical Interior Designs. Our designs are contemporary while maintaining a classic elegance, resulting in a wider market appeal.
          </p>
        </div>
        
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            {mainServices.map(service => (
                <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>

        <div className="mt-16 md:mt-24">
            <h3 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl font-headline mb-8">
                Our Commercial Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch">
                {commercialServices.map(service => (
                    <CommercialServiceCard
                        key={service.name}
                        icon={service.icon}
                        name={service.name}
                    />
                ))}
            </div>
        </div>
        
        <div className="mt-16 md:mt-24">
            <h3 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl font-headline mb-8">
                Our Features
            </h3>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
                {features.map(feature => (
                     <ServiceCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
