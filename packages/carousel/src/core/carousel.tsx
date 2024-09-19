'use client';
import { CSSProperties, FC, useCallback, useEffect, useRef, useState } from 'react';
import { RollingBanner } from '../interface';
import styles from './carousel.module.scss';
import classNames from 'classnames/bind';

import IconArrowRight from '../icons/ic-ArrowRight';
import IconArrowLeft from '../icons/ic-ArrowLeft';
import { FitItemList } from './item/FitItem';

const cx = classNames.bind(styles);

const initialConfig: RollingBanner.Config = {
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
export const Carousel: FC<RollingBanner.BannerProps> = ({ config, content, className }) => {
  if (!window) return <></>;

  const helperConfig: RollingBanner.Config = { ...initialConfig, ...config };
  const { arrowShow, countShow, autoplay, autoplayDelay, ratio, mobileManipulate } = helperConfig;
  const transitionDuration = 350;
  const transitionTimingFunction = 'ease';
  const [aspectRatio, setAspectRatio] = useState<number>(getInitialAspectRatio());
  const [currentIdx, setCurrentIndex] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<RollingBanner.Content[]>([content[0]]);
  const [translateCSS, setTranslateCSS] = useState<CSSProperties>({
    transform: 'translateX(0)',
    translate: 'none',
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //   Utils
  const getNextIndex = useCallback(
    (currentIdx: number) => {
      return (currentIdx + 1) % content.length;
    },
    [content.length]
  );

  const getPrevIndex = useCallback(
    (currentIdx: number) => {
      return (currentIdx - 1 + content.length) % content.length;
    },
    [content.length]
  );

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
    } else {
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
    } else {
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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!mobileManipulate) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!mobileManipulate) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!mobileManipulate) return;
    if (touchStartX.current - touchEndX.current > 50) {
      handleCountUp();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handleCountdown();
    }
  };

  return (
    <div
      className={cx('hyune_carousel_wrapper', className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={cx('carousel_content')} style={{ width: '100%' }}>
        <div className={cx('carousel_content_inner')} style={{ aspectRatio: `${aspectRatio}` }}>
          <FitItemList content={visibleImages} config={helperConfig} translateCSS={translateCSS} />
          {countShow && (
            <div className={cx('carousel_count_wrapper')}>
              <div className={cx('carousel_count')}>
                {currentIdx + 1}/{content.length}
              </div>
            </div>
          )}
        </div>
      </div>

      {isHovered && arrowShow && (
        <>
          <div className={cx('modified_wrapper', 'modified_wrapper_left')}>
            <button className={cx('arrow')} onClick={handleCountdown}>
              <IconArrowLeft fontSize={24} width={24} height={24} color="white" />
            </button>
          </div>
          <div className={cx('modified_wrapper', 'modified_wrapper_right')}>
            <button className={cx('arrow')} onClick={handleCountUp}>
              <IconArrowRight fontSize={24} width={24} height={24} color="white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
