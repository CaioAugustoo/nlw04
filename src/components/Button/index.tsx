import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({ onClick, children, disabled, ...props }: ButtonProps) => {
  return (
    <S.Wrapper onClick={onClick} disabled={disabled} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
