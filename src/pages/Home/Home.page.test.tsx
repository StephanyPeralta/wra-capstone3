import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HomePage from './Home.page';
import { useAuth } from '../../providers/Auth';
import NotesProvider from '../../providers/Notes';

jest.mock('nanoid', () => {
  return { nanoid: () => '1234' };
});
jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { isAuthenticated: true };

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders HomePage elements', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const homeTitle = screen.getByRole('heading', { name: 'Notes' });
    const inputTitle = screen.getByPlaceholderText('Title');
    const inputDescription = screen.getByPlaceholderText('Type to add a note...');
    const colorButton = screen.getByTitle('Change color');
    const saveButton = screen.getByRole('button', { name: 'Save' });

    expect(homeTitle).toBeInTheDocument();
    expect(inputTitle).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(colorButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it('shows "There are no notes" message when note list is empty', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const notesMsg = screen.getByText(
      'There are no notes! please create a new one using the creation note input.'
    );

    expect(notesMsg).toBeInTheDocument();
  });

  it('creates and updates a new note correctly', async () => {
    render(
      <NotesProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </NotesProvider>
    );

    const inputTitle = screen.getByPlaceholderText('Title');
    const inputDescription = screen.getByPlaceholderText('Type to add a note...');
    const saveButton = screen.getByRole('button', { name: 'Save' });

    userEvent.type(inputTitle, 'test title');
    userEvent.type(inputDescription, 'test content');

    userEvent.click(saveButton);

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test content')).toBeInTheDocument();

    const editNoteButton = screen.getByTitle('Edit');

    userEvent.click(editNoteButton);

    const inputTitleNote = screen.getByPlaceholderText('Edit title');
    const inputDescriptionNote = screen.getByText('test content');
    const saveNoteButton = screen.getByTitle('Save');

    userEvent.type(inputTitleNote, ' updated');
    userEvent.type(inputDescriptionNote, ' updated');

    await userEvent.click(saveNoteButton);

    expect(screen.getByText('test title updated')).toBeInTheDocument();
    expect(screen.getByText('test content updated')).toBeInTheDocument();
  });
});
