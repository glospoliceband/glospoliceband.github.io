import type { Metadata } from "next";

import { FacebookProvider } from "@/features/Facebook";
import { GlosPoliceBand } from "@/features/Layout";
import "@/styles/globals.css";

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>
      <FacebookProvider>
        <GlosPoliceBand>{children}</GlosPoliceBand>
      </FacebookProvider>
    </body>
  </html>
);

export default RootLayout;
