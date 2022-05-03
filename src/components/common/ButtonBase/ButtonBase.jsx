import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBaseStyle } from "./buttonBase.style";

const ButtonBase = ({ children, onClick, className, toHref, state }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(toHref, { state });
  };

  return (
    <ButtonBaseStyle
      className={className}
      onClick={toHref ? handleNavigate : onClick}
    >
      {children}
    </ButtonBaseStyle>
  );
};

export default ButtonBase;
