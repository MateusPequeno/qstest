import styled from "styled-components";

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

  background-color: ${(props) => `${props.theme.primaryColour}`};
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
