import { useState, useEffect } from "react";
import { clearTimeout } from "timers";

let countdownTimeout: NodeJS.Timeout;

const useCountdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  const startCountdown = () => setIsActive(true);

  const resetCountdown = () => {
    window.clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return {
    startCountdown,
    resetCountdown,
    minuteLeft,
    minuteRight,
    secondsRight,
    secondsLeft,
    isActive,
    time,
    hasFinished,
  };
};

export default useCountdown;
