export namespace RollingBanner {
  export interface BannerProps {
    config?: Config;
    content: Content[];
    className?: string;
  }
  export type Config = {
    lazyLoad?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    arrowShow?: boolean;
    countShow?: boolean;
    ratio?: BannerRatio;
    layout?: 'fit';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    mobileManipulate?: boolean;
  };

  export interface BannerRatio {
    pcRatio?: number;
    mobileRatio?: number;
    breakPoint?: number;
  }
  export interface Content {
    imageUrl: string;
    mobileImageUrl?: string;
    landingUrl?: string;
  }
}
