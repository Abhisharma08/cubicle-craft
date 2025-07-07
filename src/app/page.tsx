import { AboutUs } from '@/components/about-us';
import { ContactSection } from '@/components/contact-section';
import { Cta } from '@/components/cta';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/portfolio-gallery';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Services />
        <Gallery />
        <Testimonials />
        <Faq />
        <Cta />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
