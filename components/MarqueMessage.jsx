"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueMessage({ text, loop, speed }) {
  const [finish, setFinish] = useState(false);

  return (
    <Marquee
      speed={speed}
      loop={loop}
      onFinish={() => setFinish(true)}
      direction="right"
    >
      <p
        className={`bg-red-300 lg:text-lg font-bold bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent customSm:text-xs `}
      >
        {text}
      </p>
    </Marquee>
  );
}
