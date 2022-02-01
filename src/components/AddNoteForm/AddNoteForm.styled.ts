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
  .note-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .color-section {
    position: relative;
  }
  .color-picker {
    position: absolute;
    top: 50px;
    left: -55px;
  }
  .error-msg {
    display: flex;
    align-items: center;
    color: darkred;
    font-size: 16px;
    margin: 0 auto;
  }
  .error-icon {
    margin-right: 5px;
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
    line-height: 150%;
  }
  textarea {
    resize: none;
  }
  @media (max-width: 468px) {
    .error-msg {
      font-size: 14px;
      margin: 0 10px 0 0;
    }
    .error-icon {
      display: none;
    }
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

const ColorButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  text-decoration: none;
  padding: 6px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export { NoteFormWrapper, NoteForm, SaveButton, ColorButton };
