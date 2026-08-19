"use client";

import React, { useEffect, useState } from "react";
import { FlipText } from "@/components/ui/flip-text";
import { cn } from "@/lib/utils";

const ROLES = ["GAME DEV", "WEB DEV", "APPLICATION DEV"];

export function RoleFlipText({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <FlipText
      key={index}
      duration={1.1}
      loop={false}
      className={cn("text-accent", className)}
    >
      {ROLES[index]}
    </FlipText>
  );
}