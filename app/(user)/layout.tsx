import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavDesktop from "@/components/nav/nav-desktop";
import NavMobile from "@/components/nav/nav-mobile";
import Footer from "@/components/footer/footer";
import { menuItems } from "@/config/common/menu-items";
import ThemeFavicon from "@/components/common/theme-favicon";
import {
  DEFAULT_DESCRIPTION,
  organizationStructuredData,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "gZ7b5jzgA3J07SQhRb6Q4HrgfzJHYN--pv-FklfQB_E",
  },
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
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationStructuredData),
            }}
          />
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
