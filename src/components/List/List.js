import React, { useContext } from 'react';
import { fontClass, inverseTheme, themedClass, ThemeContext } from 'utilities';
import { Title } from 'components';

import * as styles from './List.module.scss';

export default ({ title, list, secondary = true }) => {
  const { theme } = useContext(ThemeContext);
  const listItemClasses = fontClass(
    secondary ? 'secondary' : 'primary',
    styles,
    'ListItem',
    themedClass(theme, styles, 'ListItem')
  );

  return (
    <div className={styles.List}>
      <Title>{title}</Title>
      <ul>
        {list.map((listItem, index) => (
          <li key={`${title}-list-item-${index}`} className={listItemClasses}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
