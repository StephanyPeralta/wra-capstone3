import styled from 'styled-components';

const MenuNav = styled.nav`
  border-right: 1px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 90vh;
  padding: 9px 0 0;
  transition: transform 0.3s ease-in;
  hr {
    color: ${(props) => props.theme.border};
  }
  @media (max-width: 768px) {
    width: 90px;
    .hidden-tablet {
      display: none;
    }
    .centered {
      justify-content: center;
    }
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  .link-item {
    color: ${(props) => props.theme.color};
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.hoverButton};
  }
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-left: 1rem;
`;

export { MenuNav, MenuItem, MenuText };
