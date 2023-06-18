import styled from "styled-components";

export const RoundedButton = styled.button`
  padding: 16px;
  border-radius: 24px;
  width: 100%;
  background-color: ${(props) =>
    props.active
      ? `${props.theme.primaryColour}`
      : `${props.theme.lightGrayTwo}`};

  font-size: 16px;
  border: none;
`;
export const ButtonText = styled.text`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.75px;
  color: ${(props) =>
    props?.active ? `${props.theme.whiteOne}` : `${props.theme.lightGrayText}`};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
