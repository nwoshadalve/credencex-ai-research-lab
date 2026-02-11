import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavDesktop from "@/components/nav/nav-desktop";
import NavMobile from "@/components/nav/nav-mobile";
import Footer from "@/components/footer/footer";
import { menuItems } from "@/config/common/menu-items";
import ThemeFavicon from "@/components/common/theme-favicon";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CredenceX AI Research Lab",
  description: "Explore cutting-edge AI research and innovations at CredenceX AI Research Lab.",
  icons: {
    icon: [
      { url: "/favicon/favicon_light/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon_light/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon_light/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon/favicon_light/favicon.ico",
    apple: "/favicon/favicon_light/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <ThemeFavicon />
          <NavDesktop menuItems={menuItems} />
          <NavMobile menuItems={menuItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
