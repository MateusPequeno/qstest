import React from "react";
import { SearchBarWrapper, SearchIcon, SearchInput } from "./styles";

const SearchBar = () => (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search menu items" />
    </SearchBarWrapper>
  );

export default SearchBar;
