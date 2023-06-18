import React from "react";
import { ArrowDownIcon, ColapserDiv, ColapserText, IconButton } from "./styles";

const Colapser = ({ menuSection, shouldrotate, onClick }) => (
  <ColapserDiv>
    <ColapserText>{menuSection?.name}</ColapserText>
    <IconButton
      shouldrotate={shouldrotate}
      onClick={() => onClick(!shouldrotate)}
    >
      <ArrowDownIcon />
    </IconButton>
  </ColapserDiv>
);

export default Colapser;
