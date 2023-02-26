import "../styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hosna Qasmei",
  description: "Welcome to my portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
