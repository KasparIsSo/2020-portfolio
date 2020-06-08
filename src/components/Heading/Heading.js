import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Heading.module.scss';

export default ({ children }) => {
  const theme = useContext(ThemeContext);
  const themeVariation = themedClass(theme, styles, 'Heading');

  const classes = () => {
    let classNames = styles.Heading;
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  return <h3 className={classes()}>{children}</h3>;
};
