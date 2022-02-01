import React from 'react';

import { useNotesContext } from '../../providers/Notes';
import NoteList from '../../components/NoteList';
import { ArchiveWrapper, InfoAlert } from './Archive.styled';

function Archive() {
  const { archivedNotes } = useNotesContext();

  return (
    <ArchiveWrapper>
      <h1>Archived Notes</h1>
      {archivedNotes.length === 0 ? (
        <InfoAlert>You don't have archived notes.</InfoAlert>
      ) : (
        <NoteList notes={archivedNotes} />
      )}
    </ArchiveWrapper>
  );
}

export default Archive;
