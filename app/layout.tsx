import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Funke Oluwatuyi — Frontend Developer', description: 'A frontend developer making the internet work, one thoughtful experience at a time.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
