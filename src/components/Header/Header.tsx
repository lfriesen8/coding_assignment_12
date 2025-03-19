import React from 'react';
import { StyledHeader, Logo, Nav } from './Header.styles';
import { Button } from '../Button';

/**
 * **Header Component**
 *
 * Displays a navigation header with optional login/logout buttons.
 *
 * @component
 * @param {string} [title] - The optional title displayed in the header.
 * @param {User} [user] - The logged-in user (optional).
 * @param {() => void} [onLogin] - Callback function for login.
 * @param {() => void} [onLogout] - Callback function for logout.
 * @param {() => void} [onCreateAccount] - Callback function for creating an account.
 */
export type User = {
  name: string;
};

export type HeaderProps = {
  title?: string; // ✅ Added missing title prop
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  return (
    <StyledHeader>
      <Logo>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        {title && <h1>{title}</h1>}{' '}
        {/* ✅ Ensure title is displayed if provided */}
      </Logo>

      <Nav>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </Nav>
    </StyledHeader>
  );
};
