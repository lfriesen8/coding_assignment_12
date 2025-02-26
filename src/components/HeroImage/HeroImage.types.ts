/**
 * **HeroImageProps**
 * Defines the properties for the `HeroImage` component.
 */
export interface HeroImageProps {
    src: string; // Image source URL
    alt: string; // Alternative text for accessibility
    height?: string | number; // Height of the hero section
    overlayColor?: string; // Background overlay color
    text?: string; // Optional text over the image
    textColor?: string; // Text color
}
