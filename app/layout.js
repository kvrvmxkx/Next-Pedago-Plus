import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pedago+",
  description: "eLearning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`bg-app-background min-h-screen font-[family-name:var(--font-geist-sans)] antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
