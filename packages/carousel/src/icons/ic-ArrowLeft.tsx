import { memo, SVGProps } from 'react';
const IconArrowLeft = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0 7 7m-7-7 7-7" />
  </svg>
));
export default IconArrowLeft;

IconArrowLeft.displayName = 'IconArrowLeft';
