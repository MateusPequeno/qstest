import React from "react";
import { ButtonText, RoundedButton } from "./styles";
import { useTheme } from "styled-components";

const CustomButton = ({ buttonText, active, onClick }) => {
  const theme = useTheme();
  return (
    <RoundedButton
      active={active}
      theme={theme}
      disabled={!active}
      onClick={onClick}
    >
      <ButtonText active={active}>{buttonText}</ButtonText>
    </RoundedButton>
  );
};
export default CustomButton;
