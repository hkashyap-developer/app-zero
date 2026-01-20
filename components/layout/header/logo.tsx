"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="my-auto">
      <Image
        src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"}
        alt="Logo"
        width={120}
        height={40}
      />
    </div>
  );
}
