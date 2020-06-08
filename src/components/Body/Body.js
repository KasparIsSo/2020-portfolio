import React, { useContext } from 'react';
import { fontClass, themedClass, ThemeContext } from 'utilities';
import * as styles from './Body.module.scss';

export default ({ children, primary }) => {
  const theme = useContext(ThemeContext);
  const fontVariation = primary ? null : fontClass('secondary', styles, 'Body');
  const classes = `${styles.Body} ${themedClass(
    theme,
    styles,
    'Body'
  )} ${fontVariation}`;

  return <p className={classes}>{children}</p>;
};
