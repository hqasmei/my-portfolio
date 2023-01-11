import React from "react"
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection
        intro="Hi, my name is"
        name="Hosna Qasmei."
        heading="I am a software engineer and aspiring entrepreneur."
        subtitle="Working towards creating software that makes life easier and more meaningful. "
        image="./assets/images/personal-photo.png"
      />
    </div>
  )
}
