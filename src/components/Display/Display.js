import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';

import * as styles from './Display.module.scss';

export default ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const classes = themedClass(theme, styles, 'Display');

  return <h2 className={classes}>{children}</h2>;
};
