(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [215],
  {
    './src/components/Dropdown/Dropdown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Empty: () => Empty,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Dropdown_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js'
      );
      const StyledDropdown = styled_components_browser_esm.Ay.div`
  display: inline-block;
  width: 200px;
  opacity: ${(_ref) => {
    let { disabled } = _ref;
    return disabled ? 0.5 : 1;
  }};
  pointer-events: ${(_ref2) => {
    let { disabled } = _ref2;
    return disabled ? 'none' : 'auto';
  }};
`,
        StyledSelect = styled_components_browser_esm.Ay.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: ${(_ref3) => {
    let { disabled } = _ref3;
    return disabled ? 'not-allowed' : 'pointer';
  }};

  &:focus {
    outline: none;
    border-color: ${(_ref4) => {
      let { disabled } = _ref4;
      return disabled ? '#ccc' : '#007bff';
    }};
  }
`;
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Dropdown = (_ref) => {
        let { options, defaultValue, onChange, disabled = !1 } = _ref;
        return (0, jsx_runtime.jsx)(StyledDropdown, {
          children: (0, jsx_runtime.jsx)(StyledSelect, {
            defaultValue,
            onChange: (e) => onChange && onChange(e.target.value),
            disabled,
            children: options.map((option, index) =>
              (0, jsx_runtime.jsx)(
                'option',
                { value: option, children: option },
                index
              )
            ),
          }),
        });
      };
      Dropdown.__docgenInfo = {
        description:
          '**Dropdown Component**\n\nA reusable dropdown/select component that supports a disabled state.\n\n@component\n@param {string[]} options - Array of dropdown options.\n@param {string} [defaultValue] - Default selected option.\n@param {(value: string) => void} [onChange] - Callback when selection changes.\n@param {boolean} [disabled] - Whether the dropdown is disabled.',
        methods: [],
        displayName: 'Dropdown',
        props: {
          options: {
            required: !0,
            tsType: {
              name: 'Array',
              elements: [{ name: 'string' }],
              raw: 'string[]',
            },
            description: '',
          },
          defaultValue: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          onChange: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(value: string) => void',
              signature: {
                arguments: [{ type: { name: 'string' }, name: 'value' }],
                return: { name: 'void' },
              },
            },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      };
      const Dropdown_stories = {
          title: 'Components/Dropdown',
          component: Dropdown,
          parameters: {
            layout: 'centered',
            docs: {
              description: {
                component:
                  '**Dropdown Component - Storybook**\r\n\nShowcases different variations of the `Dropdown` component, including a disabled state.',
              },
            },
          },
          tags: ['autodocs'],
          argTypes: {
            options: { control: 'object' },
            defaultValue: { control: 'text' },
            onChange: { action: 'changed' },
            disabled: { control: 'boolean' },
          },
        },
        Default = {
          args: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            defaultValue: 'Option 1',
            disabled: !1,
          },
        },
        Disabled = {
          args: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            defaultValue: 'Option 1',
            disabled: !0,
          },
        },
        Empty = { args: { options: [], defaultValue: '', disabled: !1 } },
        __namedExportsOrder = ['Default', 'Disabled', 'Empty'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    options: ["Option 1", "Option 2", "Option 3"],\n    defaultValue: "Option 1",\n    disabled: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: '**Default Dropdown**',
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    options: ["Option 1", "Option 2", "Option 3"],\n    defaultValue: "Option 1",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
            description: {
              story: '**Disabled Dropdown**',
              ...Disabled.parameters?.docs?.description,
            },
          },
        }),
        (Empty.parameters = {
          ...Empty.parameters,
          docs: {
            ...Empty.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    options: [],\n    defaultValue: "",\n    disabled: false\n  }\n}',
              ...Empty.parameters?.docs?.source,
            },
            description: {
              story: '**Empty Dropdown**',
              ...Empty.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Dropdown-Dropdown-stories.1a720ba6.iframe.bundle.js.map
