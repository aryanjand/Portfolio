import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import info from "../profile.json";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${info.personalInfo.name} — ${info.personalInfo.jobTitle}`,
  description: info.metadata.description,
  generator: "Next.js",
  applicationName: info.personalInfo.name,
  keywords: info.metadata.keywords,
  colorScheme: "dark",
  openGraph: {
    title: `${info.personalInfo.name} — ${info.personalInfo.jobTitle}`,
    description: info.metadata.description,
    url: info.metadata.url,
    siteName: info.metadata.siteName,
    images: [
      {
        url: info.metadata.image,
        width: 1200,
        height: 630,
        alt: `${info.personalInfo.name} — ${info.personalInfo.jobTitle}`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
