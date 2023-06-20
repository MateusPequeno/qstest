import React from "react";
import { formatCurrency } from "utils";
import PropTypes from "prop-types";
import ItemCounter from "components/ItemCounter";
import {
  BasketItemCard,
  DescriptionText,
  ItemCounterDiv,
  ItemNameText,
  PriceText,
  RowDiv,
} from "./styles";

const BasketCardComponent = ({
  basketItem,
  handleMinusClick,
  handlePlusClick,
}) => (
  <BasketItemCard>
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
        onMinusClick={() => handleMinusClick(basketItem)}
        onPlusClick={() => handlePlusClick(basketItem)}
        number={basketItem?.quantity}
      />
    </ItemCounterDiv>
  </BasketItemCard>
);

BasketCardComponent.propTypes = {
  basketItem: PropTypes.shape({
    name: PropTypes.string,
    selectedModifier: PropTypes.object,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
  handleMinusClick: PropTypes.func,
  handlePlusClick: PropTypes.func,
};

export default BasketCardComponent;
