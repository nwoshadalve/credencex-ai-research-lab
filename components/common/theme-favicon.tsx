"use client";

import { useEffect } from "react";

export default function ThemeFavicon() {
  useEffect(() => {
    // Function to update favicons based on browser theme
    const updateFavicons = (isDark: boolean) => {
      const faviconPath = isDark ? "/favicon/favicon_dark" : "/favicon/favicon_light";

      // Remove existing favicon links
      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach(link => link.remove());

      // Create and append new favicon links
      const head = document.head;

      // Main favicon.ico
      const faviconIco = document.createElement('link');
      faviconIco.rel = 'icon';
      faviconIco.href = `${faviconPath}/favicon.ico`;
      faviconIco.type = 'image/x-icon';
      head.appendChild(faviconIco);

      // 16x16 PNG
      const favicon16 = document.createElement('link');
      favicon16.rel = 'icon';
      favicon16.type = 'image/png';
      favicon16.sizes = '16x16';
      favicon16.href = `${faviconPath}/favicon-16x16.png`;
      head.appendChild(favicon16);

      // 32x32 PNG
      const favicon32 = document.createElement('link');
      favicon32.rel = 'icon';
      favicon32.type = 'image/png';
      favicon32.sizes = '32x32';
      favicon32.href = `${faviconPath}/favicon-32x32.png`;
      head.appendChild(favicon32);

      // 192x192 PNG (for Chrome and Android)
      const favicon192 = document.createElement('link');
      favicon192.rel = 'icon';
      favicon192.type = 'image/png';
      favicon192.sizes = '192x192';
      favicon192.href = `${faviconPath}/android-chrome-192x192.png`;
      head.appendChild(favicon192);

      // Apple Touch Icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.sizes = '180x180';
      appleTouchIcon.href = `${faviconPath}/apple-touch-icon.png`;
      head.appendChild(appleTouchIcon);

      // Shortcut icon
      const shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      shortcutIcon.href = `${faviconPath}/favicon.ico`;
      head.appendChild(shortcutIcon);
    };

    // Check browser's color scheme preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial favicon based on browser theme
    updateFavicons(darkModeQuery.matches);

    // Listen for browser theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      updateFavicons(e.matches);
    };

    darkModeQuery.addEventListener('change', handleThemeChange);

    // Cleanup
    return () => {
      darkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return null;
}
