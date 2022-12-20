import React, { useEffect } from "react"

import { data } from "../../data/ButtonBarData"
import { ButtonsContainer, Button } from "./ButtonBarStyles"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const ButtonBar = () => {
  const initial = { opacity: 0, y: 30 }
  const animation = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      })
    }
  }, [inView, animation])

  return (
    <ButtonsContainer>
      {data.map((item, idx) => {
        return (
          <Button
            initial={initial}
            transition={{ delay: 0, duration: 0 }}
            animate={animation}
            onClick={() => {}}
            key={idx}
            ref={ref}
          >
            {item.label}
          </Button>
        )
      })}
    </ButtonsContainer>
  )
}

export default ButtonBar
