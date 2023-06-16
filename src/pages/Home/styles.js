import { Colors } from "config/colors";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

export const Container = styled.div``;

export const SearchBarDiv = styled.div`
  width: 80%;
  background-color: ${Colors.backgroundGray};
  padding: 6px;
  @media (max-width: 768px) {
    padding: 16px 16px 16px 16px;
    width: 90%;
  }
`;
export const WrapDiv = styled.div`
  width: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const MenuContainer = styled.div`
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
    width: 100%;
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
  width: 100%;
  background-color: ${Colors.backgroundGray};
`;

export const CenteredDiv = styled.div`
  width: 80%;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WhiteBackgroundDiv = styled.div`
  padding: 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const ColapserText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  font-size: 24px;
  letter-spacing: 0.5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DescriptionText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ItemNameText = styled.text`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
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
export const ColapserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 12px;
`;
export const IconButton = styled.button`
  padding: 5px;
  border: none;
  background-color: white;
  transform: ${(props) => (props.shouldRotate ? `rotate(-180deg)` : null)};
`;
export const ArrowDownIcon = styled(AiOutlineDown).attrs({
  size: 24,
})``;

export const MenuItemContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 217px;
`;
export const MenuItemImage = styled.img`
  width: 128px;
  height: 85px;
`;

export const MenuItemImageDiv = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 128px;
  height: 85px;
`;

export const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 4px;

  width: 14px;
  height: 18px;
  background-color: ${Colors.primaryColor};
  border-radius: 4px;
`;
export const NumberText = styled.text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

export const TextAndNumberDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const ThinBorderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 24px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${Colors.whiteOne};
  margin-bottom: 25%;
`;
export const AllergyInfoText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: ${Colors.primaryColor};
`;

export const FloatingFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px 24px 24px;
  backdrop-filter: blur(4px);
`;

export const RoundedButton = styled.button`
  padding: 16px;
  border-radius: 24px;
  background-color: ${Colors.primaryColor};
  font-size: 16px;
  width: 345px;
  height: 48px;
  border: none;
`;

export const ButtonText = styled.text`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.75px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
