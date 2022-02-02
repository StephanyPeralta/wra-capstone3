import React from 'react';

import { useNotesContext } from '../../providers/Notes';
import NoteList from '../../components/NoteList';
import Note from '../../components/Note';
import { ArchiveWrapper, InfoAlert, InfoSearch } from './Archive.styled';

function Archive() {
  const { archivedNotes, searchTerm } = useNotesContext();

  const filteredNotes = archivedNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ArchiveWrapper>
      <h1>Archived Notes</h1>
      {archivedNotes.length === 0 && (
        <InfoAlert>You don't have archived notes.</InfoAlert>
      )}
      {filteredNotes.length === 0 && searchTerm && (
        <InfoSearch className="search-info">
          There are no match results. Try another search.
        </InfoSearch>
      )}
      <NoteList>
        {filteredNotes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            bgColor={note.bgColor}
          />
        ))}
      </NoteList>
    </ArchiveWrapper>
  );
}

export default Archive;
