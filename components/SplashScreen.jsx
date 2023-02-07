import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader.add({
      targets: "#logo",
      rotate: {
        value: 360,
        duration: 1800,
        easing: "easeInOutSine",
      },
      delay: 250,
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <Image id="logo" src="/light-logo.png" alt="" width={60} height={60} />
    </div>
  )
}

export default SplashScreen
