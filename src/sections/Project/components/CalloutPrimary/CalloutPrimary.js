import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';

import { BlockMapper } from '../../utilities';
import * as styles from './CalloutPrimary.module.scss';

export default ({ section }) => {
  const { theme } = useContext(ThemeContext);

  const classes = themedClass(theme, styles, 'CalloutPrimary');

  return (
    <section className={classes}>
      <BlockMapper blocks={section.blocks} />
    </section>
  );
};
