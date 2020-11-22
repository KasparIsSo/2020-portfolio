import React from 'react';
import { Title, Body } from 'components';

import * as styles from './BlockSplitSecondary.module.scss';

export default ({ content }) => {
  return (
    <section className={styles.BlockSplitSecondary}>
      {blockMarkup(content.metadata)}
    </section>
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
