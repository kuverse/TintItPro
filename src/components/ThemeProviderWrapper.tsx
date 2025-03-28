"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents SSR mismatch by not rendering the provider until mounted
  if (!mounted) return <>{children}</>;

  return <ThemeProvider attribute="class" defaultTheme="system">
    {children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
