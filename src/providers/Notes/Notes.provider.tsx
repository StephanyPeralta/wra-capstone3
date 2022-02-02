import React, { createContext, useContext, useEffect, useReducer } from 'react';

import notesReducer, { NOTES_ACTIONS } from './notesReducer';
import { NoteProps, NotesState } from '../../utils/types';
import { storage } from '../../utils/storage';

interface INotesContext {
  notes: NoteProps[];
  archivedNotes: NoteProps[];
  searchTerm: string;
  addNote: (note: NoteProps) => void;
  updateNote: (note: NoteProps) => void;
  deleteNote: (id: string) => void;
  addArchiveNote: (note: NoteProps) => void;
  updateArchivedNote: (note: NoteProps) => void;
  removeArchiveNote: (archivedNote: NoteProps) => void;
  isArchived: (note: NoteProps) => NoteProps | undefined;
  saveSearchTerm: (term: string) => void;
}

interface NotesProviderProps {
  children: React.ReactNode;
}

const initialState: NotesState = {
  notes: storage.get('notes_storage_key') ?? [],
  archivedNotes: storage.get('archivedNotes_storage_key') ?? [],
  searchTerm: '',
};

const NotesContext = createContext<INotesContext>({
  notes: [],
  archivedNotes: [],
  searchTerm: '',
  addNote: (note: NoteProps) => {},
  updateNote: (note: NoteProps) => {},
  deleteNote: (id: string) => {},
  addArchiveNote: (note: NoteProps) => {},
  updateArchivedNote: (note: NoteProps) => {},
  removeArchiveNote: (archivedNote: NoteProps) => {},
  isArchived: (note: NoteProps) => undefined,
  saveSearchTerm: (term: string) => {},
});

function useNotesContext() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error(`Can't use "useNotesContext" without a "NotesProvider"`);
  }
  return context;
}

function NotesProvider({ children }: NotesProviderProps) {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    storage.set('notes_storage_key', state.notes);
    storage.set('archivedNotes_storage_key', state.archivedNotes);
  }, [state.notes, state.archivedNotes]);

  const addNote = (note: NoteProps) => {
    dispatch({ type: NOTES_ACTIONS.ADD_NOTE, payload: { note } });
  };

  const updateNote = (note: NoteProps) => {
    dispatch({ type: NOTES_ACTIONS.UPDATE_NOTE, payload: { note } });
  };

  const deleteNote = (id: string) => {
    dispatch({ type: NOTES_ACTIONS.DELETE_NOTE, payload: { id } });
  };

  const addArchiveNote = (note: NoteProps) => {
    dispatch({ type: NOTES_ACTIONS.ARCHIVE_NOTE, payload: { note } });
  };

  const updateArchivedNote = (note: NoteProps) => {
    dispatch({ type: NOTES_ACTIONS.UPDATE_ARCHIVED_NOTE, payload: { note } });
  };

  const removeArchiveNote = (archivedNote: NoteProps) => {
    dispatch({ type: NOTES_ACTIONS.UNARCHIVE_NOTE, payload: { archivedNote } });
  };

  function isArchived(note: NoteProps) {
    return state.archivedNotes.find((el) => el.id === note.id);
  }

  const saveSearchTerm = (term: string) => {
    dispatch({
      type: NOTES_ACTIONS.SET_SEARCH_TERM,
      payload: { searchTerm: term },
    });
  };

  const value = {
    notes: state.notes,
    archivedNotes: state.archivedNotes,
    searchTerm: state.searchTerm,
    addNote,
    updateNote,
    deleteNote,
    addArchiveNote,
    updateArchivedNote,
    removeArchiveNote,
    isArchived,
    saveSearchTerm,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export { useNotesContext };
export default NotesProvider;
