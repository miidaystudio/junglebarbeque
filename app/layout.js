import "./globals.css";
import { Dela_Gothic_One, Caveat, Outfit, Plus_Jakarta_Sans } from "next/font/google";

const delaGothic = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dela",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata = {
  title: "KOOKY KIND | Cookies That Don't Follow The Recipe",
  description:
    "We bake playful, wildly delicious cookies with personality. Made with good ingredients and zero boring.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${delaGothic.variable} ${caveat.variable} ${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-[#FBF6EE] text-[#191817] font-sans antialiased selection:bg-[#FFD233] selection:text-[#191817]">
        {children}
      </body>
    </html>
  );
}
