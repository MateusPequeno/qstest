import React, { useContext } from "react";
import {
  DescriptionText,
  ItemNameText,
  LeftBox,
  MenuItemContainer,
  MenuItemImageDiv,
  NumberBox,
  NumberText,
  PriceText,
  TextAndNumberDiv,
} from "./styles";
import { MenuItemImage } from "pages/Home/styles";
import { determineWhichPriceToShow } from "utils";
import { BasketContext } from "contexts/Basket";

const MenuItemCard = ({ sectionItem, index }) => {
  const { basket, addToBasket } = useContext(BasketContext);
  return (
    <MenuItemContainer
      key={index.toString()}
      onClick={() => {
        addToBasket(sectionItem);
      }}
    >
      <LeftBox>
        <TextAndNumberDiv>
          {basket.filter((item) => item.name === sectionItem.name).length >
            0 && (
            <NumberBox>
              <NumberText>
                {basket.filter((item) => item.name === sectionItem.name).length}
              </NumberText>
            </NumberBox>
          )}
          <ItemNameText>{sectionItem?.name}</ItemNameText>
        </TextAndNumberDiv>
        <DescriptionText>{sectionItem?.description}</DescriptionText>
        <PriceText>{determineWhichPriceToShow(sectionItem)}</PriceText>
      </LeftBox>
      {sectionItem?.images?.length > 0 && (
        <MenuItemImageDiv>
          <MenuItemImage src={sectionItem?.images[0]?.image} alt="Item" />
        </MenuItemImageDiv>
      )}
    </MenuItemContainer>
  );
};
export default MenuItemCard;
