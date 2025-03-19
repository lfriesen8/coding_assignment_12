(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [279],
  {
    './src/components/Button/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      __webpack_require__('./node_modules/react/index.js');
      const StyledButton = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js'
      ).Ay.button` /* ✅ Removed label from styled props */
  padding: ${(_ref) => {
    let { size } = _ref;
    return 'small' === size
      ? '5px 10px'
      : 'large' === size
        ? '15px 30px'
        : '10px 20px';
  }};
  font-size: ${(_ref2) => {
    let { size } = _ref2;
    return 'small' === size ? '12px' : 'large' === size ? '18px' : '16px';
  }};
  border-radius: 5px;
  border: none;
  cursor: ${(_ref3) => {
    let { disabled } = _ref3;
    return disabled ? 'not-allowed' : 'pointer';
  }};
  
  /* ✅ Now uses backgroundColor prop if provided, otherwise falls back to primary color logic */
  background-color: ${(_ref4) => {
    let { backgroundColor, primary, disabled } = _ref4;
    return disabled
      ? '#ccc'
      : backgroundColor || (primary ? '#007bff' : '#555');
  }};

  color: white;
  transition: background 0.3s, transform 0.1s ease-in-out;

  &:hover {
    background-color: ${(_ref5) => {
      let { backgroundColor, primary, disabled } = _ref5;
      return disabled
        ? '#ccc'
        : backgroundColor || (primary ? '#0056b3' : '#333');
    }};
    transform: ${(_ref6) => {
      let { disabled } = _ref6;
      return disabled ? 'none' : 'scale(1.05)';
    }}; /* ✅ Adds slight hover effect */
  }

  &:active {
    transform: ${(_ref7) => {
      let { disabled } = _ref7;
      return disabled ? 'none' : 'scale(0.95)';
    }}; /* ✅ Click effect */
  }
`;
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Button = (_ref) => {
        let {
          label,
          primary = !1,
          disabled = !1,
          size = 'medium',
          backgroundColor,
          onClick,
        } = _ref;
        return (0, jsx_runtime.jsx)(StyledButton, {
          primary,
          disabled,
          size,
          backgroundColor,
          onClick: disabled ? void 0 : onClick,
          children: label,
        });
      };
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          primary: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
          size: {
            required: !1,
            tsType: {
              name: 'union',
              raw: '"small" | "medium" | "large"',
              elements: [
                { name: 'literal', value: '"small"' },
                { name: 'literal', value: '"medium"' },
                { name: 'literal', value: '"large"' },
              ],
            },
            description: '',
            defaultValue: { value: '"medium"', computed: !1 },
          },
          backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
    },
    './src/components/Button/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        $: () => _Button__WEBPACK_IMPORTED_MODULE_0__.$,
      });
      var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/components/Button/Button.tsx'
      );
    },
    './src/components/Header/Header.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LoggedIn: () => LoggedIn,
          LoggedOut: () => LoggedOut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@storybook/test/dist/index.mjs'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Header',
          component: __webpack_require__('./src/components/Header/Header.tsx')
            .Y,
          tags: ['autodocs'],
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: {
                component:
                  '**Header Component Storybook**\r\n\nThis Storybook file documents the `Header` component, showcasing its different variations.\r\nThe `Header` component displays a navigation bar with optional login/logout buttons.\r\n\n## Storybook Controls:\r\n- **User state** can be toggled to test logged-in vs logged-out behavior.\r\n- **Event handlers (`onLogin`, `onLogout`, `onCreateAccount`)** are simulated using `fn()`.\r\n\n@file Header.stories.tsx\r\n@author LF',
              },
            },
          },
          args: {
            onLogin: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
            onLogout: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
            onCreateAccount: (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          },
        },
        LoggedIn = { args: { user: { name: 'Jane Doe' } } },
        LoggedOut = { args: { user: void 0 } },
        __namedExportsOrder = ['LoggedIn', 'LoggedOut'];
      (LoggedIn.parameters = {
        ...LoggedIn.parameters,
        docs: {
          ...LoggedIn.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    user: {\n      name: "Jane Doe"\n    }\n  }\n}',
            ...LoggedIn.parameters?.docs?.source,
          },
          description: {
            story:
              '**Logged In Header**\r\n- Displays a logged-in user with a logout button.',
            ...LoggedIn.parameters?.docs?.description,
          },
        },
      }),
        (LoggedOut.parameters = {
          ...LoggedOut.parameters,
          docs: {
            ...LoggedOut.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    user: undefined\n  }\n}',
              ...LoggedOut.parameters?.docs?.source,
            },
            description: {
              story:
                '**Logged Out Header**\r\n- Displays login and sign-up buttons.',
              ...LoggedOut.parameters?.docs?.description,
            },
          },
        });
    },
    './src/components/Header/Header.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Y: () => Header });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js'
      );
      const StyledHeader = styled_components_browser_esm.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 20px;
  border-bottom: 3px solid #007bff;
`,
        Logo = styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 24px;
    margin: 0;
  }
`,
        Nav = styled_components_browser_esm.Ay.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  .welcome {
    font-size: 14px;
    font-weight: bold;
  }
`;
      var Button = __webpack_require__('./src/components/Button/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const Header = (_ref) => {
        let { title, user, onLogin, onLogout, onCreateAccount } = _ref;
        return (0, jsx_runtime.jsxs)(StyledHeader, {
          children: [
            (0, jsx_runtime.jsxs)(Logo, {
              children: [
                (0, jsx_runtime.jsx)('svg', {
                  width: '32',
                  height: '32',
                  viewBox: '0 0 32 32',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: (0, jsx_runtime.jsxs)('g', {
                    fill: 'none',
                    fillRule: 'evenodd',
                    children: [
                      (0, jsx_runtime.jsx)('path', {
                        d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                        fill: '#FFF',
                      }),
                      (0, jsx_runtime.jsx)('path', {
                        d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                        fill: '#555AB9',
                      }),
                      (0, jsx_runtime.jsx)('path', {
                        d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                        fill: '#91BAF8',
                      }),
                    ],
                  }),
                }),
                title && (0, jsx_runtime.jsx)('h1', { children: title }),
                ' ',
              ],
            }),
            (0, jsx_runtime.jsx)(Nav, {
              children: user
                ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsxs)('span', {
                        className: 'welcome',
                        children: [
                          'Welcome, ',
                          (0, jsx_runtime.jsx)('b', { children: user.name }),
                          '!',
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Button.$, {
                        size: 'small',
                        onClick: onLogout,
                        label: 'Log out',
                      }),
                    ],
                  })
                : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(Button.$, {
                        size: 'small',
                        onClick: onLogin,
                        label: 'Log in',
                      }),
                      (0, jsx_runtime.jsx)(Button.$, {
                        primary: !0,
                        size: 'small',
                        onClick: onCreateAccount,
                        label: 'Sign up',
                      }),
                    ],
                  }),
            }),
          ],
        });
      };
      Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header',
        props: {
          title: { required: !1, tsType: { name: 'string' }, description: '' },
          user: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'object',
              raw: '{\n  name: string;\n}',
              signature: {
                properties: [
                  { key: 'name', value: { name: 'string', required: !0 } },
                ],
              },
            },
            description: '',
          },
          onLogin: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onLogout: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onCreateAccount: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
    },
  },
]);
// # sourceMappingURL=components-Header-Header-stories.0f65f066.iframe.bundle.js.map
