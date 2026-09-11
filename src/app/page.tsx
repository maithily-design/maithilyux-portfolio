import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WorkSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
