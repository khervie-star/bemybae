import type { Metadata } from "next";
import { Lato, Dancing_Script, La_Belle_Aurore } from "next/font/google";
import "./globals.css";
import "../styles/falling-petals.styles.css";

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

const BASE_URI = "https://be_my_bae_momo_.vercel.app";

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
      <body
        className={`${d_script.variable} ${la_belle.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
