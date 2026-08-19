import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { PhilosophySection } from "@/components/site/philosophy-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { AboutSection } from "@/components/site/about-section";
import { SkillsSection } from "@/components/site/skills-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}