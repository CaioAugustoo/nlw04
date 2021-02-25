import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

const Profile = () => {
  const { userLevel } = useContext(ChallengesContext);

  return (
    <S.Wrapper>
      <img src="https://github.com/caioaugustoo.png" alt="Pedro Giampietro" />
      <div>
        <strong>Caio Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {userLevel}
        </p>
      </div>
    </S.Wrapper>
  );
};

export default Profile;
