import "@/scss/index.scss"
import "@/scss/buttons.scss"
import type { Metadata } from "next";
import localFont from "next/font/local";
import Transition from "@/components/Transition";
import Footer from "@/components/Footer";

const outfit = localFont({
  src: "./fonts/OutfitVF.ttf",
  variable: "--font-outfit",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdullah Salahuddin",
  description: "Freelance web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <Transition>
          {children}
        </Transition>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
