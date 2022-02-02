import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Note from './Note.component';
import { useAuth } from '../../providers/Auth';
import { useNotesContext } from '../../providers/Notes';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Notes', () => ({
  useNotesContext: jest.fn(),
}));

const authMock = { isAuthenticated: true };
const mockDeleteNote = jest.fn();
const mockArchiveNote = jest.fn();

const notesContextMock = {
  notes: [],
  searchTerm: '',
  updateNote: jest.fn(),
  deleteNote: jest.fn(),
  addArchiveNote: jest.fn(),
  removeArchiveNote: jest.fn(),
  isArchived: jest.fn(),
  updateArchivedNote: jest.fn(),
};

const noteMock = {
  id: 'a12345',
  title: 'Test Title',
  description: 'Test Description',
  bgColor: 'ffffff',
};

describe('Note component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders Note properties', () => {
    (useNotesContext as jest.Mock).mockReturnValue(notesContextMock);

    render(
      <MemoryRouter>
        <Note {...noteMock} />
      </MemoryRouter>
    );

    expect(screen.getByText(noteMock.title)).toBeInTheDocument();
    expect(screen.getByText(noteMock.description)).toBeInTheDocument();
  });

  it('handles deleteNote function with provided data', async () => {
    (useNotesContext as jest.Mock).mockReturnValue({
      ...notesContextMock,
      deleteNote: mockDeleteNote,
    });

    render(
      <MemoryRouter>
        <Note {...noteMock} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByTitle('Delete');

    userEvent.click(deleteButton);

    expect(mockDeleteNote).toHaveBeenCalledWith('a12345');
  });

  it('handles addArchiveNote function with provided data', async () => {
    (useNotesContext as jest.Mock).mockReturnValue({
      ...notesContextMock,
      addArchiveNote: mockArchiveNote,
    });

    render(
      <MemoryRouter>
        <Note {...noteMock} />
      </MemoryRouter>
    );

    const archiveButton = screen.getByTitle('Archive');

    userEvent.click(archiveButton);

    expect(mockArchiveNote).toHaveBeenCalledWith(noteMock);
  });
});
