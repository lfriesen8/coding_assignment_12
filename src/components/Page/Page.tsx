import React from 'react';
import { Header } from '../Header';
import { StyledPage, TipWrapper } from './Page.styles'; // ✅ Use StyledComponents instead of CSS
import { Button } from '../Button';

/**
 * **Page Component**
 *
 * A sample page component that includes a header and introductory text.
 * It demonstrates the usage of components in Storybook.
 *
 * @component
 */
export type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <StyledPage>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app.
        </p>

        <ul>
          <li>Use a higher-level connected component to manage state.</li>
          <li>Mock services to assemble data inside Storybook.</li>
        </ul>

        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          .
        </p>

        <TipWrapper>
          <span className="tip">Tip</span> Adjust the width of the canvas with
          the{' '}
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </TipWrapper>

        <Button
          label="Learn More"
          primary
          onClick={() => alert('Learn more clicked!')}
        />
      </section>
    </StyledPage>
  );
};
