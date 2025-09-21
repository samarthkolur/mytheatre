import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext"; // Import from the new location
import { Navbar } from "@/components/navBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTheatre",
  description: "Book Theatre Tickets Easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider> {/* Wrap here */}
      </body>
    </html>
  );
}
