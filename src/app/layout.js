import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "M. Nadiril Khoir | Full Stack Developer",
  description:
    "Portfolio of M. Nadiril Khoir — a Full Stack Developer building clean, fast, and thoughtful digital products for small businesses and creators.",
  openGraph: {
    title: "M. Nadiril Khoir | Full Stack Developer",
    description:
      "Clean, fast, and thoughtful digital products for small businesses and creators.",
    images: [{ url: "/Profile.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Nadiril Khoir | Full Stack Developer",
    description:
      "Clean, fast, and thoughtful digital products for small businesses and creators.",
    images: ["/Profile.webp"],
  },
};

export const viewport = {
  themeColor: "#f7f6f2",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
