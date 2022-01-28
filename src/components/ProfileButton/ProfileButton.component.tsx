import React, { useState, useRef } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.min.css';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import { ProfileIconWrapper, Dropdown } from './ProfileButton.styled';

function ProfileButton() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, () => {
    setOpenDropdown(false);
  });

  return (
    <div>
      <ProfileIconWrapper onClick={() => setOpenDropdown(!openDropdown)}>
        <BsPersonFill size={25} />
      </ProfileIconWrapper>
      {openDropdown && (
        <Dropdown ref={menuRef}>
          <>
            <button type="button" className="dropdown-button">
              Sign Up
            </button>
            <hr />
            <button type="button" className="dropdown-button">
              Log In
            </button>
          </>
        </Dropdown>
      )}
    </div>
  );
}

export default ProfileButton;
