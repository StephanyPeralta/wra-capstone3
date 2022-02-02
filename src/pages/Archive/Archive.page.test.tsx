import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { useAuth } from '../../providers/Auth';
import NotesProvider from '../../providers/Notes';
import ArchivePage from './Archive.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { isAuthenticated: true };

describe('Archive page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders ArchivePage elements', () => {
    render(
      <NotesProvider>
        <MemoryRouter>
          <ArchivePage />
        </MemoryRouter>
      </NotesProvider>
    );

    const archiveTitle = screen.getByRole('heading', { name: 'Archived Notes' });
    const notesMsg = screen.getByText("You don't have archived notes.");

    expect(archiveTitle).toBeInTheDocument();
    expect(notesMsg).toBeInTheDocument();
  });

  it('renders info alert if the archivedNotes list is empty', () => {
    render(
      <NotesProvider>
        <MemoryRouter>
          <ArchivePage />
        </MemoryRouter>
      </NotesProvider>
    );

    expect(screen.getByText("You don't have archived notes.")).toBeInTheDocument();
  });
});
