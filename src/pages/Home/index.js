import React, { useContext, useEffect, useState, memo } from "react";
import HeaderComponent from "components/Header";
import CarouselComponent from "components/Carousel";
import SearchBar from "components/SearchBar";

import { apiRestaurant } from "services";
import { BasketContext } from "contexts/Basket";
import { WebSettingsContext } from "contexts/WebSettings.js";
import {
  MenuContainer,
  SearchBarDiv,
  FullScreenDiv,
  CenteredDiv,
  WhiteBackgroundDiv,
  ThinBorderBox,
  AllergyInfoText,
} from "./styles";
import Colapser from "components/Colapser/index.js";
import MenuItemCard from "components/MenuItemCard/index.js";
import FloatingFooterButton from "components/FloatingFooterButton/index.js";
import Modal from "components/Modal";

const Home = () => {
  const { basket } = useContext(BasketContext);
  const { webSettingsState } = useContext(WebSettingsContext);

  const [menuData, setMenuData] = useState({});
  const [menuSection, setMenuSection] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [arrowIconState, setArrowIconState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  const handleArrowClick = () => {
    setArrowIconState(!arrowIconState);
  };
  const handleMenuItemClick = (item) => {
    setModalData(item);
    setModalState(true);
  };
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuDetails = await apiRestaurant.getMenuDetails();
        setMenuData(menuDetails);
        setSelectedItemId(menuDetails?.sections[0]?.id);
        setMenuSection(menuDetails?.sections);
      } catch (error) {
        console.log("::fetchData::ERROR::", error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <HeaderComponent
        bannerImage={webSettingsState?.webSettings?.bannerImage}
      />
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
                    <Colapser
                      menuSection={menuSection}
                      shouldrotate={arrowIconState}
                      onClick={handleArrowClick}
                    />
                    {menuSection?.items.map((sectionItem, index) => (
                      <MenuItemCard
                        handleMenuItemClick={handleMenuItemClick}
                        key={index?.toString()}
                        index={index}
                        sectionItem={sectionItem}
                      />
                    ))}
                  </>
                ))}
            </MenuContainer>
            <ThinBorderBox>
              <AllergyInfoText>View allergy information</AllergyInfoText>
            </ThinBorderBox>
            {modalState && (
              <Modal
                modalData={modalData}
                onClose={() => {
                  setModalState(false);
                  setModalData({});
                }}
              />
            )}
            {basket?.length > 0 && (
              <FloatingFooterButton
                active={true}
                buttonText={`Your basket  \u2022 ${basket?.length} ${
                  basket?.length === 1 ? "item" : "items"
                }`}
                basket={basket}
              />
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
