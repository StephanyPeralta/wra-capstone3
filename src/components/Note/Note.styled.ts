import styled from 'styled-components';

const NoteWrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  padding: 1rem;
  margin: 0 10px 40px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 155%;
  textarea,
  input {
    display: block;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    margin-bottom: 15px;
    width: 100%;
    padding: 8px;
    outline: none;
    line-height: 155%;
  }
  textarea {
    resize: none;
  }
`;

export { NoteWrapper };
