import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  scrollbar-width: thin;
  z-index: 1;
  scrollbar-color: transparent transparent;
  background-color: rgba(0, 0, 0, 0.5);

  /* Firefox */
  &::-moz-scrollbar {
    width: 0;
  }

  /* WebKit */
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const BasketItemCard = styled.div`
  padding: 8px 16px;
  gap: 4px;
  background-color: ${(props) => props.theme.white};
  border-bottom: ${(props) => `1px solid ${props.theme.white}`};
`;
export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CloseIcon = styled(AiOutlineClose).attrs({
  size: 28,
})`
  color: ${(props) => `${props.theme.blackTextTwo}`};
`;
export const CloseIconDiv = styled.div``;
export const ItemNameText = styled.text`
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.blackTextTwo};
`;

export const PriceText = styled.text`
  font-family: "Roboto" sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
`;
export const DescriptionText = styled.text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.lightGrayText};
`;
export const ItemCounterDiv = styled.div`
  width: 94px;
  padding: 8px;
  gap: 16px;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.backgroundGray};
  min-height: 100%;
  width: 100%;
  margin-bottom: 20%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 35px;
  right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  border: none;
  color: ${(props) => props.theme.primaryColour};
  cursor: pointer;
`;

export const HeaderDiv = styled.div`
  display: flex;
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrayTwo}`};
  background-color: ${(props) => `${props.theme.white}`};
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 48px 16px 18px;
`;

export const HeaderText = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.blackTextTwo};
  margin: 0;
`;
export const SubtotalDiv = styled.div`
  padding: 16px;
`;
export const ThinLineDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 16px;
`;
export const ThinLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => `${props.theme.lightGrayTwo}`};
`;

export const TotalText = styled.text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.blackTextTwo};
`;
export const TotalPriceText = styled.text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: ${(props) => props.theme.blackTextTwo};
`;

export const FooterButtonDiv = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: auto;
`;
