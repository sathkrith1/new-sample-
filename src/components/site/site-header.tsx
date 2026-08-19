"use client";

import React, { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-14 backdrop-blur-md bg-background/70 border-b border-border">
      <Link href="/" className="font-display font-semibold tracking-tight text-sm md:text-base flex-shrink-0">
        SATHKRITH<span className="text-accent">.</span>GAUR
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-muted">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg bg-background border border-border text-foreground flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Resume Button - Desktop */}
      <a
        href="/resume.pdf"
        target="_blank"
        className="hidden md:block font-mono text-xs uppercase tracking-wider border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
      >
        Resume
      </a>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border px-4 py-6 flex flex-col items-center gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider text-muted hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="font-mono text-xs uppercase tracking-wider border border-border rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors w-full text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}