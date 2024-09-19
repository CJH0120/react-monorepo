import { jsx as _jsx } from "react/jsx-runtime";
import styles from '../carousel.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export const FitItemList = ({ content, config, translateCSS }) => {
    const { objectFit, lazyLoad } = config;
    return (_jsx("ul", { style: { ...translateCSS }, className: cx('carousel_image_list'), children: content.map((image, idx) => (_jsx("li", { className: cx('carousel_image_wrapper'), children: !!image.landingUrl ? (_jsx("a", { href: image.landingUrl, target: "_blank", className: cx('carousel_image_container'), style: {}, children: _jsx("img", { className: cx('carousel_image'), src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        objectFit,
                    }, draggable: false }) })) : (_jsx("div", { className: cx('carousel_image_container'), style: {}, children: _jsx("img", { className: cx('carousel_image'), src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        objectFit,
                    }, draggable: false }) })) }, idx))) }));
};
