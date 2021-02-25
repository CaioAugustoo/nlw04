import React, { useContext } from "react";

import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountDownContext } from "../../contexts/CountdownContext";

import Button from "../Button";
import * as S from "./styles";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountDownContext);

  const handleChallengeSucceded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetCountdown();
    resetChallenge();
  };

  return (
    <S.Wrapper>
      {activeChallenge ? (
        <S.ChallengeActive>
          <S.GetXP>Ganhe {activeChallenge.amount} xp</S.GetXP>

          <S.ChallengeAbout>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <S.ChallengeTitle>Novo desafio</S.ChallengeTitle>
            <p>{activeChallenge.description}</p>
          </S.ChallengeAbout>

          <S.Actions>
            <Button onClick={handleChallengeFailed}>Falhei</Button>
            <Button onClick={handleChallengeSucceded}>Completei</Button>
          </S.Actions>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level up icon" />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Wrapper>
  );
};

export default ChallengeBox;
