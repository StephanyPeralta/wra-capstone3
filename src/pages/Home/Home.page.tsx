import React from 'react';

import AddNoteForm from '../../components/AddNoteForm';
import NoteList from '../../components/NoteList';
import SessionForm from '../../components/SessionForm';
import { useAuth } from '../../providers/Auth';
import { useNotesContext } from '../../providers/Notes';
import { HomeWrapper, InfoAlert, InfoSearch } from './Home.styled';

function HomePage() {
  const { isAuthenticated } = useAuth();
  const { notes, searchTerm } = useNotesContext();

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeWrapper>
      {!isAuthenticated ? (
        <SessionForm />
      ) : (
        <>
          <h1>Notes</h1>
          <AddNoteForm />
          {notes.length === 0 && (
            <InfoAlert>
              There are no notes! please create a new one using the creation note input.
            </InfoAlert>
          )}
          {filteredNotes.length === 0 && searchTerm && (
            <InfoSearch className="search-info">
              There are no match results. Try another search.
            </InfoSearch>
          )}
          <NoteList notes={filteredNotes} />
        </>
      )}
    </HomeWrapper>
  );
}

export default HomePage;
