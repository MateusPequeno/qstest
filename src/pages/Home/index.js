import React, { useContext, useEffect, useState, memo } from "react";
import HeaderComponent from "components/Header";
import CarouselComponent from "components/Carousel";
import SearchBar from "components/SearchBar";
import {
  determineWhichPriceToShow,
  formatCurrency,
} from "../../utils/index.js";
import { apiRestaurant } from "services";
import { BasketContext } from "contexts/Basket";
import {
  MenuContainer,
  SearchBarDiv,
  FullScreenDiv,
  CenteredDiv,
  WhiteBackgroundDiv,
  ColapserDiv,
  ArrowDownIcon,
  ColapserText,
  IconButton,
  MenuItemContainer,
  MenuItemImage,
  LeftBox,
  DescriptionText,
  ItemNameText,
  PriceText,
  MenuItemImageDiv,
  NumberBox,
  NumberText,
  TextAndNumberDiv,
  ThinBorderBox,
  AllergyInfoText,
  FloatingFooter,
  RoundedButton,
  ButtonText,
} from "./styles";

const Home = () => {
  const { basket, addToBasket } = useContext(BasketContext);
  console.log("basket", basket);

  const [menuData, setMenuData] = useState({});
  const [menuSection, setMenuSection] = useState([]);
  const [businessData, setBusinessData] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [arrowIconState, setArrowIconState] = useState(false);
  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [businessDetails, menuDetails] = await Promise.all([
          apiRestaurant.getBusinessDetails(),
          apiRestaurant.getMenuDetails(),
        ]);

        console.log("Business details:", businessDetails);
        console.log("Menu details:", menuDetails);

        setBusinessData(businessDetails);
        setMenuData(menuDetails);
        setSelectedItemId(menuDetails?.sections[0]?.id);
        setMenuSection(menuDetails?.sections);
      } catch (error) {
        console.log("::fetchData::ERROR::", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderComponent bannerImage={businessData?.webSettings?.bannerImage} />
      <FullScreenDiv>
        <SearchBarDiv>
          <SearchBar />
        </SearchBarDiv>
        <CenteredDiv>
          <WhiteBackgroundDiv>
            <MenuContainer>
              <CarouselComponent
                menuData={menuData}
                selectedItemId={selectedItemId}
                handleItemClick={handleItemClick}
              />
              {menuSection
                ?.filter((menuSection) => menuSection?.visible === 1)
                .map((menuSection) => (
                  <>
                    <ColapserDiv>
                      <ColapserText>{menuSection?.name}</ColapserText>
                      <IconButton
                        shouldRotate={arrowIconState}
                        onClick={() => setArrowIconState(!arrowIconState)}
                      >
                        <ArrowDownIcon />
                      </IconButton>
                    </ColapserDiv>

                    {menuSection?.items.map((sectionItem, index) => (
                      <MenuItemContainer
                        key={index.toString()}
                        onClick={() => {
                          addToBasket(sectionItem);
                        }}
                      >
                        <LeftBox>
                          <TextAndNumberDiv>
                            {basket.filter(
                              (item) => item.name === sectionItem.name
                            ).length > 0 && (
                              <NumberBox>
                                <NumberText>
                                  {
                                    basket.filter(
                                      (item) => item.name === sectionItem.name
                                    ).length
                                  }
                                </NumberText>
                              </NumberBox>
                            )}
                            <ItemNameText>{sectionItem?.name}</ItemNameText>
                          </TextAndNumberDiv>
                          <DescriptionText>
                            {sectionItem?.description}
                          </DescriptionText>
                          <PriceText>
                            {determineWhichPriceToShow(sectionItem)}
                          </PriceText>
                        </LeftBox>
                        {sectionItem?.images?.length > 0 && (
                          <MenuItemImageDiv>
                            <MenuItemImage
                              src={sectionItem?.images[0]?.image}
                              alt="Item"
                            />
                          </MenuItemImageDiv>
                        )}
                      </MenuItemContainer>
                    ))}
                  </>
                ))}
            </MenuContainer>
            <ThinBorderBox>
              <AllergyInfoText>View allergy information</AllergyInfoText>
            </ThinBorderBox>
            {basket?.length > 0 && (
              <FloatingFooter>
                <RoundedButton>
                  <ButtonText>
                    Your basket &bull; {basket?.length} item
                  </ButtonText>
                </RoundedButton>
              </FloatingFooter>
            )}
            {/*       <CartContainer>
              <ItemText>Carrinho</ItemText>
            </CartContainer> */}
          </WhiteBackgroundDiv>
        </CenteredDiv>
      </FullScreenDiv>
    </>
  );
};

export default memo(Home);
