"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ThemeContext,
  ThemeContextProvider,
} from "./components/context/ThemeContext";
import ThemeProvider from "./components/providers/ThemeProvider";
import AuthProvider from "./components/providers/AuthProvider";
import { useContext } from "react";
const metadata: Metadata = {
  title: "Blog application",
  description: "A modern blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useContext(ThemeContext);

  return (
    <html lang="en">
      <AuthProvider>
        <body className={`container px-10 ${theme === "dark" ? "dark" : ""}`}>
          <ThemeContextProvider>
            <ThemeProvider>
              <Navbar />

              {children}
              <Footer />
            </ThemeProvider>
          </ThemeContextProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
