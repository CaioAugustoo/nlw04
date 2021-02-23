import React from "react";
import * as S from "./styles";

const Profile = () => {
  return (
    <S.Wrapper>
      <img src="https://github.com/caioaugustoo.png" alt="Pedro Giampietro" />
      <div>
        <strong>Caio Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </S.Wrapper>
  );
};

export default Profile;
