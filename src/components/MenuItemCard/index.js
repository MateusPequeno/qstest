import React, { useContext } from "react";
import { determineWhichPriceToShow } from "utils";
import PropTypes from "prop-types";

import { MenuItemImage } from "pages/Home/styles";
import { BasketContext } from "contexts/Basket";

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

const MenuItemCard = ({ sectionItem, index, handleMenuItemClick }) => {
  const { basket } = useContext(BasketContext);
  return (
    <MenuItemContainer
      key={index.toString()}
      onClick={() => {
        handleMenuItemClick(sectionItem);
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

MenuItemCard.propTypes = {
  sectionItem: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
      })
    ),
  }),
  index: PropTypes.number.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired,
};
export default MenuItemCard;
