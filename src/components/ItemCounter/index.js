import React from "react";

import {
  Container,
  IconContainer,
  MinusIcon,
  NumberText,
  PlusIcon,
} from "./styles";

const ItemCounter = ({ number, onMinusClick, onPlusClick }) => (
  <Container>
    <IconContainer onClick={() => onMinusClick(number)}>
      <MinusIcon />
    </IconContainer>
    <NumberText>{number}</NumberText>
    <IconContainer onClick={() => onPlusClick(number)}>
      <PlusIcon />
    </IconContainer>
  </Container>
);

export default ItemCounter;
