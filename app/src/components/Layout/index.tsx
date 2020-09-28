import React from 'react';

import type { ReactElement, ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props): ReactElement {
  return <div className={styles.Layout}>{children}</div>;
}

export default Layout;
