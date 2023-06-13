import { Colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div``;

export const ClickableItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.selected ? `2px solid ${Colors.primaryBrown}` : "none"};

  padding-bottom: 24px;
`;

export const ItemIcon = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50px;
  padding: 2.5%;
  overflow: hidden;
  border: ${(props) =>
    props.selected ? `3px solid ${Colors.primaryBrown}` : "none"};
`;

export const ItemImage = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50px;
  object-fit: cover;
`;

export const ItemText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  line-height: 18.75px;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const ItemTextDiv = styled.div`
  padding-top: 19px;
`;

export const SearchBarDiv = styled.div`
  width: 80%;
  background-color: ${Colors.backgroundGray};
  padding: 6px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;
export const WrapDiv = styled.div`
  width: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20;
  width: 50%;
`;

export const MainContentDiv = styled.div`
  padding: 20px;
`;

export const FullScreenDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.backgroundGray};
`;

export const CenteredDiv = styled.div`
  width: 80%;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardDiv = styled.div`
  padding: 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  padding: 20px 0px 24px 16px;
  gap: 15%;
`;
