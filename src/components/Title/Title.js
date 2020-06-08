import React, { useContext } from 'react';
import { fontClass, themedClass, ThemeContext } from 'utilities';
import * as styles from './Title.module.scss';

export default ({ children, secondary }) => {
  const theme = useContext(ThemeContext);
  const themeVariation = themedClass(theme, styles, 'Title');
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
