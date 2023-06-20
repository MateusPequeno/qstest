import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import PropTypes from "prop-types";

import {
  BackIcon,
  Header,
  HeaderMobile,
  HeaderText,
  Image,
  ImageContainer,
  MenuIconContainer,
  Nav,
  TextButton,
  TextButtonMob,
} from "./styles";

const HeaderComponent = ({ bannerImage }) => {
  const [selectedOption, setSelectedOption] = useState("Menu");
  const [mobileDevice, setMobileDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setMobileDevice(true);
    }
  }, []);

  return (
    <>
      {!mobileDevice ? (
        <Header>
          <Nav>
            <TextButton
              is_selected={selectedOption === "Menu" ? "true" : "false"}
              onClick={() => setSelectedOption("Menu")}
            >
              <HeaderText>MENU</HeaderText>
            </TextButton>
            <TextButton
              is_selected={selectedOption === "Enter" ? "true" : "false"}
              onClick={() => setSelectedOption("Enter")}
            >
              <HeaderText>ENTRAR</HeaderText>
            </TextButton>
            <TextButton
              is_selected={selectedOption === "Contact" ? "true" : "false"}
              onClick={() => setSelectedOption("Contact")}
            >
              <HeaderText>CONTATO</HeaderText>
            </TextButton>
          </Nav>
        </Header>
      ) : (
        <HeaderMobile>
          <BackIcon />
          <TextButtonMob
            is_selected={selectedOption === "Menu" ? "true" : "false"}
            onClick={() => setSelectedOption("Menu")}
          >
            <HeaderText>MENU</HeaderText>
          </TextButtonMob>
          <MenuIconContainer>
            <AiOutlineMenu size="28" color="white" />
          </MenuIconContainer>
        </HeaderMobile>
      )}
      <ImageContainer>
        <Image src={bannerImage} alt="image" />
      </ImageContainer>
    </>
  );
};

HeaderComponent.propTypes = {
  bannerImage: PropTypes.string,
};

export default HeaderComponent;
