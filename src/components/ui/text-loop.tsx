"use client";
import React, { useState, useEffect } from "react";

import { roboto700 } from "@/styles/fonts";
import { motion } from "framer-motion";

const TextLoop = ({
  loopItems,
  delay,
}: {
  loopItems: string[];
  delay: number;
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % loopItems.length);
    }, delay);

    return () => clearInterval(interval);
  }, [loopItems, delay]);

  return (
    <motion.span
      key={currentItemIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ transitionProperty: "opacity, transform" }}
      className={`${roboto700.className}  text-purple-600`}
    >
      {loopItems[currentItemIndex]}
    </motion.span>
  );
};

export default TextLoop;
