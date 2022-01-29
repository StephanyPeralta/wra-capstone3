import React from 'react';

import AddNoteForm from '../../components/AddNoteForm';
import NoteList from '../../components/NoteList';
// import SessionForm from '../../components/SessionForm';
import { HomeWrapper } from './Home.styled';

function HomePage() {
  return (
    <HomeWrapper>
      {/* <SessionForm /> */}
      <h1>Notes</h1>
      <AddNoteForm />
      <NoteList />
    </HomeWrapper>
  );
}

export default HomePage;
