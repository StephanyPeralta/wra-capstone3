import React from 'react';

import { useAuth } from '../../providers/Auth';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import ProfileButton from '../ProfileButton';
import { HeaderWrapper, LogoTitle, HeaderSection } from './Header.styled';

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <HeaderWrapper data-testid="header">
      <HeaderSection>
        <LogoTitle to="/">
          <span className="brand-name hidden-mobile">Wize Keep</span>
          <span className="brand-name-mobile">WK</span>
        </LogoTitle>
      </HeaderSection>
      {isAuthenticated && <Search />}
      <HeaderSection>
        <div className="hidden-tablet">
          <ThemeToggle />
        </div>
        {isAuthenticated && <ProfileButton />}
      </HeaderSection>
    </HeaderWrapper>
  );
}

export default Header;
