import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <S.Wrapper onClick={onClick} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
