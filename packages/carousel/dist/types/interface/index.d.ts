export declare namespace RollingBanner {
    interface BannerProps {
        config?: Config;
        content: Content[];
        className?: string;
    }
    type Config = {
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
    interface BannerRatio {
        pcRatio?: number;
        mobileRatio?: number;
        breakPoint?: number;
    }
    interface Content {
        imageUrl: string;
        mobileImageUrl?: string;
        landingUrl?: string;
    }
}
//# sourceMappingURL=index.d.ts.map