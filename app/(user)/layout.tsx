import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavDesktop from "@/components/nav/nav-desktop";
import NavMobile from "@/components/nav/nav-mobile";
import Footer from "@/components/footer/footer";
import { menuItems } from "@/config/common/menu-items";

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
  title: "SentinelX AI Research Lab",
  description: "Explore cutting-edge AI research and innovations at SentinelX AI Research Lab.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <NavDesktop menuItems={menuItems} />
          <NavMobile menuItems={menuItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
