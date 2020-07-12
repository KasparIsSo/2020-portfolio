import React from 'react';
import * as styles from './BlockWrapper.module.scss';

export default ({ children }) => {
  return <div className={styles.BlockWrapper}>{children}</div>;
};
