import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Bright Minds Future Leaders | Micro School in New Caney, TX",
  description:
    "Personalized micro-school education developing character, leadership, and academic excellence. Serving New Caney, Humble, Kingwood, and surrounding areas.",
  keywords:
    "micro school, New Caney, private school, personalized education, character development, leadership, small class sizes",
  authors: [{ name: "Bright Minds Future Leaders" }],
  creator: "Bright Minds Future Leaders",
  publisher: "Bright Minds Future Leaders",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightmindsfutureleaders.com",
    title: "Bright Minds Future Leaders | Micro School in New Caney, TX",
    description:
      "Personalized micro-school education developing character, leadership, and academic excellence. Serving New Caney, Humble, Kingwood, and surrounding areas.",
    siteName: "Bright Minds Future Leaders",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Minds Future Leaders | Micro School in New Caney, TX",
    description:
      "Personalized micro-school education developing character, leadership, and academic excellence. Serving New Caney, Humble, Kingwood, and surrounding areas.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VWCL4RN');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '414826608258340');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6683b61ddd58563eacbbf34b"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${openSans.className} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VWCL4RN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=414826608258340&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
