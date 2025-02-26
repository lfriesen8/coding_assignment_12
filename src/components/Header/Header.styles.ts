import styled from "styled-components";

/**
 * Styled Header Component.
 */
export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 20px;
  border-bottom: 3px solid #007bff;
`;

/**
 * Styled logo section.
 */
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

/**
 * Styled navigation for login/logout buttons.
 */
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  .welcome {
    font-size: 14px;
    font-weight: bold;
  }
`;
