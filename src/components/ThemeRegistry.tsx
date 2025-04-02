"use client";

import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import theme from "@/services/theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({
      key: "mui",
    });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    return (
      <style key={cache.key} data-emotion={`${cache.key} ${names.join(" ")}`}>
        {Object.values(cache.inserted).join("")}
      </style>
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
