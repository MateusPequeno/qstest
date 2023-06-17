import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  padding: 20px 0px 24px 16px;
  gap: 8%;
`;
export const ClickableItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.selected ? `2px solid ${props.theme.backgroundColour}` : "none"};
  padding-bottom: 24px;
`;

export const ItemIcon = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.selected ? `2px solid ${props.theme.primaryColour}` : "none"};
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemImage = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 74px;
    height: 74px;
  }
`;

export const ItemTextDiv = styled.div`
  padding-top: 19px;
`;
export const ItemText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  line-height: 18.75px;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
