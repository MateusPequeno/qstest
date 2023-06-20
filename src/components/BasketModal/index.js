import React, { memo } from "react";
import PropTypes from "prop-types";
import FloatingFooterButton from "components/FloatingFooterButton";
import BasketCardComponent from "components/BasketItemCard";

import {
  Card,
  HeaderDiv,
  HeaderText,
  ItemNameText,
  ModalContainer,
  PriceText,
  RowDiv,
  CloseIcon,
  CloseIconDiv,
  SubtotalDiv,
  ThinLine,
  ThinLineDiv,
  TotalText,
  TotalPriceText,
} from "./styles";

const BasketModal = ({
  onClose,
  handleMinusClick,
  handlePlusClick,
  totalPrice,
  basket,
}) => (
  <ModalContainer>
    <Card>
      <HeaderDiv>
        <HeaderText></HeaderText>
        <HeaderText>Basket</HeaderText>
        <CloseIconDiv onClick={onClose}>
          <CloseIcon />
        </CloseIconDiv>
      </HeaderDiv>
      {basket?.map((basketItem, index) => (
        <BasketCardComponent
          key={index.toString()}
          basketItem={basketItem}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
      ))}
      <SubtotalDiv>
        <RowDiv>
          <ItemNameText>Subtotal</ItemNameText>
          <PriceText>{totalPrice}</PriceText>
        </RowDiv>
      </SubtotalDiv>
      <ThinLineDiv>
        <ThinLine />
      </ThinLineDiv>
      <SubtotalDiv>
        <RowDiv>
          <TotalText>Total</TotalText>
          <TotalPriceText> {totalPrice} </TotalPriceText>
        </RowDiv>
      </SubtotalDiv>
      <FloatingFooterButton
        onClick={onClose}
        active={true}
        buttonText={"Checkout now"}
      />
    </Card>
  </ModalContainer>
);

BasketModal.propTypes = {
  basket: PropTypes.array.isRequired,
  totalPrice: PropTypes.string,
  handleMinusClick: PropTypes.func,
  handlePlusClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default memo(BasketModal);
