import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../providers/Auth';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { ProfileIconWrapper, Dropdown } from './ProfileButton.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function ProfileButton() {
  const { logout } = useAuth();
  const { push } = useHistory();

  const [openDropdown, setOpenDropdown] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, () => {
    setOpenDropdown(false);
  });

  async function handleLogout() {
    try {
      await logout();
      setOpenDropdown(false);
      push('/');
      toast.success('You Have Successfully Logged out!');
    } catch {
      toast.error('Failed to Log out! Please try again later.');
    }
  }

  return (
    <div>
      <ProfileIconWrapper onClick={() => setOpenDropdown(!openDropdown)}>
        {/* <BsPersonFill size={25} /> */}
        <img
          className="profile-img"
          src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
          alt="Profile"
        />
      </ProfileIconWrapper>
      {openDropdown && (
        <Dropdown ref={menuRef}>
          <button type="button" className="dropdown-button" onClick={handleLogout}>
            Log Out
          </button>
        </Dropdown>
      )}
    </div>
  );
}

export default ProfileButton;
