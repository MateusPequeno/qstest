import React, { useContext, useEffect, useState, memo } from "react";
import HeaderComponent from "components/Header";
import CarouselComponent from "components/Carousel";
import SearchBar from "components/SearchBar";
import Colapser from "components/Colapser/index.js";
import MenuItemCard from "components/MenuItemCard/index.js";
import FloatingFooterButton from "components/FloatingFooterButton/index.js";
import Modal from "components/Modal";
import BasketModal from "components/BasketModal";
import BasketCard from "components/BasketCard";

import { apiRestaurant } from "services";
import { BasketContext } from "contexts/Basket";
import { WebSettingsContext } from "contexts/WebSettings.js";

import { calculateTotalPrice } from "utils";
import {
  MenuContainer,
  SearchBarDiv,
  FullScreenDiv,
  CenteredDiv,
  WhiteBackgroundDiv,
  ThinBorderBox,
  AllergyInfoText,
} from "./styles";

const Home = () => {
  const { basket, removeFromBasket, setBasket } = useContext(BasketContext);
  const { webSettingsState } = useContext(WebSettingsContext);

  const [menuData, setMenuData] = useState({});
  const [menuSection, setMenuSection] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [arrowIconState, setArrowIconState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [basketModal, setBasketModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [mobileDevice, setMobileDevice] = useState(false);

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
  const handleMinusClick = (basketItem) => {
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
  };

  const handlePlusClick = (basketItem) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) => {
        if (item.id === basketItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedBasket;
    });
  };

  const totalPrice = calculateTotalPrice(basket);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuDetails = await apiRestaurant.getMenuDetails();
        setMenuData(menuDetails);
        setSelectedItemId(menuDetails?.sections[0]?.id);
        setMenuSection(menuDetails?.sections);
        if (window.innerWidth < 800) {
          setMobileDevice(true);
        }
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
                  <React.Fragment key={menuSection?.id.toString()}>
                    <Colapser
                      menuSection={menuSection}
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
                  </React.Fragment>
                ))}
            </MenuContainer>
            <ThinBorderBox>
              {mobileDevice && (
                <AllergyInfoText>View allergy information</AllergyInfoText>
              )}
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
            {basketModal && (
              <BasketModal
                basket={basket}
                totalPrice={totalPrice}
                modalData={modalData}
                handleMinusClick={handleMinusClick}
                handlePlusClick={handlePlusClick}
                onClose={() => {
                  setBasketModal(false);
                }}
              />
            )}
            {mobileDevice && basket?.length > 0 && (
              <FloatingFooterButton
                onClick={() => setBasketModal(true)}
                active={true}
                buttonText={`Your basket  \u2022 ${basket?.length} ${
                  basket?.length === 1 ? "item" : "items"
                }`}
              />
            )}

            {!mobileDevice && (
              <BasketCard
                basket={basket}
                totalPrice={totalPrice}
                modalData={modalData}
                handleMinusClick={handleMinusClick}
                handlePlusClick={handlePlusClick}
              />
            )}
          </WhiteBackgroundDiv>
        </CenteredDiv>
      </FullScreenDiv>
    </>
  );
};

export default memo(Home);
