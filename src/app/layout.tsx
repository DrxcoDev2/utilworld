import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar';
import Script from "next/script";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GTA VI countdown',
  description: 'The final countdown GTA VI realese',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Primary SEO */}
        <meta name="description" content="Countdown to the official release of GTA VI. Live timer, news, leaks and updates about Grand Theft Auto VI." />
        <link rel="canonical" href="https://utilworld.vercel.app" />

        {/* Open Graph (Facebook, Discord, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GTA VI Countdown" />
        <meta property="og:title" content="GTA VI Countdown – The Final Countdown" />
        <meta property="og:description" content="See exactly how long remains until the release of Grand Theft Auto VI, including news and updates." />
        <meta property="og:url" content="https://utilworld.vercel.app" />
        <meta property="og:image" content="https://utilworld.vercel.app/preview.jpg" />

        {/* Twitter (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GTA VI Countdown – The Final Countdown" />
        <meta name="twitter:description" content="Track the remaining time until the official GTA VI release date." />
        <meta name="twitter:image" content="https://utilworld.vercel.app/preview.jpg" />

        {/* Fuente Pricedown vía CDN */}
        <link
          href="https://db.onlinewebfonts.com/c/a7600f3ef906b725df694b7e08952f06?family=Pricedown+V2"
          rel="stylesheet"
        />
        <script src="https://fpyf8.com/88/tag.min.js" data-zone="183951" async data-cfasync="false"></script>
        <Script
          id="moneytag-vignette"
          strategy="afterInteractive"
        >
          {`(function(s){
              s.dataset.zone='10164470';
              s.src='https://groleegni.net/vignette.min.js';
          })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}
        </Script>
        <Script id="moneytag-inline" strategy="afterInteractive">
          {`
            (function(s){
              s.dataset.zone = '10164908';
              s.src = 'https://al5sm.com/tag.min.js';
            })(
              [document.documentElement, document.body]
                .filter(Boolean)
                .pop()
                .appendChild(document.createElement('script'))
            );
            `}
        </Script>


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Registrar SW */}
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  );
}
