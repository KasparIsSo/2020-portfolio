import React from 'react';
import * as styles from './Layout.module.scss';

export default ({ children }) => {
  return (
    <div className={styles.LayoutContainer}>
      <div className={styles.Layout}>{children}</div>
    </div>
  );
};
