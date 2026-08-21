import "./globals.css";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Jungle Barbeque | Luxury Botanical Dining & Live-Fire Charcoal Grill",
  description:
    "Experience India's premier luxury botanical dining destination. Live-fire tabletop charcoal grills and an opulent 7-course buffet spread.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-[#0c120e] text-[#d8c29d] antialiased selection:bg-[#d8c29d] selection:text-[#0c120e]">
        {children}
      </body>
    </html>
  );
}
