
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
