import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KICKS",
  description: "Step your game up",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Global meta tags, links, etc. */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
