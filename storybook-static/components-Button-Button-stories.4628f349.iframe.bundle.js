(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [721],
  {
    "./src/components/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Disabled: () => Disabled,
          Large: () => Large,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@storybook/test/dist/index.mjs",
      );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Button",
          component: __webpack_require__("./src/components/Button/Button.tsx")
            .$,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "**Button Component Storybook**\r\n\nThis Storybook file documents the `Button` component, showcasing its different variations.\r\nThe `Button` component supports various states including:\r\n- **Primary**: A highlighted button with primary styling.\r\n- **Secondary**: A default button without primary styling.\r\n- **Large & Small**: Different button sizes.\r\n- **Disabled**: A button that is visually greyed out and non-clickable.\r\n\n## Storybook Controls:\r\n- The **background color** can be modified dynamically in Storybook.\r\n- Click actions are recorded in the Storybook Actions panel.\r\n\n\r\nLiam Friesen",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: { backgroundColor: { control: "color" } },
          args: {
            onClick: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          },
        },
        Primary = { args: { primary: !0, label: "Primary Button" } },
        Secondary = { args: { label: "Secondary Button" } },
        Large = { args: { size: "large", label: "Large Button" } },
        Small = { args: { size: "small", label: "Small Button" } },
        Disabled = { args: { label: "Disabled Button", disabled: !0 } },
        __namedExportsOrder = [
          "Primary",
          "Secondary",
          "Large",
          "Small",
          "Disabled",
        ];
      (Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    primary: true,\n    label: "Primary Button"\n  }\n}',
            ...Primary.parameters?.docs?.source,
          },
          description: {
            story:
              "**Primary Button**\r\n- This is the default button with **primary styling**.",
            ...Primary.parameters?.docs?.description,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Secondary Button"\n  }\n}',
              ...Secondary.parameters?.docs?.source,
            },
            description: {
              story:
                "**Secondary Button**\r\n- This is a standard button without the primary color.",
              ...Secondary.parameters?.docs?.description,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    size: "large",\n    label: "Large Button"\n  }\n}',
              ...Large.parameters?.docs?.source,
            },
            description: {
              story:
                "**Large Button**\r\n- This button is displayed in a larger size.",
              ...Large.parameters?.docs?.description,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    size: "small",\n    label: "Small Button"\n  }\n}',
              ...Small.parameters?.docs?.source,
            },
            description: {
              story:
                "**Small Button**\r\n- This button is displayed in a smaller size.",
              ...Small.parameters?.docs?.description,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Disabled Button",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
            description: {
              story:
                "**Disabled Button**\r\n- This button is greyed out and non-clickable.",
              ...Disabled.parameters?.docs?.description,
            },
          },
        });
    },
    "./src/components/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      __webpack_require__("./node_modules/react/index.js");
      const StyledButton = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js",
      ).Ay.button` /* ✅ Removed label from styled props */
  padding: ${(_ref) => {
    let { size } = _ref;
    return "small" === size
      ? "5px 10px"
      : "large" === size
        ? "15px 30px"
        : "10px 20px";
  }};
  font-size: ${(_ref2) => {
    let { size } = _ref2;
    return "small" === size ? "12px" : "large" === size ? "18px" : "16px";
  }};
  border-radius: 5px;
  border: none;
  cursor: ${(_ref3) => {
    let { disabled } = _ref3;
    return disabled ? "not-allowed" : "pointer";
  }};
  
  /* ✅ Now uses backgroundColor prop if provided, otherwise falls back to primary color logic */
  background-color: ${(_ref4) => {
    let { backgroundColor, primary, disabled } = _ref4;
    return disabled
      ? "#ccc"
      : backgroundColor || (primary ? "#007bff" : "#555");
  }};

  color: white;
  transition: background 0.3s, transform 0.1s ease-in-out;

  &:hover {
    background-color: ${(_ref5) => {
      let { backgroundColor, primary, disabled } = _ref5;
      return disabled
        ? "#ccc"
        : backgroundColor || (primary ? "#0056b3" : "#333");
    }};
    transform: ${(_ref6) => {
      let { disabled } = _ref6;
      return disabled ? "none" : "scale(1.05)";
    }}; /* ✅ Adds slight hover effect */
  }

  &:active {
    transform: ${(_ref7) => {
      let { disabled } = _ref7;
      return disabled ? "none" : "scale(0.95)";
    }}; /* ✅ Click effect */
  }
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Button = (_ref) => {
        let {
          label,
          primary = !1,
          disabled = !1,
          size = "medium",
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
        description: "",
        methods: [],
        displayName: "Button",
        props: {
          label: { required: !0, tsType: { name: "string" }, description: "" },
          primary: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
            defaultValue: { value: "false", computed: !1 },
          },
          disabled: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
            defaultValue: { value: "false", computed: !1 },
          },
          size: {
            required: !1,
            tsType: {
              name: "union",
              raw: '"small" | "medium" | "large"',
              elements: [
                { name: "literal", value: '"small"' },
                { name: "literal", value: '"medium"' },
                { name: "literal", value: '"large"' },
              ],
            },
            description: "",
            defaultValue: { value: '"medium"', computed: !1 },
          },
          backgroundColor: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          onClick: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "() => void",
              signature: { arguments: [], return: { name: "void" } },
            },
            description: "",
          },
        },
      };
    },
  },
]);
// # sourceMappingURL=components-Button-Button-stories.4628f349.iframe.bundle.js.map
