import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Enactus Miranda House",
  description: "Where Innovation Meets Social Change",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Spline+Sans:wght@400;500;700"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Reset and base styles */
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            
            /* Prevent horizontal scrolling on all devices */
            .overflow-x-hidden {
              overflow-x: hidden !important;
            }
            
            /* iOS Safari fixes - mobile only */
            @media (max-width: 768px) {
              html, body {
                -webkit-overflow-scrolling: touch;
              }
              
              /* Fix viewport height on mobile */
              body {
                min-height: 100vh;
                min-height: calc(var(--vh, 1vh) * 100);
              }
            }
          `
        }} />
      </head>
      <body
        className={`${inter.variable} overflow-x-hidden bg-white text-[#111817]`}
        style={{ 
          fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
          minHeight: '100vh'
        }}
      >
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}