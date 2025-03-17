(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [407],
  {
    "./src/components/HeroImage/HeroImage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          NoText: () => NoText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => HeroImage_stories,
        });
      __webpack_require__("./node_modules/react/index.js");
      var styled_components_browser_esm = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js",
      );
      const StyledHeroImage = styled_components_browser_esm.Ay.div`
  background-size: cover;
  background-position: center;
  height: ${(_ref) => {
    let { height } = _ref;
    return height || "300px";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,
        HiddenImg = styled_components_browser_esm.Ay.img`
  display: none;
`,
        Overlay = styled_components_browser_esm.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(_ref2) => {
    let { color } = _ref2;
    return color;
  }};
`,
        HeroText = styled_components_browser_esm.Ay.h1`
  position: relative;
  z-index: 2;
  font-size: 2rem;
  color: ${(_ref3) => {
    let { color } = _ref3;
    return color;
  }};
  text-align: center;
`;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const HeroImage = (_ref) => {
        let {
          src,
          alt,
          height = "300px",
          overlayColor = "rgba(0,0,0,0.5)",
          text,
          textColor = "#fff",
        } = _ref;
        return (0, jsx_runtime.jsxs)(StyledHeroImage, {
          height,
          style: { backgroundImage: `url(${src})` },
          children: [
            (0, jsx_runtime.jsx)(HiddenImg, { src, alt }),
            (0, jsx_runtime.jsx)(Overlay, { color: overlayColor }),
            text &&
              (0, jsx_runtime.jsx)(HeroText, {
                color: textColor,
                children: text,
              }),
          ],
        });
      };
      HeroImage.__docgenInfo = {
        description:
          '**HeroImage Component**\n\nA large, full-width image with optional text and an overlay.\n\n@component\n@param {string} src - Image source URL.\n@param {string} alt - Alternative text for accessibility.\n@param {string | number} [height] - Height of the hero section.\n@param {string} [overlayColor] - Background overlay color (e.g., "rgba(0,0,0,0.5)").\n@param {string} [text] - Optional text over the image.\n@param {string} [textColor] - Color of the text.',
        methods: [],
        displayName: "HeroImage",
        props: {
          src: { required: !0, tsType: { name: "string" }, description: "" },
          alt: { required: !0, tsType: { name: "string" }, description: "" },
          height: {
            required: !1,
            tsType: {
              name: "union",
              raw: "string | number",
              elements: [{ name: "string" }, { name: "number" }],
            },
            description: "",
            defaultValue: { value: '"300px"', computed: !1 },
          },
          overlayColor: {
            required: !1,
            tsType: { name: "string" },
            description: "",
            defaultValue: { value: '"rgba(0,0,0,0.5)"', computed: !1 },
          },
          text: { required: !1, tsType: { name: "string" }, description: "" },
          textColor: {
            required: !1,
            tsType: { name: "string" },
            description: "",
            defaultValue: { value: '"#fff"', computed: !1 },
          },
        },
      };
      const HeroImage_stories = {
          title: "Components/HeroImage",
          component: HeroImage,
          parameters: {
            layout: "fullscreen",
            docs: {
              description: {
                component:
                  "**HeroImage Component - Storybook**\r\n\nShowcases different variations of the `HeroImage` component.",
              },
            },
          },
          tags: ["autodocs"],
          argTypes: {
            src: { control: "text" },
            alt: { control: "text" },
            height: { control: "text" },
            overlayColor: { control: "color" },
            text: { control: "text" },
            textColor: { control: "color" },
          },
        },
        Default = {
          args: {
            src: "https://designcollaborative.com/wp-content/uploads/2021/09/Slider6_Sweetwater-Electric-Guitars-Area-e1633015825122.jpg",
            alt: "Hero Image",
            height: "400px",
            overlayColor: "rgba(0,0,0,0.5)",
            text: "Welcome to the music store",
            textColor: "#fff",
          },
        },
        NoText = {
          args: {
            src: "https://designcollaborative.com/wp-content/uploads/2021/09/Slider6_Sweetwater-Electric-Guitars-Area-e1633015825122.jpg",
            alt: "Hero Image",
            height: "400px",
            overlayColor: "rgba(0,0,0,0.3)",
          },
        },
        __namedExportsOrder = ["Default", "NoText"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    src: "https://designcollaborative.com/wp-content/uploads/2021/09/Slider6_Sweetwater-Electric-Guitars-Area-e1633015825122.jpg",\n    alt: "Hero Image",\n    height: "400px",\n    overlayColor: "rgba(0,0,0,0.5)",\n    text: "Welcome to the music store",\n    textColor: "#fff"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "**Default Hero Image**",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (NoText.parameters = {
          ...NoText.parameters,
          docs: {
            ...NoText.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: "https://designcollaborative.com/wp-content/uploads/2021/09/Slider6_Sweetwater-Electric-Guitars-Area-e1633015825122.jpg",\n    alt: "Hero Image",\n    height: "400px",\n    overlayColor: "rgba(0,0,0,0.3)"\n  }\n}',
              ...NoText.parameters?.docs?.source,
            },
            description: {
              story: "**Hero Image Without Text**",
              ...NoText.parameters?.docs?.description,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-HeroImage-HeroImage-stories.2a017353.iframe.bundle.js.map
