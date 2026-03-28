import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JusVez | Seu Direito à Saúde Não Pode Esperar",
  description:
    "Cansado de esperar na fila do SUS? A JusVez ajuda você a garantir seu direito à saúde. Consultoria especializada em Florianópolis/SC. Avaliação gratuita.",
  keywords:
    "fila SUS, direito à saúde, judicialização saúde, cirurgia SUS demora, advogado saúde Florianópolis, JusVez, SUS espera, liminar saúde",
  metadataBase: new URL("https://jusvez-site.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JusVez | Seu Direito à Saúde Não Pode Esperar",
    description:
      "Ajudamos pacientes a garantir seu direito à saúde quando o SUS não cumpre os prazos legais.",
    type: "website",
    locale: "pt_BR",
    siteName: "JusVez",
    url: "/",
    images: [{ url: "/opengraph.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JusVez | Seu Direito à Saúde Não Pode Esperar",
    description:
      "Ajudamos pacientes a garantir seu direito à saúde quando o SUS não cumpre os prazos legais.",
    images: ["/opengraph.jpg"],
  },
  icons: { icon: "/jusvez-icon.png" },
  other: { "theme-color": "#0A1128" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JusVez",
  description:
    "Consultoria especializada em conectar pacientes do SUS a soluções jurídicas para garantir o direito à saúde.",
  url: "https://jusvez-site.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: "BR",
  priceRange: "Avaliação gratuita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
