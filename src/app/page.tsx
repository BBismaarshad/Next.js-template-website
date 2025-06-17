import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Hero from "./Components/Hero";
import ProjectSection from "./Components/ProjectSection";
import ClientFeedback from "./Components/ClientFeedback";
import FAQSection from "./Components/FAQSection";

export default function Home() {
  return (
    <main className="px-4 md:px-12 lg:px-24 py-10 space-y-24">
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ClientFeedback />
      <FAQSection />
      <ContactSection />

    </main>
  );
}
