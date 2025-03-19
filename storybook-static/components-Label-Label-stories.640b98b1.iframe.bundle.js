(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [747],
  {
    './src/components/Label/Label.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Associated: () => Associated,
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Label_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      const StyledLabel = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js'
      ).Ay.label`
  font-size: 16px;
  color: ${(_ref) => {
    let { disabled } = _ref;
    return disabled ? '#ccc' : '#333';
  }};
  cursor: ${(_ref2) => {
    let { disabled } = _ref2;
    return disabled ? 'not-allowed' : 'pointer';
  }};
  display: block;
  margin-bottom: 5px;
`;
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Label = (_ref) => {
        let { text, disabled = !1, htmlFor } = _ref;
        return (0, jsx_runtime.jsx)(StyledLabel, {
          htmlFor,
          disabled,
          children: text,
        });
      };
      Label.__docgenInfo = {
        description:
          '**Label Component**\n\nA simple label component for forms or UI elements.\n\n@component\n@param {string} text - The text content of the label.\n@param {boolean} [disabled] - Whether the label is disabled.\n@param {string} [htmlFor] - The `for` attribute (associates label with an input).',
        methods: [],
        displayName: 'Label',
        props: {
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
          htmlFor: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
        },
      };
      const Label_stories = {
          title: 'Components/Label',
          component: Label,
          parameters: {
            layout: 'centered',
            docs: {
              description: {
                component:
                  '**Label Component - Storybook**\r\n\nThis Storybook file showcases the `Label` component with different states.\r\n\n- **Default Label**: Normal label with text.\r\n- **Disabled Label**: Greyed-out, non-clickable label.\r\n- **Associated Label**: Connected to an input field.',
              },
            },
          },
          tags: ['autodocs'],
          argTypes: {
            text: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Default = { args: { text: 'Label Text' } },
        Disabled = { args: { text: 'Disabled Label', disabled: !0 } },
        Associated = { args: { text: 'Label for Input', htmlFor: 'input-id' } },
        __namedExportsOrder = ['Default', 'Disabled', 'Associated'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    text: "Label Text"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: '**Default Label**\r\n- Normal label with text.',
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
                '{\n  args: {\n    text: "Disabled Label",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
            description: {
              story: '**Disabled Label**\r\n- Greyed-out label.',
              ...Disabled.parameters?.docs?.description,
            },
          },
        }),
        (Associated.parameters = {
          ...Associated.parameters,
          docs: {
            ...Associated.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    text: "Label for Input",\n    htmlFor: "input-id"\n  }\n}',
              ...Associated.parameters?.docs?.source,
            },
            description: {
              story: '**Associated Label**\r\n- Connected to an input field.',
              ...Associated.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Label-Label-stories.640b98b1.iframe.bundle.js.map
