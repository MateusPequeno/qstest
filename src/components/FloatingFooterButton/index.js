import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import CustomButton from "components/CustomButton";
import { FloatingFooter } from "./styles";

const FloatingFooterButton = ({ buttonText, active, onClick }) => {
  const theme = useTheme();
  return (
    <FloatingFooter>
      <CustomButton
        active={active}
        theme={theme}
        disabled={!active}
        onClick={onClick}
        buttonText={buttonText}
      />
    </FloatingFooter>
  );
};
FloatingFooterButton.propTypes = {
  buttonText: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default FloatingFooterButton;
