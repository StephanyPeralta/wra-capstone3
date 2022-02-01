import styled from 'styled-components';

const NoteListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  @media (max-width: 440px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export { NoteListWrapper };
