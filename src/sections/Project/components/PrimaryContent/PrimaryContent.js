import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';

import { BlockMapper } from '../../utilities';

import * as styles from './PrimaryContent.module.scss';

export default ({ section }) => {
  const { theme } = useContext(ThemeContext);

  const classes = themedClass(theme, styles, 'PrimaryContent');

  return (
    <div className={classes}>
      <BlockMapper blocks={section.blocks} />
    </div>
  );
};
