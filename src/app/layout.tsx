import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabio Reva Yanda - Full-Stack Developer Portfolio",
  description:
    "Portfolio of Fabio Reva Yanda, a passionate full-stack developer skilled in Next.js, JavaScript, TypeScript, Node.js, MongoDB, MySQL, and WordPress. Explore my projects and get in touch!",
  keywords: [
    "full-stack developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "MySQL",
    "WordPress",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Fabio Reva Yanda", url: "https://foreynd.space" }],
  creator: "Fabio Reva Yanda",
  publisher: "Fabio Reva Yanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fabio Reva Yanda - Full-Stack Developer Portfolio",
    description:
      "Discover the projects and skills of Fabio Reva Yanda, a full-stack developer specializing in modern web technologies like Next.js, Node.js, and MongoDB.",
    url: "https://foreynd.space",
    siteName: "Fabio Reva Yanda Portfolio",
    images: [
      {
        url: "https://foreynd.space/og-image.jpg", // Ganti dengan URL gambar OG Anda
        width: 1200,
        height: 630,
        alt: "Fabio Reva Yanda Portfolio Image",
      },
    ],
    locale: "en_US", // Ganti sesuai bahasa, misalnya "id_ID" untuk Indonesia
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Reva Yanda - Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Fabio Reva Yanda, a full-stack developer with expertise in Next.js, JavaScript, TypeScript, and more.",
    images: ["https://foreynd.space/og-image.jpg"], // Ganti dengan URL gambar Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://foreynd.space",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
