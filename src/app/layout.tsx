import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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
        {/* Twitter */}
        <meta property="twitter:image" content="The final countdown GTA VI realese"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="The final countdown GTA VI realese"></meta>
        <meta property="twitter:description" content="See how long it will take for GTA VI to be released with news and more"></meta>
        {/* Default */}
        <meta property="og:image" content="The final countdown GTA VI realese"></meta>
        <meta property="og:site_name" content="GTA VI countdown"></meta>
        <meta property="og:title" content="GTA VI countdown"></meta>
        <meta property="og:url" content="utilworld.vercel.app"></meta>
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
