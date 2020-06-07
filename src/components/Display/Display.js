import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Display.module.scss';

export default ({ children }) => {
  const theme = useContext(ThemeContext);

  return <h2 className={themedClass(theme, styles, 'Display')}>{children}</h2>;
};
