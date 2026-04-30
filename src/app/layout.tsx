import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ETS TLSP Sécurité Privée | Gardiennage à Douala",
  description:
    "ETS TLSP Sécurité Privée accompagne particuliers, entreprises et événements avec des services de gardiennage, surveillance et protection à Douala.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col selection:bg-accent selection:text-primary">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
