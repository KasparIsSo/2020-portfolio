import React from 'react';
import { Title, Body } from 'components';

import * as styles from './BlockSplitSecondary.module.scss';

export default ({ content }) => {
  return (
    <div className={styles.BlockSplitSecondary}>{blockMarkup(content)}</div>
  );

  function blockMarkup(contentArray) {
    return contentArray.map((contentItem) => {
      return (
        <div className={styles.Block}>
          <Title inverse>{contentItem.title}</Title>
          <Body inverse>{contentItem.content}</Body>
        </div>
      );
    });
  }
};
