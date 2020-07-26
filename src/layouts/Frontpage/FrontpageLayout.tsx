import * as React from 'react';
import { FrontpageLayoutProps } from './interface';
import { Box } from 'wix-style-react';
import f from './FrontpageLayout.scss';

const FrontpageLayout: React.SFC<FrontpageLayoutProps> = ({ children }) => {
  return (
    <Box
      className={f.main}
      minHeight="100vh"
      height="100vh"
      width="100vw"
      direction="vertical"
    >
      {children}
    </Box>
  );
};

export default FrontpageLayout;
