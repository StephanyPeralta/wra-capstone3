import styled from 'styled-components';

const NoteFormWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto 30px;
`;

const NoteForm = styled.form`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 1rem;
  min-height: auto;
  width: 100%;
  line-height: 155%;
  .note-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  textarea,
  input {
    display: block;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    margin-bottom: 10px;
    width: 100%;
    padding: 8px;
    outline: none;
    line-height: 155%;
  }
  textarea {
    resize: none;
  }
`;

const SaveButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  padding: 8px 24px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hoverButton};
  }
`;

export { NoteFormWrapper, NoteForm, SaveButton };
