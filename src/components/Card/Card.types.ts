/**
 * **CardProps**
 * Defines the properties for the `Card` component.
 */
export type CardProps = {
    title: string;
    description: string;
    image?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
  };
  