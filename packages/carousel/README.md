# `@hyune/react-carousel`

A React component library for creating a customizable and responsive carousel.

## Installation

You can install the carousel component using npm:

```bash
npm install @hyune/react-carousel
```

### Compatibility

Ensure your project uses compatible versions of React:

```json
"react": "<19",
"react-dom": "<19"
```

### Usage

Here’s a basic example of how to use the Carousel component:

```tsx
import { Carousel } from '@hyune/react-carousel';

const content = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    mobileImageUrl: 'https://example.com/mobile-image1.jpg',
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    landingUrl: 'https://example.com/landing-image2.jpg',
  },
  // Add more content items as needed
];

const config = {
  lazyLoad: true,
  autoplay: true,
  autoplayDelay: 3000,
  arrowShow: true,
  countShow: true,
  objectFit: 'cover',
  mobileManipulate: true,
  ratio: {
    breakPoint: 1600,
    pcRatio: 2 / 1,
    mobileRatio: 2.2 / 1,
  },
};

const App = () => (
  <div>
    <Carousel config={config} content={content} />
  </div>
);

export default App;
```

### Component Props

## Carousel

Props:

- config: Configuration object for the carousel. See below for detailed options.
- content: Array of objects defining each carousel item.
- className: Optional className to add custom styles.

> Config Type

```tsx
type Config = {
  lazyLoad?: boolean; // Enables lazy loading of images
  autoplay?: boolean; // Enables automatic cycling of items
  autoplayDelay?: number; // Delay between automatic transitions (in milliseconds)
  arrowShow?: boolean; // Displays navigation arrows
  countShow?: boolean; // Displays item count
  ratio?: BannerRatio; // Aspect ratio configuration
  layout?: 'fit'; // Layout option
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // Object fit style for images
  mobileManipulate?: boolean; // Enables touch manipulation on mobile
};
```

> BannerRatio Type

```tsx
type BannerRatio = {
  breakPoint: number; // Width at which to apply the ratio settings
  pcRatio: number; // Aspect ratio for desktop
  mobileRatio: number; // Aspect ratio for mobile
};
```
