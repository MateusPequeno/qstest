import { SubtotalDiv } from "components/BasketModal/styles";
import styled from "styled-components";
export const MenuContainer = styled.div`
  width: 320px;
  height: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
    width: 100%;
  }
`;
export const Header = styled.div`
  padding: 16px 24px;
  border-radius: 5px 5px 0px 0px;
`;
export const HeaderText = styled.text`
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.5px;
`;

export const EmptyDiv = styled(SubtotalDiv)`
  background-color: ${(props) => props.theme.white};
`;
