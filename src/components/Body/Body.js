import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Body.module.scss';

export default ({ children }) => {
  const theme = useContext(ThemeContext);

  return <h2 className={themedClass(theme, styles, 'Body')}>{children}</h2>;
};
