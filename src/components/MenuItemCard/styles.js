import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
export const TextAndNumberDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 4px;

  width: 14px;
  height: 18px;
  background-color: ${(props) => `${props.theme.primaryColour}`};
  border-radius: 4px;
`;

export const NumberText = styled.text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
export const ItemNameText = styled.text`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
`;
export const DescriptionText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;
export const PriceText = styled.text`
  padding-top: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
`;
export const MenuItemImageDiv = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 128px;
  height: 85px;
`;
