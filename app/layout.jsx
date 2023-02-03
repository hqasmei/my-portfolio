"use client"
import "../styles/globals.css"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import Social from "@/components/Social"
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <Social />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
