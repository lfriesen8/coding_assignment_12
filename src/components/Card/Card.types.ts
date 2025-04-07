export type CardProps = {
  title: string;
  description: string;
  image?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  link?: string;            // ✅ for GitHub or live links
  techList?: string[];      // ✅ to show technologies used
};
