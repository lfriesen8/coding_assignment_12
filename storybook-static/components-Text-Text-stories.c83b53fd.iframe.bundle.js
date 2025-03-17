(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [103],
  {
    "./src/components/Text/Text.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Bold: () => Bold,
          Colored: () => Colored,
          Default: () => Default,
          Italic: () => Italic,
          Large: () => Large,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Text_stories,
        });
      __webpack_require__("./node_modules/react/index.js");
      const StyledText = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js",
      ).Ay.p`
  font-size: ${(_ref) => {
    let { size } = _ref;
    return "small" === size ? "14px" : "large" === size ? "22px" : "16px";
  }};
  font-weight: ${(_ref2) => {
    let { bold } = _ref2;
    return bold ? "bold" : "normal";
  }};
  font-style: ${(_ref3) => {
    let { italic } = _ref3;
    return italic ? "italic" : "normal";
  }};
  color: ${(_ref4) => {
    let { color } = _ref4;
    return color || "#333";
  }};
  margin: 5px 0;
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Text = (_ref) => {
        let { children, size = "medium", bold, italic, color } = _ref;
        return (0, jsx_runtime.jsx)(StyledText, {
          size,
          bold,
          italic,
          color,
          children,
        });
      };
      Text.__docgenInfo = {
        description:
          '**Text Component**\n\nA flexible text component for displaying content with different sizes, styles, and weights.\n\n@component\n@param {string} children - The text content.\n@param {"small" | "medium" | "large"} [size] - The text size.\n@param {boolean} [bold] - Whether the text is bold.\n@param {boolean} [italic] - Whether the text is italic.\n@param {string} [color] - Custom text color.',
        methods: [],
        displayName: "Text",
        props: {
          children: {
            required: !0,
            tsType: { name: "string" },
            description: "",
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
          bold: { required: !1, tsType: { name: "boolean" }, description: "" },
          italic: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          color: { required: !1, tsType: { name: "string" }, description: "" },
        },
      };
      const Text_stories = {
          title: "Components/Text",
          component: Text,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "**Text Component - Storybook**\r\n\nShowcases different variations of the `Text` component:\r\n- **Default**: Normal text.\r\n- **Bold**: Text with bold styling.\r\n- **Italic**: Text with italic styling.\r\n- **Colored**: Custom text color.\r\n- **Different Sizes**: Small, Medium, Large.",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: {
            size: { control: "select", options: ["small", "medium", "large"] },
            bold: { control: "boolean" },
            italic: { control: "boolean" },
            color: { control: "color" },
          },
        },
        Default = { args: { children: "This is default text" } },
        Bold = { args: { children: "This is bold text", bold: !0 } },
        Italic = { args: { children: "This is italic text", italic: !0 } },
        Colored = {
          args: { children: "This is colored text", color: "#ff5733" },
        },
        Small = { args: { children: "This is small text", size: "small" } },
        Large = { args: { children: "This is large text", size: "large" } },
        __namedExportsOrder = [
          "Default",
          "Bold",
          "Italic",
          "Colored",
          "Small",
          "Large",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: "This is default text"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "**Default Text**",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (Bold.parameters = {
          ...Bold.parameters,
          docs: {
            ...Bold.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is bold text",\n    bold: true\n  }\n}',
              ...Bold.parameters?.docs?.source,
            },
            description: {
              story: "**Bold Text**",
              ...Bold.parameters?.docs?.description,
            },
          },
        }),
        (Italic.parameters = {
          ...Italic.parameters,
          docs: {
            ...Italic.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is italic text",\n    italic: true\n  }\n}',
              ...Italic.parameters?.docs?.source,
            },
            description: {
              story: "**Italic Text**",
              ...Italic.parameters?.docs?.description,
            },
          },
        }),
        (Colored.parameters = {
          ...Colored.parameters,
          docs: {
            ...Colored.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is colored text",\n    color: "#ff5733"\n  }\n}',
              ...Colored.parameters?.docs?.source,
            },
            description: {
              story: "**Colored Text**",
              ...Colored.parameters?.docs?.description,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is small text",\n    size: "small"\n  }\n}',
              ...Small.parameters?.docs?.source,
            },
            description: {
              story: "**Different Sizes**",
              ...Small.parameters?.docs?.description,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is large text",\n    size: "large"\n  }\n}',
              ...Large.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Text-Text-stories.c83b53fd.iframe.bundle.js.map
