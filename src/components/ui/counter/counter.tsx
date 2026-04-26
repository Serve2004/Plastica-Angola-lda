import { useEffect, useState } from "react";
import { useScrollRestart } from "./useInView";

interface CounterProps {
  end: number;
  duration?: number;
}

export function Counter({ end, duration = 1500 }: CounterProps) {
  const { ref, isVisible } = useScrollRestart<HTMLSpanElement>(0.3);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    // 🔥 RESET quando sai da tela
    if (!isVisible) {
      setValue(0);
      return;
    }

    let start = 0;
    const step = end / (duration / 16);

    interval = setInterval(() => {
      start += step;

      if (start >= end) {
        setValue(end);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{value}</span>;
}
