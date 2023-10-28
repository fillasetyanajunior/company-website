import "./globals.css"
import type { Metadata } from "next"
import Logo from "@/assets/logo/logo.png"

export const metadata: Metadata = {
  title: "Just Code In Web",
  description: "Generated by just code in web",
  icons: {
    icon: Logo.src
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
