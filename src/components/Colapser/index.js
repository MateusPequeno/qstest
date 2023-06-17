import React from "react";
import { ArrowDownIcon, ColapserDiv, ColapserText, IconButton } from "./styles";

const Colapser = ({ menuSection, shouldRotate, onClick }) => (
  <ColapserDiv>
    <ColapserText>{menuSection?.name}</ColapserText>
    <IconButton
      shouldRotate={shouldRotate}
      onClick={() => onClick(!shouldRotate)}
    >
      <ArrowDownIcon />
    </IconButton>
  </ColapserDiv>
);

export default Colapser;
