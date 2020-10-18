import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Display.module.scss';

export default ({ children }) => {
  const {theme} = useContext(ThemeContext);

  const themeVariation = themedClass(theme, styles, 'Display');

  const classes = () => {
    let classNames = styles.Display;
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  return <h2 className={classes()}>{children}</h2>;
};
