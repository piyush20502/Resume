import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Piyush Priyadarshi - Interactive Resume",
  description: "Interactive 3D resume of Piyush Priyadarshi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>{children}</body>
    </html>
  )
}

