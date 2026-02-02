"use client";
import { useState, useEffect } from "react";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import NextAppDirEmotionCacheProvider from "./NextAppDirEmotionCacheProvider";

export default function ClientLayout({ children }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <main className="content">{children}</main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </NextAppDirEmotionCacheProvider>
    );
  }

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
