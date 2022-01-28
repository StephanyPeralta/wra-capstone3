import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  width: 100%;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    .hidden-tablet {
      display: none;
    }
  }
  @media (max-width: 576px) {
    .hidden-mobile {
      display: none;
    }
`;

const LogoTitle = styled(Link)`
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  padding: 0.3rem;
  font-size: 22px;
  font-weight: 700;
  .brand-name {
    margin-left: 5px;
  }
  .brand-name-mobile {
    margin-left: 5px;
    display: none;
  }
  @media (max-width: 576px) {
    .brand-name-mobile {
      display: block;
    }
  }
`;

export { HeaderWrapper, HeaderSection, LogoTitle };
