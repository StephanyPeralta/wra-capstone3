import styled from 'styled-components';

const SessionFormWrapper = styled.div`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 50px 100px;
  max-width: 650px;
  margin: 60px auto;
  .link-form {
    cursor: pointer;
    text-decoration-line: underline;
  }
  @media (max-width: 576px) {
    padding: 50px;
  }
  @media (max-width: 440px) {
    padding: 40px 30px;
  }
`;

const AuthForm = styled.div`
  text-align: left;
  width: 100%;
  line-height: 155%;
  .form-label {
    display: block;
    font-size: 16px;
  }
  .form-input {
    background-color: ${(props) => props.theme.secondary};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.color};
    display: block;
    line-height: 2;
    font-size: 16px;
    height: 45px;
    width: 100%;
    padding: 3px 8px;
    margin: 5px 0 30px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 40px 0 30px;
`;

const SessionButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  padding: 0.6rem 1rem;
  height: 45px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hoverButton};
  }
`;

const ErrorAlert = styled.div`
  display: flex;
  color: darkred;
  align-items: center;
  background-color: #ffebee;
  border-radius: 5px;
  margin: 0 auto 10px;
  padding: 5px 8px;
  width: 100%;
  font-size: 16px;
`;

export { SessionFormWrapper, AuthForm, ButtonWrapper, SessionButton, ErrorAlert };
