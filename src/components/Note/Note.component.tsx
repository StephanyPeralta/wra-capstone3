import React, { useState, useEffect, useRef } from 'react';
import { BiArchiveIn, BiArchiveOut, BiEdit, BiSave } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { VscSymbolColor } from 'react-icons/vsc';
import { BlockPicker } from 'react-color';

import { useNotesContext } from '../../providers/Notes';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { NoteProps } from '../../utils/types';
import { NoteWrapper, NoteButton, SaveButton, ErrorAlert } from './Note.styled';

function Note({ id, title, description, bgColor }: NoteProps) {
  const {
    updateNote,
    deleteNote,
    addArchiveNote,
    removeArchiveNote,
    isArchived,
    updateArchivedNote,
  } = useNotesContext();
  const noteRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLInputElement>(null!);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteDescription, setNoteDescription] = useState(description);
  const [selectedColor, setSelectedColor] = useState(bgColor);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  const selectedNote = { id, title, description, bgColor };

  const handleUpdateNote = () => {
    setError('');
    const title = noteTitle;
    const description = noteDescription;
    const bgColor = selectedColor;

    if (title.trim().length > 0 && description.trim().length > 0) {
      if (isArchived(selectedNote)) {
        updateArchivedNote({ id, title, description, bgColor });
      } else {
        updateNote({ id, title, description, bgColor });
      }
      setEditMode(false);
    } else {
      setError('The note cannot be empty');
    }
  };

  function handleEditMode() {
    setEditMode(true);
  }

  function handleDeleteNote() {
    deleteNote(id);
  }

  function handleArchiveNote() {
    addArchiveNote(selectedNote);
  }

  function handleUnarchiveNote() {
    removeArchiveNote(selectedNote);
  }

  useOnClickOutside(noteRef, () => {
    setEditMode(false);
    setSelectedColor(bgColor);
  });

  useEffect(() => {
    titleRef?.current?.focus();
  }, [editMode]);

  return (
    <NoteWrapper ref={noteRef} style={{ backgroundColor: selectedColor }}>
      <div className="note-content">
        {!editMode ? (
          <h2 className="note-title">{title}</h2>
        ) : (
          <input
            placeholder="Title"
            type="text"
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
            ref={titleRef}
          />
        )}

        {!editMode ? (
          <p className="note-description">{description}</p>
        ) : (
          <textarea
            rows={3}
            placeholder="Type to add a note..."
            onChange={(e) => setNoteDescription(e.target.value)}
            value={noteDescription}
          />
        )}
      </div>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      <div className="note-footer">
        {!editMode ? (
          <>
            {!isArchived(selectedNote) ? (
              <NoteButton type="button" title="Archive" onClick={handleArchiveNote}>
                <BiArchiveIn size={18} />
              </NoteButton>
            ) : (
              <NoteButton type="button" title="Unarchive" onClick={handleUnarchiveNote}>
                <BiArchiveOut size={18} />
              </NoteButton>
            )}
            <NoteButton type="button" title="Edit" onClick={handleEditMode}>
              <BiEdit size={18} />
            </NoteButton>
            <NoteButton type="button" title="Delete" onClick={handleDeleteNote}>
              <RiDeleteBinLine size={18} />
            </NoteButton>
          </>
        ) : (
          <>
            <div className="color-section">
              <NoteButton
                type="button"
                title="Change color"
                onClick={() => setOpenColorPicker(!openColorPicker)}
              >
                <VscSymbolColor size={18} />
              </NoteButton>
              {openColorPicker && (
                <div className="color-picker">
                  <BlockPicker
                    color={selectedColor}
                    onChangeComplete={(color) => setSelectedColor(color.hex)}
                  />
                </div>
              )}
            </div>
            <SaveButton
              className="save-button"
              type="button"
              title="Save"
              onClick={handleUpdateNote}
            >
              <BiSave size={18} />
            </SaveButton>
          </>
        )}
      </div>
    </NoteWrapper>
  );
}

export default Note;
