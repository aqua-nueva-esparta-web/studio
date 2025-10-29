
'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import PasswordProtect from "@/components/password-protect";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("ane-authenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    sessionStorage.setItem("ane-authenticated", "true");
    setIsAuthenticated(true);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Agua Nueva Esparta Portal</title>
        <meta name="description" content="Presenting the Agua Nueva Esparta project for a sustainable water future." />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {isAuthenticated ? (
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        ) : (
          <PasswordProtect onAuthSuccess={handleAuthSuccess} />
        )}
        <Toaster />
      </body>
    </html>
  );
}
