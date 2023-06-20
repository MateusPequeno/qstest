import React, { memo } from "react";
import PropTypes from "prop-types";
import BasketCardComponent from "components/BasketItemCard";
import {
  RowDiv,
  SubtotalDiv,
  ItemNameText,
  PriceText,
  TotalPriceText,
  TotalText,
  ThinLineDiv,
  ThinLine,
} from "components/BasketModal/styles";
import { EmptyDiv, Header, HeaderText, MenuContainer } from "./styles";

const BasketCard = ({
  basket,
  handleMinusClick,
  handlePlusClick,
  totalPrice,
}) => (
  <MenuContainer>
    <Header>
      <HeaderText>Carrinho</HeaderText>
    </Header>
    {basket?.length > 0 ? (
      <>
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
            <TotalPriceText> {totalPrice}</TotalPriceText>
          </RowDiv>
        </SubtotalDiv>
      </>
    ) : (
      <EmptyDiv>
        <ItemNameText>Seu carrinho está vazio</ItemNameText>
      </EmptyDiv>
    )}
  </MenuContainer>
);
BasketCard.propTypes = {
  basket: PropTypes.array,
  totalPrice: PropTypes.string,
  handleMinusClick: PropTypes.func,
  handlePlusClick: PropTypes.func,
};
export default memo(BasketCard);
