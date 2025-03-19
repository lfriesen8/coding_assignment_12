(self.webpackChunkcoding_assignment_12 =
  self.webpackChunkcoding_assignment_12 || []).push([
  [623],
  {
    './src/components/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
      const StyledTable = styled_components_browser_esm.Ay.table`
  width: 100%;
  max-width: 800px; /* Ensures table isn't too small */
  margin: 20px auto;
  border-collapse: collapse;
  border: 1px solid #ccc;
`,
        StyledTableRow = styled_components_browser_esm.Ay.tr`
  border-bottom: 1px solid #ccc;
`,
        StyledTableCell = styled_components_browser_esm.Ay.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ccc;
`,
        StyledTableHeader = styled_components_browser_esm.Ay.thead`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-align: left;
  height: 50px;
`,
        StyledTableFooter = styled_components_browser_esm.Ay.tfoot`
  background-color: #f1f1f1;
  font-weight: bold;
  text-align: left;
  height: 50px;
`,
        StyledButton = styled_components_browser_esm.Ay.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Table = (_ref) => {
        let { disabled = !1 } = _ref;
        const [rows, setRows] = (0, react.useState)([
          { id: 1, name: 'John Doe', age: 30, country: 'Canada' },
          { id: 2, name: 'Jane Smith', age: 25, country: 'USA' },
        ]);
        return (0, jsx_runtime.jsxs)(StyledTable, {
          style: {
            opacity: disabled ? 0.5 : 1,
            pointerEvents: disabled ? 'none' : 'auto',
          },
          children: [
            (0, jsx_runtime.jsx)(StyledTableHeader, {
              children: (0, jsx_runtime.jsxs)(StyledTableRow, {
                children: [
                  (0, jsx_runtime.jsx)(StyledTableCell, { children: 'Name' }),
                  (0, jsx_runtime.jsx)(StyledTableCell, { children: 'Age' }),
                  (0, jsx_runtime.jsx)(StyledTableCell, {
                    children: 'Country',
                  }),
                  (0, jsx_runtime.jsx)(StyledTableCell, { children: 'Action' }),
                ],
              }),
            }),
            (0, jsx_runtime.jsx)('tbody', {
              children: rows.map((row) =>
                (0, jsx_runtime.jsxs)(
                  StyledTableRow,
                  {
                    children: [
                      (0, jsx_runtime.jsx)(StyledTableCell, {
                        children: row.name,
                      }),
                      (0, jsx_runtime.jsx)(StyledTableCell, {
                        children: row.age,
                      }),
                      (0, jsx_runtime.jsx)(StyledTableCell, {
                        children: row.country,
                      }),
                      (0, jsx_runtime.jsx)(StyledTableCell, {
                        children: (0, jsx_runtime.jsx)(StyledButton, {
                          onClick: () => {
                            return (
                              (id = row.id),
                              void setRows(rows.filter((row) => row.id !== id))
                            );
                            var id;
                          },
                          disabled,
                          children: 'Remove',
                        }),
                      }),
                    ],
                  },
                  row.id
                )
              ),
            }),
            (0, jsx_runtime.jsx)(StyledTableFooter, {
              children: (0, jsx_runtime.jsxs)(StyledTableRow, {
                children: [
                  (0, jsx_runtime.jsx)(StyledTableCell, { children: 'Total' }),
                  (0, jsx_runtime.jsxs)(StyledTableCell, {
                    colSpan: 2,
                    children: [rows.length, ' people'],
                  }),
                  (0, jsx_runtime.jsx)(StyledTableCell, {
                    children: (0, jsx_runtime.jsx)(StyledButton, {
                      onClick: () => {
                        setRows([
                          ...rows,
                          {
                            id: Date.now(),
                            name: 'New User',
                            age: 0,
                            country: 'Unknown',
                          },
                        ]);
                      },
                      disabled,
                      children: 'Add Row',
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      Table.__docgenInfo = {
        description:
          '**Table Component**\n\nA flexible Table component that supports:\n- Adding rows dynamically.\n- Removing rows individually.\n- A header and footer that remain visible.\n- A `disabled` state that prevents interaction.',
        methods: [],
        displayName: 'Table',
        props: {
          children: {
            required: !1,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
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
      const Table_stories = {
          title: 'Components/Table',
          component: Table,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = { render: () => (0, jsx_runtime.jsx)(Table, {}) },
        Disabled = {
          render: () => (0, jsx_runtime.jsx)(Table, { disabled: !0 }),
        },
        __namedExportsOrder = ['Default', 'Disabled'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <Table /> // Showcases adding/removing rows dynamically\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Table disabled={true} /> // Showcases the table in a disabled state\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
// # sourceMappingURL=components-Table-Table-stories.9a8c0ccf.iframe.bundle.js.map
