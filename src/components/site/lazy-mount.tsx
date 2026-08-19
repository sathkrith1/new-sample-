"use client";

import React, { useEffect, useRef, useState } from "react";

export function LazyMount({
  children,
  placeholder,
  rootMargin = "120% 0px",
}: {
  children: React.ReactNode;
  placeholder: React.ReactNode;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return <div ref={ref}>{visible ? children : placeholder}</div>;
}