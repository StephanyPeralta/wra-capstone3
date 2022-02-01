import React from 'react';

import Note from '../Note';
import { NoteProps } from '../../utils/types';
import { NoteListWrapper } from './NoteList.styled';

type VideoListProps = {
  notes: NoteProps[];
};

function NoteList({ notes }: VideoListProps) {
  return (
    <NoteListWrapper>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          bgColor={note.bgColor}
        />
      ))}
    </NoteListWrapper>
  );
}

export default NoteList;
