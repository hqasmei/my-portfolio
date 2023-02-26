import "../../styles/globals.css"
import type { Metadata } from "next"

import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: "Projects | Hosna Qasmei",
  description: "Welcome to my projects",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-neutral-900">
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
