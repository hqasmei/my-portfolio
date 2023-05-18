import Image from "next/image";

import Home from "@/components/home";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Root() {
  return (
    <main >
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
