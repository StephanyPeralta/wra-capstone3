import React from 'react';

import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import ProfileButton from '../ProfileButton';
import { HeaderWrapper, LogoTitle, HeaderSection } from './Header.styled';

function Header() {
  return (
    <HeaderWrapper data-testid="header">
      <HeaderSection>
        <LogoTitle to="/">
          <span className="brand-name hidden-mobile">Wize Keep</span>
          <span className="brand-name-mobile">WK</span>
        </LogoTitle>
      </HeaderSection>
      <Search />
      <HeaderSection>
        <div className="hidden-tablet">
          <ThemeToggle />
        </div>
        <ProfileButton />
      </HeaderSection>
    </HeaderWrapper>
  );
}

export default Header;
