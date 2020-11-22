import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themedClass, ThemeContext } from 'utilities';
import * as styles from './Link.module.scss';

export default ({ children, href, external, to, nav }) => {
  const { theme } = useContext(ThemeContext);
  const classes = themedClass(theme, styles, 'Link');

  if (external || nav) {
    return (
      <a
        className={classes}
        href={href ? href : null}
        target={external ? '_blank' : null}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};
