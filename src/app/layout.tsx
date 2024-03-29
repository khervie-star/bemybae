import type { Metadata } from "next";
import {
  Lato,
  Dancing_Script,
  La_Belle_Aurore,
  Outfit,
} from "next/font/google";
import localFont from "next/font/local";
import "animate.css";

const snowtimes = localFont({
  src: "../../public/fonts/snowtimes-cufonfonts/SnowtimesRegular-eZXlp.ttf",
  display: "swap",
  variable: "--font-snowtimes",
});

import "./globals.css";
import "../styles/falling-petals.styles.css";
import { FallingPetals } from "../components";

const d_script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-d_script",
});

const la_belle = La_Belle_Aurore({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-la_belle",
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const BASE_URI = "https://bemybae.vercel.app";

export const metadata: Metadata = {
  alternates: {
    canonical: `${BASE_URI}`,
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Be my bae?🥺",
    description: "I love you so much Momo_🌸🩷",
    url: "",
    siteName: "Momo_",
    images: [
      {
        url: `${BASE_URI}/og.jpeg`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: `${BASE_URI}/og.jpeg`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Momo_",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Be my bae?🥺",
  description: "I love you so much Momo_🌸🩷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${d_script.variable} ${la_belle.variable} ${lato.variable} ${snowtimes.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
