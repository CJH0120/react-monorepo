import { jsx as _jsx } from "react/jsx-runtime";
import styles from '../carousel.module.scss';
export const FitItemList = ({ content, config, translateCSS }) => {
    const { objectFit, lazyLoad } = config;
    return (_jsx("ul", { style: { ...translateCSS }, className: [styles.carousel_image_list].join(' '), children: content.map((image, idx) => (_jsx("li", { className: styles.carousel_image_wrapper, children: !!image.landingUrl ? (_jsx("a", { href: image.landingUrl, target: "_blank", className: styles.carousel_image_container, style: {}, children: _jsx("img", { className: styles.carousel_image, src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        objectFit,
                    }, draggable: false }) })) : (_jsx("div", { className: styles.carousel_image_container, style: {}, children: _jsx("img", { className: styles.carousel_image, src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        // aspectRatio: `${aspectRatio} `,
                        objectFit,
                    }, draggable: false }) })) }, idx))) }));
};
//# sourceMappingURL=FitItem.js.map