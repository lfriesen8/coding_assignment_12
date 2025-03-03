/**
 * **DropdownProps**
 * Defines the properties for the `Dropdown` component.
 */
export type DropdownProps = {
  options: string[]; // Array of dropdown options
  defaultValue?: string; // Default selected option
  onChange?: (value: string) => void; // Function to handle selection changes
  disabled?: boolean; // Whether the dropdown is disabled
};
