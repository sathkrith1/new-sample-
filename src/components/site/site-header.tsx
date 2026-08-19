"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 backdrop-blur-md bg-background/70 border-b border-border">
      <Link href="/" className="font-display font-semibold tracking-tight text-sm md:text-base">
        SATHKRITH<span className="text-accent">.</span>GAUR
      </Link>
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted">
        <a href="/#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="/#skills" className="hover:text-foreground transition-colors">Skills</a>
        <a href="/#about" className="hover:text-foreground transition-colors">About</a>
        <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a
        href="/resume.pdf"
        target="_blank"
        className="font-mono text-xs uppercase tracking-wider border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
      >
        Resume
      </a>
    </header>
  );
}