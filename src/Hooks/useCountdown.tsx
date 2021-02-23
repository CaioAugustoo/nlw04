import { useState, useEffect } from "react";

const useCountdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  const startCountdown = () => setActive(true);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return {
    startCountdown,
    minuteLeft,
    minuteRight,
    secondsRight,
    secondsLeft,
    active,
    time,
  };
};

export default useCountdown;
