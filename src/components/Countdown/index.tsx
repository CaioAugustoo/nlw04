import React, { useContext } from "react";

import { CountDownContext } from "../../contexts/CountdownContext";

import Button from "../Button";

import * as S from "./styles";

const Countdown = () => {
  const {
    minutes,
    seconds,
    resetCountdown,
    hasFinished,
    isActive,
    startCountdown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <S.Wrapper>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </S.Wrapper>

      {hasFinished ? (
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <>
          {!isActive ? (
            <Button
              onClick={startCountdown}
              className={isActive ? "active" : ""}
            >
              Iniciar um ciclo
            </Button>
          ) : (
            <Button
              onClick={resetCountdown}
              className={isActive ? "active" : ""}
            >
              Abandonar ciclo
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
