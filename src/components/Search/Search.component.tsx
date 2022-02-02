import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import { useNotesContext } from '../../providers/Notes';
import { SearchContainer, SearchInput, SearchIconWrapper } from './Search.styled';

function Search() {
  const [searchText, setSearchText] = useState('');
  const { saveSearchTerm } = useNotesContext();

  const handleKeyUp = () => {
    saveSearchTerm(searchText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={searchText}
      />
      <SearchIconWrapper>
        <BiSearchAlt2 size={25} />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
