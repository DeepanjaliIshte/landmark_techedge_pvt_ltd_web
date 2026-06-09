"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      const totalMilSecDur = duration * 1000;
      const incrementTime = (totalMilSecDur / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}
