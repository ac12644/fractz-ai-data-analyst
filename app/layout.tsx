import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FRACTZ AI Data Analyst - Intelligent Insights on Demand",
  description:
    "Analyze data and gain insights instantly with FRACTZ's AI Data Analyst. Flexible, fast analytics tailored to your needs.",
  keywords: [
    "FRACTZ",
    "AI data analyst",
    "data insights",
    "analytics",
    "real-time analysis",
    "business intelligence",
  ],
  openGraph: {
    title: "FRACTZ AI Data Analyst - Intelligent Insights on Demand",
    description:
      "Unlock data-driven insights instantly with FRACTZ's AI Data Analyst, your comprehensive solution for on-demand analytics.",
    url: "https://data-analyst.fractz.com/",
    type: "website",
    images: [
      {
        url: "https://data-analyst.fractz.com/_next/image?url=%2Flogo.png&w=384&q=75",
        width: 220,
        height: 24,
        alt: "FRACTZ AI Data Analyst",
      },
    ],
  },
  twitter: {
    site: "@fractz_com",
    title: "FRACTZ AI Data Analyst - Intelligent Insights",
    description:
      "Get data insights and analysis instantly with FRACTZ's AI Analyst.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
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
        <meta
          property="og:image"
          content="https://data-analyst.fractz.com/_next/image?url=%2Flogo.png&w=384&q=75"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:type" content="website" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                url: "https://data-analyst.fractz.com/",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://data-analyst.fractz.com/?search={search_term}",
                  "query-input": "required name=search_term",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
