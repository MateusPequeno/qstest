import React, { useEffect, useState } from "react";
import {
  AuxTextDiv,
  BackIcon,
  Header,
  HeaderMobile,
  HeaderText,
  Image,
  ImageContainer,
  MenuIconContainer,
  MobileNav,
  Nav,
  TextButton,
  TextButtonMob,
} from "./styles";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderComponent = ({ bannerImage }) => {
  const [selectedOption, setSelectedOption] = useState("Menu");
  const [mobileDevice, setMobileDevice] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 800) {
      console.log("mobile");
      setMobileDevice(true);
    }
  }, []);

  return (
    <>
      {!mobileDevice ? (
        <Header>
          <Nav>
            <TextButton
              isSelected={selectedOption === "Menu" ? true : false}
              onClick={() => setSelectedOption("Menu")}
            >
              <HeaderText>MENU</HeaderText>
            </TextButton>
            <TextButton
              isSelected={selectedOption === "Enter" ? true : false}
              onClick={() => setSelectedOption("Enter")}
            >
              <HeaderText>ENTRAR</HeaderText>
            </TextButton>
            <TextButton
              isSelected={selectedOption === "Contact" ? true : false}
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
            isSelected={selectedOption === "Menu" ? true : false}
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

export default HeaderComponent;
