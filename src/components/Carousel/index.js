import React from "react";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";

import {
  Carousel,
  ClickableItem,
  ItemIcon,
  ItemImage,
  ItemText,
  ItemTextDiv,
} from "./styles";

const CarouselComponent = ({ menuData, handleItemClick, selectedItemId }) => {
  const theme = useTheme();
  return (
    <Carousel>
      {menuData?.sections?.map((item) => (
        <ClickableItem
          key={item?.id}
          onClick={() => handleItemClick(item?.id)}
          selected={selectedItemId === item?.id}
          theme={theme}
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
};

CarouselComponent.propTypes = {
  menuData: PropTypes.shape({
    sections: PropTypes.array,
  }),
  handleItemClick: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string,
};

export default CarouselComponent;
