import React, { useContext } from 'react';
import { inverseTheme, themedClass, ThemeContext } from 'utilities';
import * as styles from './Heading.module.scss';

export default ({ children, inverse = false }) => {
  const theme = useContext(ThemeContext);
  let themeVariation;

  if (!inverse) {
    themeVariation = themedClass(theme, styles, 'Heading');
  } else {
    themeVariation = themedClass(inverseTheme(theme), styles, 'Heading');
  }

  const classes = () => {
    let classNames = styles.Heading;
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  return <h3 className={classes()}>{children}</h3>;
};
