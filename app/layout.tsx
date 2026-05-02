import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dzikri Ramadhan - Website Developer",
  description: "High-end modern developer portfolio of a website developer and tech innovator.",
  openGraph: {
    title: "Dzikri Ramadhan - Website Developer",
    description: "High-end modern developer portfolio of a website developer and tech innovator.",
    url: "https://yourportfolio.example.com",
    siteName: "Dzikri Ramadhan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dzikri Ramadhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
