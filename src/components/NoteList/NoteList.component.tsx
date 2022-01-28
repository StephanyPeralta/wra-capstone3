import React from 'react';

import Note from '../Note';
import { NoteListWrapper } from './NoteList.styled';

function NoteList() {
  return (
    <NoteListWrapper>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </NoteListWrapper>
  );
}

export default NoteList;
