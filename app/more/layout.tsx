import "../../styles/globals.css"
import type { Metadata } from "next"

import MoreNavbar from "@/components/Navbar/MoreNavbar"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: "About Me | Hosna Qasmei",
  description: "Welcome to my portfolio",
}

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white">
      <MoreNavbar />
      {children}
      <Footer isDark={true} />
    </section>
  )
}
