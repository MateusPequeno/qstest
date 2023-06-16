import React from "react";
import {
  Carousel,
  ClickableItem,
  ItemIcon,
  ItemImage,
  ItemText,
  ItemTextDiv,
} from "./styles";

const CarouselComponent = ({ menuData, handleItemClick, selectedItemId }) => (
  <Carousel>
    {menuData?.sections?.map((item) => (
      <ClickableItem
        key={item?.id}
        onClick={() => handleItemClick(item?.id)}
        selected={selectedItemId === item?.id}
      >
        <ItemIcon selected={selectedItemId === item?.id}>
          <ItemImage src={item?.images[0]?.image} alt="Food" />
        </ItemIcon>
        <ItemTextDiv>
          <ItemText selected={selectedItemId === item?.id}>
            {item?.name}
          </ItemText>
        </ItemTextDiv>
      </ClickableItem>
    ))}
  </Carousel>
);

export default CarouselComponent;
