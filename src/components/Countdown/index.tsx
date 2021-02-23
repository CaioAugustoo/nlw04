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

      <Button onClick={startCountdown}>Iniciar um ciclo</Button>
    </div>
  );
};

export default Countdown;
