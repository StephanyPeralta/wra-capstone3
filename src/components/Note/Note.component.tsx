import React from 'react';

import { NoteWrapper } from './Note.styled';

function Note() {
  return (
    <NoteWrapper>
      <input placeholder="Title" type="text" required />
      <textarea rows={3} placeholder="Type to add a note..."></textarea>
    </NoteWrapper>
  );
}

export default Note;
