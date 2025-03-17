/**
 * Type definitions for the Header component.
 */
export type User = {
  name: string;
};

export type HeaderProps = {
  title?: string;
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
};
