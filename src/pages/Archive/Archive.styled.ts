import styled from 'styled-components';

const ArchiveWrapper = styled.div`
  text-align: center;
  padding: 20px 60px 20px;
  h1 {
    margin: 15px 0;
  }
  @media (max-width: 768px) {
    padding: 60px 40px 20px;
  }
  @media (max-width: 576px) {
    padding: 30px 20px 0;
  }
`;

const InfoAlert = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.hoverButton};
  border-radius: 10px;
  min-height: 50px;
  margin: 40px auto;
  padding: 10px 16px;
  max-width: 630px;
`;

export { ArchiveWrapper, InfoAlert };
