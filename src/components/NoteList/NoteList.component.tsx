import React from 'react';

import { NoteListWrapper } from './NoteList.styled';

type VideoListProps = {
  children: React.ReactNode;
};

function NoteList({ children }: VideoListProps) {
  return <NoteListWrapper>{children}</NoteListWrapper>;
}

export default NoteList;
