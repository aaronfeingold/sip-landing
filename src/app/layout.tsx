import "./globals.css";
import React, { ReactNode } from "react";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>SIP in Style - Coming Soon</title>
        <meta
          name="description"
          content="SIP in Style coming soon. Join our beta, support our project, and stay updated!"
        />
        {/* Google Analytics (Replace GA_MEASUREMENT_ID with your actual ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_TRACKING_ID');
        `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
