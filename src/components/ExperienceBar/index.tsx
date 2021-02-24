import React, { useContext } from "react";

import { ChallengesContext } from "../../contexts/ChallengesContext";

import * as S from "./styles";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <S.Wrapper>
      <S.Experience>0 xp</S.Experience>
      <S.CurrentExperienceWrapper>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <S.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}xp
        </S.CurrentExperience>
      </S.CurrentExperienceWrapper>
      <span>{experienceToNextLevel} xp</span>
    </S.Wrapper>
  );
};

export default ExperienceBar;
