import styled from "styled-components";
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
