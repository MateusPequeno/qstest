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

const BasketModal = ({ onClose }) => {
  const { basket, setBasket, removeFromBasket } = useContext(BasketContext);
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((accumulator, currentItem) => {
      let itemPrice = 0;
      if (currentItem.selectedModifier) {
        const basePrice = currentItem.price || 0;
        const modifierPrice = currentItem.selectedModifier.price || 0;
        itemPrice = (basePrice + modifierPrice) * currentItem.quantity;
      } else {
        itemPrice = (currentItem.price || 0) * currentItem.quantity;
      }

      return accumulator + itemPrice;
    }, 0);

    return formatCurrency(totalPrice);
  };
  const totalPrice = calculateTotalPrice(basket);

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
          <BasketItemCard key={index.toString()}>
            <RowDiv>
              <ItemNameText>{basketItem?.name}</ItemNameText>
              <PriceText>
                {basketItem?.selectedModifier
                  ? formatCurrency(
                      basketItem?.selectedModifier?.price * basketItem?.quantity
                    )
                  : formatCurrency(basketItem?.price * basketItem?.quantity)}
              </PriceText>
            </RowDiv>

            <DescriptionText>
              {basketItem?.selectedModifier?.name &&
                `${basketItem.selectedModifier.name} (+${formatCurrency(
                  basketItem.selectedModifier.price
                )})`}
            </DescriptionText>
            <ItemCounterDiv>
              <ItemCounter
                onMinusClick={() => {
                  if (basketItem.quantity === 1) {
                    removeFromBasket(basketItem);
                  } else {
                    setBasket((prevBasket) => {
                      const updatedBasket = prevBasket.map((item) => {
                        if (item.id === basketItem.id) {
                          return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                      });
                      return updatedBasket;
                    });
                  }
                }}
                onPlusClick={() => {
                  setBasket((prevBasket) => {
                    const updatedBasket = prevBasket.map((item) => {
                      if (item.id === basketItem.id) {
                        return { ...item, quantity: item.quantity + 1 };
                      }
                      return item;
                    });
                    return updatedBasket;
                  });
                }}
                number={basketItem?.quantity}
              />
            </ItemCounterDiv>
          </BasketItemCard>
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
