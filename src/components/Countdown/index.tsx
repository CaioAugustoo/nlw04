import React from "react";

import useCountdown from "../../Hooks/useCountdown";
import Button from "../Button";

import * as S from "./styles";

const Countdown = () => {
  const {
    minuteLeft,
    minuteRight,
    secondsLeft,
    secondsRight,
    startCountdown,
    resetCountdown,
    isActive,
    hasFinished,
  } = useCountdown();

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
