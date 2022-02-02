import styled from 'styled-components';

const NoteWrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  padding: 14px;
  margin: 0 10px 40px;
  min-height: 170px;
  max-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  overflow-wrap: break-word;
  .note-content {
    text-overflow: ellipsis;
    overflow: scroll;
  }
  .note-title,
  .note-description {
    color: ${(props) => props.theme.color};
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 140%;
    margin: 0 0 10px;
    text-align: left;
  }
  .note-description {
    white-space: pre-wrap;
  }
  .note-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .color-section {
    position: relative;
  }
  .color-picker {
    position: absolute;
    top: 40px;
    left: -65px;
  }
  textarea,
  input {
    display: block;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 140%;
    margin: 0 0 10px;
    width: 100%;
    padding: 3px;
    outline: none;
  }
  textarea {
    resize: none;
  }
  @media (max-width: 576px) {
    margin: 0 0 40px;
  }
`;

const NoteButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  text-decoration: none;
  padding: 6px;
  margin: 0 0 0 7px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const SaveButton = styled(NoteButton)`
  background-color: ${(props) => props.theme.primary};
  &:hover {
    background-color: ${(props) => props.theme.hoverButton};
  }
`;

const ErrorAlert = styled.div`
  display: flex;
  align-items: center;
  color: #ce1313;
  font-size: 16px;
  margin: 0 auto 10px;
  padding: 5px 8px;
  width: 100%;
  font-size: 16px;
`;

export { NoteWrapper, NoteButton, SaveButton, ErrorAlert };
