import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NextThemesProvider } from "@/components/ThemeProvider";
import { HeroUIProvider } from "@/components/HeroUIProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Subash Maharjan",
    default: "Subash Maharjan",
  },
  description: "Check out my smart portfolio website with a custom AI chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        
          <HeroUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="py-8 px-4 md:px-6 mx-auto max-w-7xl">
                {children}
              </main>
              <Footer />
            </div>
            </NextThemesProvider>
          </HeroUIProvider>
        
      </body>
    </html>
  );
}
