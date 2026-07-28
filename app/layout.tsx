import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIAtlas — Directorio de herramientas de IA",
  description:
    "Descubre, compara y aprende sobre las mejores herramientas de inteligencia artificial.",
  verification: {
    google: "YpsRdVN3yEN1f_fwNYUDoCVff-YYxPLmerkzjFwX8yg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 text-white">

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-white/10 bg-zinc-950">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

            <div>
              <h3 className="text-xl font-bold">AIAtlas</h3>

              <p className="mt-2 max-w-md text-sm text-zinc-400">
                Descubre, compara y aprende sobre las mejores herramientas
                de Inteligencia Artificial.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">

              <Link
                href="/privacidad"
                className="transition hover:text-white"
              >
                Privacidad
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-white"
              >
                Cookies
              </Link>

              <Link
                href="/terminos"
                className="transition hover:text-white"
              >
                Términos
              </Link>

              <Link
                href="/contacto"
                className="transition hover:text-white"
              >
                Contacto
              </Link>

            </div>

          </div>

          <div className="border-t border-white/5 py-6 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} AIAtlas. Todos los derechos reservados.
          </div>
        </footer>

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8609847753474556"
          crossOrigin="anonymous"
        />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-K0117VRW4D"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-K0117VRW4D');
  `}
</Script>
      </body>
    </html>
  );
}