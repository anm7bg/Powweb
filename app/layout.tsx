import "@/styles/globals.css";
import "@/styles/main.scss";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import StarGrid from "@/components/StarGrid";

export const metadata: Metadata = {
  metadataBase: new URL(`https://powweb.bg`),

  title: "PowWeb - SEO | Изработка и поддръжка на уеб сайтове и SPA!",
  description: "SEO | Изработка и поддръжка на уеб сайтове и SPA! Качество и коректност на добра цена",
    alternates: {
        canonical: './',
    },
  icons: {
    icon: "/favicon-new.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-black-100",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center pt-3">
              {/* <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link> */}
              <div className='footer-area'>
                  <p className='text-[1.1rem] tracking-widest text-center text-blue-100'>
                      Copyright © 2014 - 2024 <br/>powwebs@gmail.com
                  </p >
              </div>
            </footer>
          </div>
        </Providers>
        <script data-host="https://count.bg" data-dnt="false" src="https://count.bg/js/script.js" id="ZwSg9rf6GA" async defer></script>
      </body>
    </html>
  );
}
