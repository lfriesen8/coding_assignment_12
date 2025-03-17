(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [391],
  {
    "./src/components/RadioButton/RadioButton.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: () => Checked,
          Default: () => Default,
          RadioGroup: () => RadioGroup,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RadioButton_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js",
        );
      const StyledRadioWrapper = styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,
        StyledRadio = styled_components_browser_esm.Ay.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,
        StyledLabel = styled_components_browser_esm.Ay.label`
  font-size: 16px;
  cursor: pointer;
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const RadioButton = (_ref) => {
        let { label, name, value, checked, onChange } = _ref;
        return (0, jsx_runtime.jsxs)(StyledRadioWrapper, {
          children: [
            (0, jsx_runtime.jsx)(StyledRadio, {
              type: "radio",
              name,
              value,
              checked,
              onChange: (e) => onChange && onChange(e.target.value),
            }),
            (0, jsx_runtime.jsx)(StyledLabel, { children: label }),
          ],
        });
      };
      RadioButton.__docgenInfo = {
        description:
          "**Radio Button Component**\n\nA reusable radio button component.\n\n@component\n@param {string} label - Label for the radio button.\n@param {string} name - Name attribute for grouping radio buttons.\n@param {string} value - Value associated with this radio button.\n@param {boolean} [checked] - Whether the radio button is selected.\n@param {(value: string) => void} [onChange] - Callback when selection changes.",
        methods: [],
        displayName: "RadioButton",
        props: {
          label: { required: !0, tsType: { name: "string" }, description: "" },
          name: { required: !0, tsType: { name: "string" }, description: "" },
          value: { required: !0, tsType: { name: "string" }, description: "" },
          checked: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          onChange: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(value: string) => void",
              signature: {
                arguments: [{ type: { name: "string" }, name: "value" }],
                return: { name: "void" },
              },
            },
            description: "",
          },
        },
      };
      const RadioButton_stories = {
          title: "Components/RadioButton",
          component: RadioButton,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "**RadioButton Component - Storybook**\r\n\nShowcases different variations of the `RadioButton` component.",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: {
            label: { control: "text" },
            name: { control: "text" },
            value: { control: "text" },
            checked: { control: "boolean" },
            onChange: { action: "changed" },
          },
        },
        Default = {
          args: {
            label: "Option 1",
            name: "example",
            value: "option1",
            checked: !1,
          },
        },
        Checked = {
          args: {
            label: "Selected Option",
            name: "example",
            value: "option2",
            checked: !0,
          },
        },
        RadioGroup = {
          render: () => {
            const [selected, setSelected] = (0, react.useState)("option1");
            return (0, jsx_runtime.jsxs)("div", {
              children: [
                (0, jsx_runtime.jsx)(RadioButton, {
                  label: "Option 1",
                  name: "radioGroup",
                  value: "option1",
                  checked: "option1" === selected,
                  onChange: setSelected,
                }),
                (0, jsx_runtime.jsx)(RadioButton, {
                  label: "Option 2",
                  name: "radioGroup",
                  value: "option2",
                  checked: "option2" === selected,
                  onChange: setSelected,
                }),
              ],
            });
          },
        },
        __namedExportsOrder = ["Default", "Checked", "RadioGroup"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Option 1",\n    name: "example",\n    value: "option1",\n    checked: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "**Standalone Unchecked Radio Button**",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (Checked.parameters = {
          ...Checked.parameters,
          docs: {
            ...Checked.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Selected Option",\n    name: "example",\n    value: "option2",\n    checked: true\n  }\n}',
              ...Checked.parameters?.docs?.source,
            },
            description: {
              story: "**Standalone Checked Radio Button**",
              ...Checked.parameters?.docs?.description,
            },
          },
        }),
        (RadioGroup.parameters = {
          ...RadioGroup.parameters,
          docs: {
            ...RadioGroup.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const [selected, setSelected] = useState("option1"); // ✅ Track selected option\n\n    return <div>\r\n        <RadioButton label="Option 1" name="radioGroup" value="option1" checked={selected === "option1"} onChange={setSelected} // ✅ Updates state\n      />\r\n        <RadioButton label="Option 2" name="radioGroup" value="option2" checked={selected === "option2"} onChange={setSelected} // ✅ Updates state\n      />\r\n      </div>;\n  }\n}',
              ...RadioGroup.parameters?.docs?.source,
            },
            description: {
              story:
                "**Radio Group (Multiple Options)**\r\n\nDemonstrates that only one radio button can be selected at a time.",
              ...RadioGroup.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-RadioButton-RadioButton-stories.f71c99ce.iframe.bundle.js.map
