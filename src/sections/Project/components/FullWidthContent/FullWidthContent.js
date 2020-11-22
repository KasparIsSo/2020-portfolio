import React from 'react';

import { BlockMapper } from '../../utilities';
import * as styles from './FullWidthContent.module.scss';

export default ({ section }) => {
  const wrapper = (props) => <>{props.children}</>;

  return (
    <div className={styles.FullWidthContentWrapper}>
      <div className={styles.FullWidthContent}>
        <BlockMapper blocks={section.blocks} Wrapper={wrapper} />
      </div>
    </div>
  );
};
