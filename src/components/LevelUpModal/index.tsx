import React, { useContext } from "react";

import * as S from "./styles";

import Button from "../Button";
import { ChallengesContext } from "../../contexts/ChallengesContext";

const LevelUpModal = () => {
  const { userLevel, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Header>{userLevel}</S.Header>

        <S.Title>Parabéns</S.Title>
        <S.Description>Você alcançou um novo level.</S.Description>

        <Button onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </Button>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default LevelUpModal;
