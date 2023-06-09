import { styled } from "styled-components";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export const MinusIcon = styled(AiFillMinusCircle).attrs({
  size: 32,
})`
  color: ${(props) => `${props.theme.lightGrayTwo}`};
`;
export const PlusIcon = styled(AiFillPlusCircle).attrs({
  size: 32,
})`
  color: ${(props) => `${props.theme.primaryColour}`};
`;

export const NumberText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
  flex-direction: row;
`;
export const IconContainer = styled.div``;
