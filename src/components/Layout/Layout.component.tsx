import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from 'styled-components';
import { Themes } from '../../utils/themes';
import { usePreferences } from '../../providers/Preferences';
import Header from '../Header';
import SideMenu from '../SideMenu';
import { LayoutContainer, SectionWrapper, SectionContainer } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { theme } = usePreferences();

  return (
    <ThemeProvider theme={Themes[theme]}>
      <LayoutContainer>
        <ToastContainer />
        <Header />
        <SectionWrapper>
          <SideMenu />
          <SectionContainer>{children}</SectionContainer>
        </SectionWrapper>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;
