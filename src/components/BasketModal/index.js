import React, { memo, useContext } from "react";
import { BasketContext } from "contexts/Basket";

import ItemCounter from "components/ItemCounter";
import FloatingFooterButton from "components/FloatingFooterButton";
import {
  BasketItemCard,
  Card,
  DescriptionText,
  HeaderDiv,
  HeaderText,
  ItemNameText,
  ModalContainer,
  PriceText,
  RowDiv,
  ItemCounterDiv,
  CloseIcon,
  CloseIconDiv,
  SubtotalDiv,
  ThinLine,
  ThinLineDiv,
  TotalText,
  TotalPriceText,
} from "./styles";
import { formatCurrency } from "utils";
import BasketCardComponent from "components/BasketItemCard";

const BasketModal = ({
  onClose,
  handleMinusClick,
  handlePlusClick,
  totalPrice,
  basket,
}) => {
  return (
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
};

export default memo(BasketModal);
