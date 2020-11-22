import React, { useContext } from 'react';
import { fontClass, themedClass, ThemeContext } from 'utilities';

import * as styles from './Quote.module.scss';

export default ({ children, primary }) => {
  const { theme } = useContext(ThemeContext);
  const classes = fontClass(
    primary ? 'primary' : 'secondary',
    styles,
    'Quote',
    themedClass(theme, styles, 'Quote')
  );

  return <blockquote className={classes}>{children}</blockquote>;
};
