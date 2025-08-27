import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Back2Roots - Explore Astana in a New Way",
  description: "Back2Roots is a React Native application powered by AI talking head system with voice-to-voice interactions and AR coin collection system. Discover Astana's cultural and commercial attractions.",
  keywords: "Back2Roots, Astana, AI, AR, React Native, tourism, culture, local business, voice interaction",
  authors: [{ name: "Back2Roots Team" }],
  openGraph: {
    title: "Back2Roots - Explore Astana in a New Way",
    description: "Discover Astana through AI-powered cultural exploration and AR coin collection system.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
