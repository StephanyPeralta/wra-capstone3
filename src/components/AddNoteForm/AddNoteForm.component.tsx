import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { FiAlertCircle } from 'react-icons/fi';
import { VscSymbolColor } from 'react-icons/vsc';
import { BlockPicker } from 'react-color';

import { useNotesContext } from '../../providers/Notes';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { NoteFormWrapper, NoteForm, SaveButton, ColorButton } from './AddNoteForm.styled';

function AddNoteForm() {
  const { addNote } = useNotesContext();
  const colorRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLInputElement>(null!);
  const descriptionRef = useRef<HTMLTextAreaElement>(null!);
  const [selectedColor, setSelectedColor] = useState('');
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [error, setError] = useState('');

  function handleAddNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const id = nanoid();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const bgColor = selectedColor;

    if (title.trim().length > 0 && description.trim().length > 0) {
      addNote({ id, title, description, bgColor });
    } else {
      setError('The note cannot be empty');
    }

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    setSelectedColor('');
  }

  useOnClickOutside(colorRef, () => {
    setOpenColorPicker(false);
  });

  return (
    <NoteFormWrapper>
      <NoteForm onSubmit={handleAddNote} style={{ backgroundColor: selectedColor }}>
        <input ref={titleRef} placeholder="Title" type="text" required />
        <textarea
          ref={descriptionRef}
          rows={1}
          placeholder="Type to add a note..."
          required
        />
        <div className="note-footer">
          {error && (
            <div className="error-msg">
              <FiAlertCircle className="error-icon" size={20} />
              {error}
            </div>
          )}
          <div className="color-section" ref={colorRef}>
            <ColorButton
              type="button"
              title="Change color"
              onClick={() => setOpenColorPicker(!openColorPicker)}
            >
              <VscSymbolColor size={27} />
            </ColorButton>
            {openColorPicker && (
              <div className="color-picker">
                <BlockPicker
                  color={selectedColor}
                  onChangeComplete={(color) => setSelectedColor(color.hex)}
                />
              </div>
            )}
          </div>
          <SaveButton type="submit">Save</SaveButton>
        </div>
      </NoteForm>
    </NoteFormWrapper>
  );
}

export default AddNoteForm;
