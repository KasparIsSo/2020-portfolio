import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Title.module.scss';

export default ({ children }) => {
  const theme = useContext(ThemeContext);

  return <h2 className={themedClass(theme, styles, 'Title')}>{children}</h2>;
};
