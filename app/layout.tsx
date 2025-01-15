import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Import Google Fonts with correct settings
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Correct key is "weight"
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // Correct key is "weight"
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
          dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
