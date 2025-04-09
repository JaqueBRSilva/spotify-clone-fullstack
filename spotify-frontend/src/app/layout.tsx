import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import '../styles/globals.sass'


const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone FullStack",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
