import React, { useContext } from 'react';
import { fontClass, inverseTheme, themedClass, ThemeContext } from 'utilities';
import * as styles from './Body.module.scss';

export default ({ children, primary, inverse = false }) => {
  const theme = useContext(ThemeContext);
  let themeVariation;

  if (!inverse) {
    themeVariation = themedClass(theme, styles, 'Body');
  } else {
    themeVariation = themedClass(inverseTheme(theme), styles, 'Body');
  }
  const fontVariation = primary ? null : fontClass('secondary', styles, 'Body');
  const classes = `${styles.Body} ${themeVariation} ${fontVariation}`;

  return <p className={classes}>{children}</p>;
};
