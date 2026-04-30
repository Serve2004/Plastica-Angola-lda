import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { PartnerCtaSection } from "@/components/home/partner-cta-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ProductsSection } from "@/components/home/products-section";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PartnersSection />
      <PartnerCtaSection />
      <ContactSection />
    </div>
  );
}
