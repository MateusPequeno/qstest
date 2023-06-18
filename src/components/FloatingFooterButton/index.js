import React, { memo } from "react";
import { ButtonText, FloatingFooter, RoundedButton } from "./styles";
import { useTheme } from "styled-components";
import CustomButton from "components/CustomButton";

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
export default memo(FloatingFooterButton);
