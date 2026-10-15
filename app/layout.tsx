import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Olufunke Oluwatuyi — Frontend Developer | React, Next.js, TypeScript",
  description:
    "Olufunke Oluwatuyi is a frontend developer specializing in React, Next.js, TypeScript, and responsive UI. I build thoughtful, performant web experiences that work beautifully across all devices.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "web development",
    "responsive design",
    "UI/UX",
    "Nigeria",
    "portfolio",
  ],
  authors: [{ name: "Olufunke Oluwatuyi" }],
  creator: "Olufunke Oluwatuyi",
  publisher: "Olufunke Oluwatuyi",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oluwatuyiolufunke.com",
    title: "Olufunke Oluwatuyi — Frontend Developer",
    description:
      "A frontend developer making the internet work, one thoughtful experience at a time. Specializing in React, Next.js, TypeScript, and responsive UI.",
    siteName: "Olufunke Oluwatuyi — Portfolio",
    images: [
      {
        url: "/Oluwatuyi.jpeg",
        width: 1200,
        height: 630,
        alt: "Olufunke Oluwatuyi - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olufunke Oluwatuyi — Frontend Developer",
    description:
      "A frontend developer making the internet work, one thoughtful experience at a time.",
    images: ["/Oluwatuyi.jpeg"],
    creator: "@funmike_os",
  },
  icons: {
    icon: "/Oluwatuyi.jpeg",
    shortcut: "/Oluwatuyi.jpeg",
    apple: "/Oluwatuyi.jpeg",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://oluwatuyiolufunke.com"),
  alternates: {
    canonical: "https://oluwatuyiolufunke.com",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
