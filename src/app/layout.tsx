import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hosna Qasmei",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
