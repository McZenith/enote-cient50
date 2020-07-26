import * as React from 'react';
import c from './container.scss';
import { ContainerLayoutProps } from './interface';
const ContainerLayout: React.SFC<ContainerLayoutProps> = ({ children }) => {
  return <div className={c.container}>{children}</div>;
};

export default ContainerLayout;
