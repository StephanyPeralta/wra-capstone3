import styled from 'styled-components';

const HomeWrapper = styled.div`
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

export { HomeWrapper };
