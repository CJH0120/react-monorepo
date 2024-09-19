'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './carousel.module.scss';
import classNames from 'classnames/bind';
import IconArrowRight from '../icons/ic-ArrowRight';
import IconArrowLeft from '../icons/ic-ArrowLeft';
import { FitItemList } from './item/FitItem';
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
export const Carousel = ({ config, content, className }) => {
    const helperConfig = { ...initialConfig, ...config };
    const { arrowShow, countShow, autoplay, autoplayDelay, ratio, mobileManipulate } = helperConfig;
    const transitionDuration = 350;
    const transitionTimingFunction = 'ease';
    const [aspectRatio, setAspectRatio] = useState(getInitialAspectRatio());
    const [currentIdx, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState([content[0]]);
    const [translateCSS, setTranslateCSS] = useState({
        transform: 'translateX(0)',
        translate: 'none',
    });
    const timeoutRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    //   Utils
    const getNextIndex = useCallback((currentIdx) => {
        return (currentIdx + 1) % content.length;
    }, [content.length]);
    const getPrevIndex = useCallback((currentIdx) => {
        return (currentIdx - 1 + content.length) % content.length;
    }, [content.length]);
    function getInitialAspectRatio() {
        return window.innerWidth >= (ratio?.breakPoint ?? 768)
            ? ratio?.pcRatio ?? ratio?.mobileRatio ?? 10 / 7
            : ratio?.mobileRatio ?? ratio?.pcRatio ?? 10 / 7;
    }
    // NextHandler
    const handleCountUp = useCallback(() => {
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
    const handleCountdown = useCallback(() => {
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
    useEffect(() => {
        const handleResize = () => {
            setAspectRatio(getInitialAspectRatio());
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                handleCountUp();
            }, autoplayDelay);
            return () => clearInterval(interval);
        }
        return;
    }, [helperConfig]);
    // Touch Event
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
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
    return (_jsxs("div", { className: cx('hyune_carousel_wrapper', className), onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsx("div", { className: cx('carousel_content'), style: { width: '100%' }, children: _jsxs("div", { className: cx('carousel_content_inner'), style: { aspectRatio: `${aspectRatio}` }, children: [_jsx(FitItemList, { content: visibleImages, config: helperConfig, translateCSS: translateCSS }), countShow && (_jsx("div", { className: cx('carousel_count_wrapper'), children: _jsxs("div", { className: cx('carousel_count'), children: [currentIdx + 1, "/", content.length] }) }))] }) }), isHovered && arrowShow && (_jsxs(_Fragment, { children: [_jsx("div", { className: cx('modified_wrapper', 'modified_wrapper_left'), children: _jsx("button", { className: cx('arrow'), onClick: handleCountdown, children: _jsx(IconArrowLeft, { fontSize: 24, width: 24, height: 24, color: "white" }) }) }), _jsx("div", { className: cx('modified_wrapper', 'modified_wrapper_right'), children: _jsx("button", { className: cx('arrow'), onClick: handleCountUp, children: _jsx(IconArrowRight, { fontSize: 24, width: 24, height: 24, color: "white" }) }) })] }))] }));
};
