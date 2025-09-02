import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext"; // Import from the new location

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firebase Auth App",
  description: "Next.js app with Firebase Authentication",
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
