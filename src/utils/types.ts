export interface NoteProps {
  id: string;
  title: string;
  description: string;
  bgColor: string | undefined;
}

export interface PreferencesState {
  theme: 'light' | 'dark';
}

export interface NotesState {
  notes: NoteProps[];
  archivedNotes: NoteProps[];
  searchTerm: string;
}
