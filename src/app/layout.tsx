import "./globals.css";
import React, { ReactNode } from "react";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "inVinoVentures",
  description: "A description of my website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>SIP The Owl- Coming Soon</title>
        <meta
          name="description"
          content="SIP in Style Soon. Join our beta, support our project, and stay updated!"
        />
        {/* Google Analytics (Replace GA_MEASUREMENT_ID with your actual ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TJ742VECQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7TJ742VECQ');
        `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
