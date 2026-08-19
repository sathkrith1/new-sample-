"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialFlipButton, { type SocialItem } from "@/components/ui/social-flip-button";
import { CreepyButton } from "@/components/ui/creepy-button";
import { siteConfig } from "@/data/config";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  envelope: <FaEnvelope />,
};

const SOCIAL_ITEMS: SocialItem[] = siteConfig.socialLinks.map((link) => ({
  letter: link.letter,
  icon: iconMap[link.icon as keyof typeof iconMap] || <FaEnvelope />,
  label: link.label,
  href: link.href,
}));

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 text-center">
      <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent mb-4">Contact</p>
      <h2 className="font-display font-semibold text-[clamp(1.8rem,10vw,4.5rem)] leading-[0.95] mb-8">
        LET&apos;S BUILD
        <br />
        SOMETHING WORTH PLAYING
      </h2>

      <div className="flex flex-col items-center gap-6">
        <CreepyButton
          className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-sm"
          onClick={() => {
            const subject = encodeURIComponent("Portfolio contact");
            window.location.href = `mailto:${siteConfig.email}?subject=${subject}`;
          }}
        >
          SAY HELLO
        </CreepyButton>

        <SocialFlipButton items={SOCIAL_ITEMS} />

        <div className="font-mono text-[10px] md:text-xs text-muted flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">{siteConfig.email}</a>
          <span>·</span>
          <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">{siteConfig.phone}</a>
          <span>·</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </section>
  );
}