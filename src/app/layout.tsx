import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toast } from "@/components/ui/toast"
const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "InTech",
    template: "%s | InTech",
  },
  description: "TECH.C. InTechサークルの公式サイトです。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.variable} antialiased`}>
        <Providers>
          <Toast />
          {children}
        </Providers>
      </body>
    </html>
  )
}
