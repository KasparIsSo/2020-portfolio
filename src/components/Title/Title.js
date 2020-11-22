import React, { useContext } from 'react';
import { fontClass, inverseTheme, themedClass, ThemeContext } from 'utilities';
import * as styles from './Title.module.scss';

export default ({ children, secondary, inverse }) => {
  const { theme } = useContext(ThemeContext);
  let classes;

  if (!inverse) {
    classes = fontClass(
      secondary ? 'secondary' : null,
      styles,
      'Title',
      themedClass(theme, styles, 'Title')
    );
  } else {
    classes = fontClass(
      secondary ? 'secondary' : null,
      styles,
      'Title',
      themedClass(inverseTheme(theme), styles, 'Title')
    );
  }

  return <h4 className={classes}>{children}</h4>;
};
