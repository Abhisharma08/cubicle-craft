"use client";

import { useState } from "react";
import { AboutUs } from '@/components/about-us';
import { ContactDialog } from '@/components/contact-section';
import { Cta } from '@/components/cta';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/portfolio-gallery';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { SectionAnimator } from "@/components/section-animator";


export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-dvh">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <main className="flex-1">
        <Hero />
        <SectionAnimator>
          <AboutUs />
        </SectionAnimator>
        <SectionAnimator>
          <Services />
        </SectionAnimator>
        <SectionAnimator>
          <Gallery />
        </SectionAnimator>
        <SectionAnimator>
          <Testimonials />
        </SectionAnimator>
        <SectionAnimator>
          <Faq />
        </SectionAnimator>
        <SectionAnimator>
          <Cta onContactClick={() => setIsContactOpen(true)} />
        </SectionAnimator>
      </main>
      <Footer />
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}
