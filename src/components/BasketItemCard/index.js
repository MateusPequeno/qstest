import React from 'react';
import { BasketItemCard, DescriptionText, ItemCounterDiv, ItemNameText, PriceText, RowDiv } from './styles';
import ItemCounter from 'components/ItemCounter';
import { formatCurrency } from 'utils';

const BasketCardComponent = ({ basketItem, handleMinusClick, handlePlusClick }) => {

  return (
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
};

export default BasketCardComponent;
