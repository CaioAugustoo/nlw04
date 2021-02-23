import React from "react";
import * as S from "./styles";

const ExperienceBar = () => {
  return (
    <S.Wrapper>
      <S.Experience>0 xp</S.Experience>
      <S.CurrentExperienceWrapper>
        <div style={{ width: "60%" }} />
        <S.CurrentExperience style={{ left: "50%" }}>
          300 xp
        </S.CurrentExperience>
      </S.CurrentExperienceWrapper>
      <span>600 xp</span>
    </S.Wrapper>
  );
};

export default ExperienceBar;
