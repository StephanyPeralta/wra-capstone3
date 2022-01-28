import React from 'react';
import { Link } from 'react-router-dom';
import { BiNote, BiArchiveIn } from 'react-icons/bi';

import { MenuNav, MenuItem, MenuText } from './SideMenu.styled';

function SideMenu() {
  return (
    <MenuNav data-testid="sidemenu" tabIndex={0}>
      <ul aria-label="navbar-list">
        <MenuItem className="centered" data-testid="home-link">
          <Link to="/" className="link-item">
            <BiNote size={27} />
            <MenuText className="hidden-tablet">Notes</MenuText>
          </Link>
        </MenuItem>
        <hr />

        <>
          <MenuItem className="centered">
            <Link to="/archive" className="link-item">
              <BiArchiveIn size={27} />
              <MenuText className="hidden-tablet">Archive</MenuText>
            </Link>
          </MenuItem>
          <hr />
        </>
      </ul>
    </MenuNav>
  );
}

export default SideMenu;
