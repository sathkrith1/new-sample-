"use client";

import React, { useEffect, useState } from "react";
import { FlipText } from "@/components/ui/flip-text";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/config";

export function RoleFlipText({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const roles = siteConfig.roles;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles]);

  return (
    <FlipText
      key={index}
      duration={1.1}
      loop={false}
      className={cn("text-accent", className)}
    >
      {roles[index]}
    </FlipText>
  );
}