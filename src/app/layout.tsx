import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { GlosPoliceBand } from "@/components/glospoliceband";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gloucestershire Police Band",
  description: "The band of the Gloucestershire Constabulary.",
  keywords: [
    "brass band",
    "band",
    "music",
    "Gloucestershire",
    "Cheltenham",
    "Gloucester",
    "Stroud",
    "Tewkesbury",
    "police",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlosPoliceBand>{children}</GlosPoliceBand>
      </body>
    </html>
  );
}
