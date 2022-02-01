import { NoteProps, NotesState } from '../../utils/types';

interface NotesActionPayload {
  archivedNote: NoteProps;
  note: NoteProps;
  id: string | null;
  searchTerm: string;
}

export enum NOTES_ACTIONS {
  ADD_NOTE = 'ADD_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  ARCHIVE_NOTE = 'ARCHIVE_NOTE',
  UPDATE_ARCHIVED_NOTE = 'UPDATE_ARCHIVED_NOTE',
  UNARCHIVE_NOTE = 'UNARCHIVE_NOTE',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
}

type ACTIONTYPE =
  | { type: NOTES_ACTIONS.ADD_NOTE; payload: Pick<NotesActionPayload, 'note'> }
  | { type: NOTES_ACTIONS.UPDATE_NOTE; payload: Pick<NotesActionPayload, 'note'> }
  | { type: NOTES_ACTIONS.DELETE_NOTE; payload: Pick<NotesActionPayload, 'id'> }
  | { type: NOTES_ACTIONS.ARCHIVE_NOTE; payload: Pick<NotesActionPayload, 'note'> }
  | {
      type: NOTES_ACTIONS.UPDATE_ARCHIVED_NOTE;
      payload: Pick<NotesActionPayload, 'note'>;
    }
  | {
      type: NOTES_ACTIONS.UNARCHIVE_NOTE;
      payload: Pick<NotesActionPayload, 'archivedNote'>;
    }
  | {
      type: NOTES_ACTIONS.SET_SEARCH_TERM;
      payload: Pick<NotesActionPayload, 'searchTerm'>;
    };

export default function selectorReducer(
  state: NotesState,
  action: ACTIONTYPE
): NotesState {
  switch (action.type) {
    case NOTES_ACTIONS.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
    case NOTES_ACTIONS.UPDATE_NOTE:
      const updatedNote = {
        id: action.payload.note.id,
        title: action.payload.note.title,
        description: action.payload.note.description,
        bgColor: action.payload.note.bgColor,
      };
      const index = state.notes.findIndex((note) => note.id === action.payload.note.id);
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          updatedNote,
          ...state.notes.slice(index + 1),
        ],
      };
    case NOTES_ACTIONS.DELETE_NOTE:
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          (note) => note.id !== action.payload.id
        ),
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case NOTES_ACTIONS.ARCHIVE_NOTE:
      return {
        ...state,
        archivedNotes: [...state.archivedNotes, action.payload.note],
        notes: state.notes.filter((el) => el.id !== action.payload.note.id),
      };

    case NOTES_ACTIONS.UPDATE_ARCHIVED_NOTE:
      const updatedArchivedNote = {
        id: action.payload.note.id,
        title: action.payload.note.title,
        description: action.payload.note.description,
        bgColor: action.payload.note.bgColor,
      };
      const indexN = state.archivedNotes.findIndex(
        (note) => note.id === action.payload.note.id
      );
      return {
        ...state,
        archivedNotes: [
          ...state.archivedNotes.slice(0, indexN),
          updatedArchivedNote,
          ...state.notes.slice(indexN + 1),
        ],
      };
    case NOTES_ACTIONS.UNARCHIVE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload.archivedNote],
        archivedNotes: state.archivedNotes.filter(
          (el) => el.id !== action.payload.archivedNote.id
        ),
      };
    case NOTES_ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    default:
      throw new Error('This action is invalid');
  }
}
