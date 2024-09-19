import React, { memo, SVGProps } from 'react';

const IconArrowLeft: React.FC<SVGProps<SVGSVGElement>> = memo((props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0 7 7m-7-7 7-7" />
  </svg>
));

IconArrowLeft.displayName = 'IconArrowLeft';

export default IconArrowLeft;
