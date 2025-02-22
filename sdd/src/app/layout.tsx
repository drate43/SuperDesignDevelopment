import "@/styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulbasaur",
  description: "Super (Bulbasaur) Design Development",
  icons: [{ rel: "icon", url: "bulba-roll.gif", type: "image/gif" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
