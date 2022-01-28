import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import { SearchContainer, SearchInput, SearchIconWrapper } from './Search.styled';

function Search() {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
      <SearchIconWrapper>
        <BiSearchAlt2 size={25} />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
