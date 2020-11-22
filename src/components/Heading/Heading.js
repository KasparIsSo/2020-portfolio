import React, { useContext } from 'react';
import { inverseTheme, themedClass, ThemeContext } from 'utilities';
import * as styles from './Heading.module.scss';

export default ({ children, capitalize, inverse = false }) => {
  const { theme } = useContext(ThemeContext);

  let classes;

  if (!inverse) {
    classes = themedClass(theme, styles, 'Heading');
  } else {
    classes = themedClass(inverseTheme(theme), styles, 'Heading');
  }

  const caseVariation = styles.Capitalize;

  if (capitalize) {
    classes += ` ${caseVariation}`;
  }

  return <h3 className={classes}>{children}</h3>;
};
