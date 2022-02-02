import React from 'react';
import { render, screen } from '@testing-library/react';

import ArchivePage from './Archive.page';
import { useAuth } from '../../providers/Auth';
import { useNotesContext } from '../../providers/Notes';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Notes', () => ({
  useNotesContext: jest.fn(),
}));
jest.mock('../../components/Note', () => () => <div>Note Mock</div>);

const authMock = { isAuthenticated: true };

const notesContextMock = {
  archivedNotes: [
    {
      id: 'a12345',
      title: 'Test Title',
      description: 'Test Description',
      bgColor: 'ffffff',
    },
    {
      id: 'b12345',
      title: 'Test Title',
      description: 'Test Description',
      bgColor: 'ffffff',
    },
  ],
};

describe('Archive page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders archivedNotes list if there are notes to show', () => {
    (useNotesContext as jest.Mock).mockReturnValue(notesContextMock);

    render(<ArchivePage />);

    const archivedNotesList = screen.getAllByText('Note Mock');

    expect(archivedNotesList.length).toBe(2);
  });

  it('renders info alert if the archivedNotes list is empty', () => {
    (useNotesContext as jest.Mock).mockReturnValue({
      archivedNotes: [],
    });

    render(<ArchivePage />);

    expect(screen.getByText("You don't have archived notes.")).toBeInTheDocument();
  });
});
