import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <div className="flex h-screen flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
