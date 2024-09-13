import { CSSProperties, FC } from 'react';
import { RollingBanner } from '../../interface';
import styles from '../carousel.module.scss';

interface FitItemProps {
  content: RollingBanner.Content[];
  config: RollingBanner.Config;
  translateCSS: CSSProperties;
}
export const FitItemList: FC<FitItemProps> = ({ content, config, translateCSS }) => {
  const { objectFit, lazyLoad } = config;

  return (
    <ul style={{ ...translateCSS }} className={[styles.carousel_image_list].join(' ')}>
      {content.map((image, idx) => (
        <li className={styles.carousel_image_wrapper} key={idx}>
          {!!image.landingUrl ? (
            <a href={image.landingUrl} target="_blank" className={styles.carousel_image_container} style={{}}>
              <img
                className={styles.carousel_image}
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
            <div className={styles.carousel_image_container} style={{}}>
              <img
                className={styles.carousel_image}
                src={image.imageUrl}
                loading={lazyLoad ? 'lazy' : 'eager'}
                alt={image.imageUrl}
                style={{
                  // aspectRatio: `${aspectRatio} `,
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
