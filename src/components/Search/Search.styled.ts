import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  padding: 0.1rem;
  margin: 0 1rem;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const SearchInput = styled.input`
  color: #000;
  border-radius: 6px;
  height: 45px;
  width: 100%;
  padding: 0.5rem 2.3rem 0.5rem 0.8rem;
  background-color: #ececec;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: #dfdfdf;
  }
  &:focus {
    outline: none;
  }
  @media (max-height: 440px) {
    height: 23px;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 0 0.6rem;
  &:focus {
    border: none;
  }
`;

export { SearchContainer, SearchInput, SearchIconWrapper };
