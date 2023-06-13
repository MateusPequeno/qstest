import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { Colors } from "config/colors";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${Colors.lightGray};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const SearchIcon = styled(AiOutlineSearch).attrs({
  size: 24,
})`
  padding: 10px 12px;
  color: ${Colors.gray};
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${Colors.blackText};
    font-family: "Roboto", sans-serif;
    @media (max-width: 768px) {
      color: ${Colors.gray};
    }
  }
`;
