import { render, screen } from "@testing-library/react";
import { Table } from "./index";

describe("Table Component", () => {
  test("renders the table with children correctly", () => {
    render(
      <Table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer</td>
          </tr>
        </tfoot>
      </Table>
    );
    expect(screen.getByText("Header 1")).toBeInTheDocument();
    expect(screen.getByText("Header 2")).toBeInTheDocument();
    expect(screen.getByText("Row 1")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("renders default rows when no children are provided", () => {
    render(<Table />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("renders table footer", () => {
    render(<Table />);
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});

