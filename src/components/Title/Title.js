import React, { useContext } from 'react';
import { fontClass, inverseTheme, themedClass, ThemeContext } from 'utilities';
import * as styles from './Title.module.scss';

export default ({ children, secondary, inverse }) => {
  const theme = useContext(ThemeContext);
  let themeVariation;

  if (!inverse) {
    themeVariation = themedClass(theme, styles, 'Title');
  } else {
    themeVariation = themedClass(inverseTheme(theme), styles, 'Title');
  }

  const fontVariation = secondary
    ? fontClass('secondary', styles, 'Title')
    : null;

  const classes = () => {
    let classNames = styles.Title;
    if (fontVariation) {
      classNames += ` ${fontVariation}`;
    }
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  return <h4 className={classes()}>{children}</h4>;
};
