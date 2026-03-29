import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/language-context";
import JsonLd from "@/components/json-ld";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hkfeatin.com"),
  title: {
    default: "HK Feat In Technology | Hong Kong Surgical Instruments Supplier",
    template: "%s | HK Feat In Technology",
  },
  description:
    "HK Feat In Technology supplies high-quality surgical instruments including ophthalmic, hair transplant, ENT, and plastic surgery instruments. Established in Hong Kong with over 20 years of experience serving surgeons worldwide.",
  keywords: [
    "surgical instruments Hong Kong",
    "ophthalmic instruments",
    "hair transplant tools",
    "plastic surgery instruments",
    "ENT instruments",
    "medical instruments supplier",
    "香港手術器械",
    "眼科器械",
    "植髮工具",
    "整形外科器械",
  ],
  authors: [{ name: "HK Feat In Technology" }],
  creator: "HK Feat In Technology",
  publisher: "HK Feat In Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_HK",
    alternateLocale: ["zh-Hant"],
    url: "https://hkfeatin.com",
    siteName: "HK Feat In Technology",
    title: "HK Feat In Technology | Hong Kong Surgical Instruments Supplier",
    description:
      "High-quality surgical instruments supplier in Hong Kong. Specializing in ophthalmic, hair transplant, ENT, and plastic surgery instruments with over 20 years of experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HK Feat In Technology - Surgical Instruments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HK Feat In Technology | Surgical Instruments Supplier",
    description:
      "Premium surgical instruments for ophthalmic, hair transplant, ENT, and plastic surgery. Trusted by surgeons worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-Hant"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
