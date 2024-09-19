import { CSSProperties, FC } from 'react';
import { RollingBanner } from '../../interface';
import styles from '../carousel.module.scss';
import classNames from 'classnames/bind';

interface FitItemProps {
  content: RollingBanner.Content[];
  config: RollingBanner.Config;
  translateCSS: CSSProperties;
}

const cx = classNames.bind(styles);

export const FitItemList: FC<FitItemProps> = ({ content, config, translateCSS }) => {
  const { objectFit, lazyLoad } = config;

  return (
    <ul style={{ ...translateCSS }} className={cx('carousel_image_list')}>
      {content.map((image, idx) => (
        <li className={cx('carousel_image_wrapper')} key={idx}>
          {!!image.landingUrl ? (
            <a href={image.landingUrl} target="_blank" className={cx('carousel_image_container')} style={{}}>
              <img
                className={cx('carousel_image')}
                src={image.imageUrl}
                loading={lazyLoad ? 'lazy' : 'eager'}
                alt={image.imageUrl}
                style={{
                  objectFit,
                }}
                draggable={false}
              />
            </a>
          ) : (
            <div className={cx('carousel_image_container')} style={{}}>
              <img
                className={cx('carousel_image')}
                src={image.imageUrl}
                loading={lazyLoad ? 'lazy' : 'eager'}
                alt={image.imageUrl}
                style={{
                  objectFit,
                }}
                draggable={false}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
