import React from "react";
import PropTypes from "prop-types";

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
ItemCounter.propTypes = {
  number: PropTypes.number,
  onMinusClick: PropTypes.func,
  onPlusClick: PropTypes.func,
};

export default ItemCounter;
