"use client";

import { useEffect } from "react";

function isDarkThemeActive() {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeFavicon() {
  useEffect(() => {
    const updateFavicons = (isDark: boolean) => {
      const faviconPath = isDark ? "/favicon/favicon_dark" : "/favicon/favicon_light";

      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach((link) => link.remove());

      const head = document.head;

      const faviconIco = document.createElement("link");
      faviconIco.rel = "icon";
      faviconIco.href = `${faviconPath}/favicon.ico`;
      faviconIco.type = "image/x-icon";
      head.appendChild(faviconIco);

      const favicon16 = document.createElement("link");
      favicon16.rel = "icon";
      favicon16.type = "image/png";
      favicon16.sizes = "16x16";
      favicon16.href = `${faviconPath}/favicon-16x16.png`;
      head.appendChild(favicon16);

      const favicon32 = document.createElement("link");
      favicon32.rel = "icon";
      favicon32.type = "image/png";
      favicon32.sizes = "32x32";
      favicon32.href = `${faviconPath}/favicon-32x32.png`;
      head.appendChild(favicon32);

      const favicon192 = document.createElement("link");
      favicon192.rel = "icon";
      favicon192.type = "image/png";
      favicon192.sizes = "192x192";
      favicon192.href = `${faviconPath}/android-chrome-192x192.png`;
      head.appendChild(favicon192);

      const appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      appleTouchIcon.sizes = "180x180";
      appleTouchIcon.href = `${faviconPath}/apple-touch-icon.png`;
      head.appendChild(appleTouchIcon);

      const shortcutIcon = document.createElement("link");
      shortcutIcon.rel = "shortcut icon";
      shortcutIcon.href = `${faviconPath}/favicon.ico`;
      head.appendChild(shortcutIcon);
    };

    const syncFavicons = () => updateFavicons(isDarkThemeActive());

    syncFavicons();

    const observer = new MutationObserver(syncFavicons);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (document.documentElement.getAttribute("data-theme") === "system") {
        syncFavicons();
      }
    };

    darkModeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      observer.disconnect();
      darkModeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return null;
}
