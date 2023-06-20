import React from "react";
import { ArrowDownIcon, ColapserDiv, ColapserText, IconButton } from "./styles";

const Colapser = ({ menuSection }) => (
  <ColapserDiv>
    <ColapserText>{menuSection?.name}</ColapserText>
    <IconButton>
      <ArrowDownIcon />
    </IconButton>
  </ColapserDiv>
);

export default Colapser;
