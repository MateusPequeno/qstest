import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  //align-items: center;
  justify-content: center;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 720px;
  padding-bottom: 10%;
  padding-top: 3%;
  position: ${(props) => (props.pushtobottom ? "fixed" : "")};
  bottom: ${(props) => (props.pushtobottom ? "0" : "")};
  position: ${(props) => (props.pushtobottom ? "50%" : "")};
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8%;
  right: 39%;
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

  @media (max-width: 768px) {
    /* Adjust the properties for smaller screens */
    top: 5%;
    right: 20%;
    width: 28px;
    height: 28px;
  }

  @media (max-width: 480px) {
    /* Adjust the properties for even smaller screens */
    top: 3%;
    right: 10%;
    width: 28px;
    height: 28px;
  }
`;

export const ModalHeader = styled.text`
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.blackTextTwo};
`;

export const ModalImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const ModalDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.grayToBlack};
`;

export const ModifierItemText = styled.text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.grayToBlack};
`;

export const ModifierItemSubText = styled.text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.lightGrayText};
`;

export const Card = styled.div`
  padding: 16px;
  padding-top: 50px;
  background-color: ${(props) => props.theme.white};
  height: 125px;
`;

export const ModifiersCard = styled.div`
  padding: 16px 24px;

  background-color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModifierOptionsCard = styled.div`
  padding: 16px 24px;

  background-color: ${(props) => props.theme.grayDefault};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RadioCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.primaryColour};
  background-color: ${(props) =>
    props.checked === 'true'? props.theme.primaryColour : props.theme.white};

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;
export const CustomButtonContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 4px 24px 24px;
  margin-top: 1%;
`;

export const FooterDiv = styled.div`
  padding-top: 27px;
  background-color: ${(props) => props.theme.grayDefault};
`;
export const OptionsDiv = styled.div``;
