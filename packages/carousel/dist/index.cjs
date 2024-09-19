'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var classNames = require('classnames/bind');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".carousel-module_hyune_carousel_wrapper__kS6se {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  text-align: center;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 {\n  width: 100%;\n  height: 100%;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 .carousel-module_carousel_content_inner__OBQkd {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 .carousel-module_carousel_content_inner__OBQkd .carousel-module_carousel_image_list__QVYxq {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 .carousel-module_carousel_content_inner__OBQkd .carousel-module_carousel_image_wrapper__1lJCM {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 .carousel-module_carousel_content_inner__OBQkd .carousel-module_carousel_image_wrapper__1lJCM .carousel-module_carousel_image_container__JpW5g {\n  width: 100%;\n  pointer-events: auto;\n  position: relative;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_content__XnGG1 .carousel-module_carousel_content_inner__OBQkd .carousel-module_carousel_image_wrapper__1lJCM .carousel-module_carousel_image__BQPhP {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  transform: translateX(-50%);\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_count_wrapper__7h78- {\n  z-index: 9999;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px 15px;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_carousel_count_wrapper__7h78- .carousel-module_carousel_count__g4jpQ {\n  padding: 5px 10px;\n  background: rgba(0, 0, 0, 0.3);\n  width: fit-content;\n  color: #fff;\n  border-radius: 4px;\n  display: flex;\n  gap: 5px;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL {\n  position: absolute;\n  box-sizing: border-box;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 15px;\n  z-index: 9999;\n}\n@media screen and (max-width: 768px) {\n  .carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL {\n    display: none;\n  }\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL.carousel-module_modified_wrapper_left__SKfnY {\n  left: 0;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL.carousel-module_modified_wrapper_right__NVwU1 {\n  right: 0;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL .carousel-module_arrow__15k1b {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n  color: #fff;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL .carousel-module_arrow__15k1b:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_modified_wrapper__-lWQL .carousel-module_arrow__15k1b.carousel-module_arrow_right__Dzqlv {\n  right: 0;\n}\n.carousel-module_hyune_carousel_wrapper__kS6se .carousel-module_wide_image_wrapper__YCTps {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}";
var styles = {"hyune_carousel_wrapper":"carousel-module_hyune_carousel_wrapper__kS6se","carousel_content":"carousel-module_carousel_content__XnGG1","carousel_content_inner":"carousel-module_carousel_content_inner__OBQkd","carousel_image_list":"carousel-module_carousel_image_list__QVYxq","carousel_image_wrapper":"carousel-module_carousel_image_wrapper__1lJCM","carousel_image_container":"carousel-module_carousel_image_container__JpW5g","carousel_image":"carousel-module_carousel_image__BQPhP","carousel_count_wrapper":"carousel-module_carousel_count_wrapper__7h78-","carousel_count":"carousel-module_carousel_count__g4jpQ","modified_wrapper":"carousel-module_modified_wrapper__-lWQL","modified_wrapper_left":"carousel-module_modified_wrapper_left__SKfnY","modified_wrapper_right":"carousel-module_modified_wrapper_right__NVwU1","arrow":"carousel-module_arrow__15k1b","arrow_right":"carousel-module_arrow_right__Dzqlv","wide_image_wrapper":"carousel-module_wide_image_wrapper__YCTps"};
styleInject(css_248z);

const IconArrowRight = react.memo((props) => (jsxRuntime.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", ...props, children: jsxRuntime.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 12h16m0 0-6-6m6 6-6 6" }) })));
IconArrowRight.displayName = 'IconArrowRight';

const IconArrowLeft = react.memo((props) => (jsxRuntime.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", ...props, children: jsxRuntime.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 12H5m0 0 7 7m-7-7 7-7" }) })));
IconArrowLeft.displayName = 'IconArrowLeft';

const cx$1 = classNames.bind(styles);
const FitItemList = ({ content, config, translateCSS }) => {
    const { objectFit, lazyLoad } = config;
    return (jsxRuntime.jsx("ul", { style: { ...translateCSS }, className: cx$1('carousel_image_list'), children: content.map((image, idx) => (jsxRuntime.jsx("li", { className: cx$1('carousel_image_wrapper'), children: !!image.landingUrl ? (jsxRuntime.jsx("a", { href: image.landingUrl, target: "_blank", className: cx$1('carousel_image_container'), style: {}, children: jsxRuntime.jsx("img", { className: cx$1('carousel_image'), src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        objectFit,
                    }, draggable: false }) })) : (jsxRuntime.jsx("div", { className: cx$1('carousel_image_container'), style: {}, children: jsxRuntime.jsx("img", { className: cx$1('carousel_image'), src: image.imageUrl, loading: lazyLoad ? 'lazy' : 'eager', alt: image.imageUrl, style: {
                        objectFit,
                    }, draggable: false }) })) }, idx))) }));
};

