import styled from 'styled-components';

const LayoutContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SectionWrapper = styled.div`
  display: flex;
  height: 90vh;
`;

const SectionContainer = styled.section`
  overflow-y: scroll;
  width: 100%;
`;

export { LayoutContainer, SectionWrapper, SectionContainer };
