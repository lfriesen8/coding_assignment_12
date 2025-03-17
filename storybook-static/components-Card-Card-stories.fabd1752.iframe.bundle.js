(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [513],
  {
    "./src/components/Card/Card.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          NoImage: () => NoImage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      __webpack_require__("./node_modules/react/index.js");
      var styled_components_browser_esm = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js",
      );
      const StyledCard = styled_components_browser_esm.Ay.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background: white;
  padding: 16px;
`,
        CardImage = styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,
        CardTitle = styled_components_browser_esm.Ay.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`,
        CardDescription = styled_components_browser_esm.Ay.p`
  font-size: 1rem;
  color: #666;
`,
        CardButton = styled_components_browser_esm.Ay.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Card = (_ref) => {
        let { title, description, image, buttonLabel, onButtonClick } = _ref;
        return (0, jsx_runtime.jsxs)(StyledCard, {
          children: [
            image &&
              (0, jsx_runtime.jsx)(CardImage, { src: image, alt: title }),
            (0, jsx_runtime.jsx)(CardTitle, { children: title }),
            (0, jsx_runtime.jsx)(CardDescription, { children: description }),
            buttonLabel &&
              (0, jsx_runtime.jsx)(CardButton, {
                onClick: () => onButtonClick && onButtonClick(),
                children: buttonLabel,
              }),
          ],
        });
      };
      Card.__docgenInfo = {
        description:
          "**Card Component**\n\nA versatile, reusable card that can display an image, title, description, and button.\n\n@component\n@param {string} title - The title of the card.\n@param {string} description - The card description text.\n@param {string} [image] - Optional image URL.\n@param {string} [buttonLabel] - Optional button text.\n@param {() => void} [onButtonClick] - Click handler for the button.",
        methods: [],
        displayName: "Card",
        props: {
          title: { required: !0, tsType: { name: "string" }, description: "" },
          description: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          image: { required: !1, tsType: { name: "string" }, description: "" },
          buttonLabel: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          onButtonClick: {
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
      const Card_stories = {
          title: "Components/Card",
          component: Card,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "**Card Component - Storybook**\r\n\nShowcases different variations of the `Card` component.",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: {
            title: { control: "text" },
            description: { control: "text" },
            image: { control: "text" },
            buttonLabel: { control: "text" },
          },
        },
        Default = {
          args: {
            title: "PK SPEAKERS",
            description: "White PK 15 Speakers",
            image:
              "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/16/310/g310YU2MW-F.jpg",
            buttonLabel: "More info",
            onButtonClick: () => alert("Button clicked!"),
          },
        },
        NoImage = {
          args: { title: "Out of stock", description: "Sorry about that." },
        },
        __namedExportsOrder = ["Default", "NoImage"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    title: "PK SPEAKERS",\n    description: "White PK 15 Speakers",\n    image: "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/16/310/g310YU2MW-F.jpg",\n    buttonLabel: "More info",\n    onButtonClick: () => alert("Button clicked!")\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "**Default Card**",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (NoImage.parameters = {
          ...NoImage.parameters,
          docs: {
            ...NoImage.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    title: "Out of stock",\n    description: "Sorry about that."\n  }\n}',
              ...NoImage.parameters?.docs?.source,
            },
            description: {
              story: "**Card Without Image**",
              ...NoImage.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Card-Card-stories.fabd1752.iframe.bundle.js.map
