import HeaderComponent from "components/Header";
import React, { useEffect, useState } from "react";
import { apiRestaurant } from "services";
import {
  ClickableItem,
  MenuContainer,
  ItemIcon,
  ItemImage,
  Container,
  ItemText,
  SearchBarDiv,
  WrapDiv,
  MainContentDiv,
  FullScreenDiv,
  CenteredDiv,
  CardDiv,
  Carousel,
  CartContainer,
  ItemTextDiv,
} from "./styles";
import SearchBar from "components/SearchBar";
import { styled } from "styled-components";

const Home = () => {
  const [menuData, setMenuData] = useState({});
  const [businessData, setBusinessData] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const response = await apiRestaurant.getBusinessDetails();
        console.log("response", response);
        setBusinessData(response);
      } catch (error) {
        console.log("::fetchBusinessDetails::ERROR::", error);
      }
    };
    const fetchMenuDetails = async () => {
      try {
        const response = await apiRestaurant.getMenuDetails();

        setMenuData(response);
      } catch (error) {
        console.log("::fetchMenuDetails::ERROR::", error);
      }
    };

    fetchBusinessDetails();
    fetchMenuDetails();
  }, []);

  return (
    <>
      <HeaderComponent bannerImage={businessData?.webSettings?.bannerImage} />
      <FullScreenDiv>
        <SearchBarDiv>
          <SearchBar />
        </SearchBarDiv>
        <CenteredDiv>
          <CardDiv>
            <MenuContainer>
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
            </MenuContainer>
            {/*       <CartContainer>
              <ItemText>Carrinho</ItemText>
            </CartContainer> */}
          </CardDiv>
        </CenteredDiv>
      </FullScreenDiv>
    </>
  );
};

export default Home;
