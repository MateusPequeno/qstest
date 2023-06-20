import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => `${props.theme.primaryColour}`};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

export const TextButton = styled.button`
  border: none;
  border-bottom: ${(props) => (props.is_selected === 'true' ? "4px solid white" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px 0px;
  width: 232px;
  height: 52px;
  background-color: ${(props) => `${props.theme.primaryColour}`};
  cursor: pointer;
  @media (max-width: 768px) {
    border-bottom: "none";
    height: 64px;
    padding: 14px 16px;
  }
`;

export const HeaderText = styled.text`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: white;
`;

export const MenuIconContainer = styled.div``;

export const TextButtonMob = styled.button`
  background-color: ${(props) => `${props.theme.primaryColour}`};
  border: none;
  cursor: pointer;
`;

export const HeaderMobile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 10px;
  background-color: ${(props) => `${props.theme.primaryColour}`};
`;

export const BackIcon = styled(BiArrowBack).attrs({
  size: 28,
})`
  color: ${(props) => `${props.theme.primaryColour}`};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  @media (max-width: 768px) {
    object-fit: cover;
    object-position: center;
  }
`;
