import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

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
export const IconButton = styled.button`
  padding: 5px;
  border: none;
  background-color: white;
  transform: ${(props) => (props.shouldRotate ? `rotate(-180deg)` : null)};
`;
export const ArrowDownIcon = styled(AiOutlineDown).attrs({
  size: 24,
})``;

export const ColapserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 12px;
`;