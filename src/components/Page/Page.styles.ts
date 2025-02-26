import styled from "styled-components";

/**
 * Styled container for the Page component.
 */
export const StyledPage = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  
  h2 {
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

/**
 * Styled tip section in the page component.
 */
export const TipWrapper = styled.div`
  background-color:rgba(192, 228, 243, 0.42);
  padding: 10px;
  border-left: 4px solid #007bff;
  font-size: 14px;
  margin-top: 20px;
  
  .tip {
    font-weight: bold;
    color: #007bff;
  }
`;