const cx = classNames.bind(styles);
const initialConfig = {
    lazyLoad: true,
    autoplay: false,
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
const Carousel = ({ config, content, className }) => {
    const helperConfig = { ...initialConfig, ...config };
    const { arrowShow, countShow, autoplay, autoplayDelay, ratio, mobileManipulate } = helperConfig;
    const transitionDuration = 350;
    const transitionTimingFunction = 'ease';
    const [aspectRatio, setAspectRatio] = react.useState(getInitialAspectRatio());
    const [currentIdx, setCurrentIndex] = react.useState(0);
    const [visibleImages, setVisibleImages] = react.useState([content[0]]);
    const [translateCSS, setTranslateCSS] = react.useState({
        transform: 'translateX(0)',
        translate: 'none',
    });
    const timeoutRef = react.useRef(null);
    const [isHovered, setIsHovered] = react.useState(false);
    //   Utils
    const getNextIndex = react.useCallback((currentIdx) => {
        return (currentIdx + 1) % content.length;
    }, [content.length]);
    const getPrevIndex = react.useCallback((currentIdx) => {
        return (currentIdx - 1 + content.length) % content.length;
    }, [content.length]);
    function getInitialAspectRatio() {
        return window.innerWidth >= (ratio?.breakPoint ?? 768)
            ? ratio?.pcRatio ?? ratio?.mobileRatio ?? 10 / 7
            : ratio?.mobileRatio ?? ratio?.pcRatio ?? 10 / 7;
    }
    // NextHandler
    const handleCountUp = react.useCallback(() => {
        const nextIdx = getNextIndex(currentIdx);
        setCurrentIndex(nextIdx);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            setTranslateCSS({
                transform: `translateX(0%)`,
            });
            setVisibleImages((prev) => [...prev.slice(1), content[nextIdx]]);
            requestAnimationFrame(() => {
                setTranslateCSS({
                    transform: `translateX(-100%)`,
                    transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
                });
            });
        }
        else {
            setVisibleImages((prev) => [...prev, content[nextIdx]]);
            setTranslateCSS({
                transform: `translateX(-100%)`,
                transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
            });
        }
        timeoutRef.current = setTimeout(() => {
            setTranslateCSS({
                transform: `translateX(0)`,
            });
            setVisibleImages((prev) => prev.slice(1));
            timeoutRef.current = null;
        }, transitionDuration);
    }, [currentIdx, getNextIndex, content]);
    // PrevHandler
    const handleCountdown = react.useCallback(() => {
        const prevIdx = getPrevIndex(currentIdx);
        setCurrentIndex(prevIdx);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            setTranslateCSS({
                transform: `translateX(-100%)`,
            });
            setVisibleImages((prev) => {
                const updatedImages = [...prev];
                updatedImages.pop();
                return [content[prevIdx], ...updatedImages];
            });
            requestAnimationFrame(() => {
                setTranslateCSS({
                    transform: `translateX(0%)`,
                    transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
                });
            });
        }
        else {
            setVisibleImages((prev) => [content[prevIdx], ...prev.slice(0)]);
            setTranslateCSS({
                transform: `translateX(-100%)`,
            });
            requestAnimationFrame(() => {
                setTranslateCSS({
                    transform: `translateX(0%)`,
                    transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
                });
            });
        }
        timeoutRef.current = setTimeout(() => {
            setTranslateCSS({
                transform: `translateX(0)`,
            });
            setVisibleImages(() => [content[prevIdx]]);
            timeoutRef.current = null;
        }, transitionDuration);
    }, [currentIdx, getPrevIndex, content, transitionDuration]);
    react.useEffect(() => {
        const handleResize = () => {
            setAspectRatio(getInitialAspectRatio());
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    react.useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                handleCountUp();
            }, autoplayDelay);
            return () => clearInterval(interval);
        }
        return;
    }, [helperConfig]);
    // Touch Event
    const touchStartX = react.useRef(0);
    const touchEndX = react.useRef(0);
    const handleTouchStart = (e) => {
        if (!mobileManipulate)
            return;
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        if (!mobileManipulate)
            return;
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (!mobileManipulate)
            return;
        if (touchStartX.current - touchEndX.current > 50) {
            handleCountUp();
        }
        if (touchStartX.current - touchEndX.current < -50) {
            handleCountdown();
        }
    };
    return (jsxRuntime.jsxs("div", { className: cx('hyune_carousel_wrapper', className), onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [jsxRuntime.jsx("div", { className: cx('carousel_content'), style: { width: '100%' }, children: jsxRuntime.jsxs("div", { className: cx('carousel_content_inner'), style: { aspectRatio: `${aspectRatio}` }, children: [jsxRuntime.jsx(FitItemList, { content: visibleImages, config: helperConfig, translateCSS: translateCSS }), countShow && (jsxRuntime.jsx("div", { className: cx('carousel_count_wrapper'), children: jsxRuntime.jsxs("div", { className: cx('carousel_count'), children: [currentIdx + 1, "/", content.length] }) }))] }) }), isHovered && arrowShow && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: cx('modified_wrapper', 'modified_wrapper_left'), children: jsxRuntime.jsx("button", { className: cx('arrow'), onClick: handleCountdown, children: jsxRuntime.jsx(IconArrowLeft, { fontSize: 24, width: 24, height: 24, color: "white" }) }) }), jsxRuntime.jsx("div", { className: cx('modified_wrapper', 'modified_wrapper_right'), children: jsxRuntime.jsx("button", { className: cx('arrow'), onClick: handleCountUp, children: jsxRuntime.jsx(IconArrowRight, { fontSize: 24, width: 24, height: 24, color: "white" }) }) })] }))] }));
};

exports.Carousel = Carousel;
