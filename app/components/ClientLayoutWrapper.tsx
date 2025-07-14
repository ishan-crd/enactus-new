"use client";

import { useEffect } from "react";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Simple mobile detection
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Basic iOS viewport fix
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVH();
      window.addEventListener('resize', setVH);
      
      return () => {
        window.removeEventListener('resize', setVH);
      };
    }
  }, []);

  return <>{children}</>;
}