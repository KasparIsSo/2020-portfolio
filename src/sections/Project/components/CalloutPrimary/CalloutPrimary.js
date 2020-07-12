import React from 'react';

import { BlockMapper } from '../../utilities';
import * as styles from './CalloutPrimary.module.scss';

export default ({ section }) => {
  return (
    <div className={styles.CalloutPrimary}>
      <BlockMapper blocks={section.blocks} />
    </div>
  );
};
