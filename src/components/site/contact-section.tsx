"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialFlipButton, { type SocialItem } from "@/components/ui/social-flip-button";
import { CreepyButton } from "@/components/ui/creepy-button";

const SOCIAL_ITEMS: SocialItem[] = [
  { letter: "G", icon: <FaGithub />, label: "GitHub", href: "https://github.com/sathkrith1" },
  { letter: "L", icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sathkrith-gaur" },
  { letter: "E", icon: <FaEnvelope />, label: "Email", href: "mailto:sathkrith0@gmail.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 md:px-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Contact</p>
      <h2 className="font-display font-semibold text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.95] mb-10">
        LET&apos;S BUILD
        <br />
        SOMETHING WORTH PLAYING
      </h2>

      <div className="flex flex-col items-center gap-8">
        <CreepyButton
          onClick={() => {
            const subject = encodeURIComponent("Portfolio contact");
            window.location.href = `mailto:sathkrith0@gmail.com?subject=${subject}`;
          }}
        >
          SAY HELLO
        </CreepyButton>

        <SocialFlipButton items={SOCIAL_ITEMS} />

        <div className="font-mono text-xs text-muted">
          sathkrith0@gmail.com · +91 99894 91154 · Hyderabad, Telangana
        </div>
      </div>
    </section>
  );
}