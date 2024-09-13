import { memo, SVGProps } from 'react';
const IconArrowRight = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m0 0-6-6m6 6-6 6" />
  </svg>
));
export default IconArrowRight;

IconArrowRight.displayName = 'IconArrowRight';
