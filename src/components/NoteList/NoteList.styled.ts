import styled from 'styled-components';

const NoteListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export { NoteListWrapper };
