import styled from "styled-components";

export const SearchBarDiv = styled.div`
  width: 80%;
  background-color: ${(props) => `${props.theme.backgroundColour}`};
  padding: 6px;
  @media (max-width: 768px) {
    padding: 16px 16px 16px 16px;
    width: 90%;
  }
`;
export const FullScreenDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => `${props.theme.backgroundColour}`};
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
  background-color: ${(props) => `${props.theme.grayDefault}`};
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const MenuItemImage = styled.img`
  width: 128px;
  height: 85px;
`;

export const ThinBorderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 24px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${(props) => `${props.theme.whiteOne}`};
  margin-bottom: 25%;
`;
export const AllergyInfoText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: ${(props) => `${props.theme.primaryColour}`};
`;

export const MenuContainer = styled.div`
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => `${props.theme.white}`};
  @media (max-width: 768px) {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
    width: 100%;
  }
`;
