import React, { memo } from "react";
import { ButtonText, FloatingFooter, RoundedButton } from "./styles";

const FloatingFooterButton = ({ basket }) => (
  <FloatingFooter>
    <RoundedButton>
      <ButtonText>Your basket &bull; {basket?.length} item</ButtonText>
    </RoundedButton>
  </FloatingFooter>
);
export default memo(FloatingFooterButton);
