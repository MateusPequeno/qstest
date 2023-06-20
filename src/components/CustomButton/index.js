import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { ButtonText, RoundedButton } from "./styles";

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
CustomButton.propTypes = {
  buttonText: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
export default CustomButton;
