(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [15],
  {
    "./src/components/Img/Img.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          FullWidth: () => FullWidth,
          Rounded: () => Rounded,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Img_stories,
        });
      __webpack_require__("./node_modules/react/index.js");
      const StyledImage = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js",
      ).Ay.img`
  width: ${(_ref) => {
    let { width } = _ref;
    return "number" == typeof width ? `${width}px` : width || "auto";
  }};
  height: ${(_ref2) => {
    let { height } = _ref2;
    return "number" == typeof height ? `${height}px` : height || "auto";
  }};
  border-radius: ${(_ref3) => {
    let { borderRadius } = _ref3;
    return borderRadius || "0px";
  }};
  object-fit: cover;
  display: block;
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Img = (_ref) => {
        let { src, alt, width, height, borderRadius } = _ref;
        return (0, jsx_runtime.jsx)(StyledImage, {
          src,
          alt,
          width,
          height,
          borderRadius,
        });
      };
      Img.__docgenInfo = {
        description:
          "**Img Component**\n\nA reusable image component that supports various sizes and styling.\n\n@component\n@param {string} src - Image source URL.\n@param {string} alt - Alternative text for the image.\n@param {string | number} [width] - Width of the image.\n@param {string | number} [height] - Height of the image.\n@param {string} [borderRadius] - Rounds the corners of the image.",
        methods: [],
        displayName: "Img",
        props: {
          src: { required: !0, tsType: { name: "string" }, description: "" },
          alt: { required: !0, tsType: { name: "string" }, description: "" },
          width: {
            required: !1,
            tsType: {
              name: "union",
              raw: "string | number",
              elements: [{ name: "string" }, { name: "number" }],
            },
            description: "",
          },
          height: {
            required: !1,
            tsType: {
              name: "union",
              raw: "string | number",
              elements: [{ name: "string" }, { name: "number" }],
            },
            description: "",
          },
          borderRadius: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
        },
      };
      const Img_stories = {
          title: "Components/Img",
          component: Img,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "**Img Component - Storybook**\r\n\nShowcases different variations of the `Img` component.",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: {
            src: { control: "text" },
            alt: { control: "text" },
            width: { control: "text" },
            height: { control: "text" },
            borderRadius: { control: "text" },
          },
        },
        Default = {
          args: {
            src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",
            alt: "Placeholder Image",
            width: 150,
            height: 150,
            borderRadius: "5px",
          },
        },
        Rounded = {
          args: {
            src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",
            alt: "Rounded Image",
            width: 150,
            height: 150,
            borderRadius: "50%",
          },
        },
        FullWidth = {
          args: {
            src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",
            alt: "Full-Width Image",
            width: "100%",
            height: 300,
            borderRadius: "0px",
          },
        },
        __namedExportsOrder = ["Default", "Rounded", "FullWidth"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",\n    alt: "Placeholder Image",\n    width: 150,\n    height: 150,\n    borderRadius: "5px"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "**Default Image**",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (Rounded.parameters = {
          ...Rounded.parameters,
          docs: {
            ...Rounded.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",\n    alt: "Rounded Image",\n    width: 150,\n    height: 150,\n    borderRadius: "50%"\n  }\n}',
              ...Rounded.parameters?.docs?.source,
            },
            description: {
              story: "**Rounded Image**",
              ...Rounded.parameters?.docs?.description,
            },
          },
        }),
        (FullWidth.parameters = {
          ...FullWidth.parameters,
          docs: {
            ...FullWidth.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: "https://www.thomann.de/blog/wp-content/uploads/2024/08/Djtransitions_header_770x425.png",\n    alt: "Full-Width Image",\n    width: "100%",\n    height: 300,\n    borderRadius: "0px"\n  }\n}',
              ...FullWidth.parameters?.docs?.source,
            },
            description: {
              story: "**Full-Width Image**",
              ...FullWidth.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Img-Img-stories.4d95f3e3.iframe.bundle.js.map
