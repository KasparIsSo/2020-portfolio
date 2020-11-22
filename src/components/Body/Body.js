import React, { useContext } from 'react';
import { fontClass, inverseTheme, themedClass, ThemeContext } from 'utilities';

import * as styles from './Body.module.scss';

export default ({ children, primary = false, inverse = false }) => {
  const { theme } = useContext(ThemeContext);
  let classes;

  if (!inverse) {
    classes = fontClass(
      primary ? 'primary' : 'secondary',
      styles,
      'Body',
      themedClass(theme, styles, 'Body')
    );
  } else {
    classes = fontClass(
      primary ? 'primary' : 'secondary',
      styles,
      'Body',
      themedClass(inverseTheme(theme), styles, 'Body')
    );
  }

  return <p className={classes}>{children}</p>;
};
