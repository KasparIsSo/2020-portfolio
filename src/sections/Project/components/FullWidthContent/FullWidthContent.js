import React, { useContext } from 'react';
import { themedClass, ThemeContext } from 'utilities';

import { BlockMapper } from '../../utilities';
import * as styles from './FullWidthContent.module.scss';

export default ({ section }) => {
  const { theme } = useContext(ThemeContext);

  const wrapper = (props) => <>{props.children}</>;

  const navBackgroundClasses = themedClass(theme, styles, 'NavBackground');

  return (
    <div className={styles.FullWidthContentWrapper}>
      <div className={styles.FullWidthContent}>
        <div className={styles.NavBackgroundWrapper}>
          <div className={navBackgroundClasses}></div>
        </div>
        <BlockMapper blocks={section.blocks} Wrapper={wrapper} />
      </div>
    </div>
  );
};
