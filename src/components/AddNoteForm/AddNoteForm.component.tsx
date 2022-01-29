import React from 'react';

import { NoteFormWrapper, NoteForm, SaveButton } from './AddNoteForm.styled';

function AddNoteForm() {
  return (
    <NoteFormWrapper>
      <NoteForm>
        <input placeholder="Title" type="text" required />
        <textarea rows={1} placeholder="Type to add a note..."></textarea>
        <div className="note-footer">
          <SaveButton type="submit">Save</SaveButton>
        </div>
      </NoteForm>
    </NoteFormWrapper>
  );
}

export default AddNoteForm;
