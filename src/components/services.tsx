import { Briefcase, PaintRoller, Armchair, Building2, Layers, Utensils, View, Box, DraftingCompass } from "lucide-react";
import React from "react";

const mainServices = [
    {
        title: "Office Workstations",
        description: "Modular workstations designed to support modern workstyles and efficient space use.",
        icon: DraftingCompass,
    },
    {
        title: "Storage Solutions",
        description: "Smart storage units that help keep offices tidy, organized, and clutter-free.",
        icon: Box,
    },
    {
        title: "Office Furniture",
        description: "Ergonomic chairs, executive desks, and modern furniture that blend style and function.",
        icon: Armchair,
    }
];

const features = [
    {
        title: "New Office Setup",
        description: "Complete furniture packages for setting up a new office with a focus on workflow, comfort, and modern aesthetics.",
        icon: Briefcase,
    },
    {
        title: "Office Renovation",
        description: "Upgrade existing spaces with new furniture and layouts that improve productivity and give your office a fresh, modern feel.",
        icon: PaintRoller,
    },
    {
        title: "Furniture & Products",
        description: "An extensive range of workstations, storage systems, and ergonomic furniture built for both performance and visual appeal.",
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

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What We Do
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide end-to-end office furniture solutions that enhance comfort, productivity, and the look of your workspace.
          </p>
        </div>
        
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
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