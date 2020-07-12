import React from 'react';
import { Heading, Body } from 'components';

import * as styles from './BlockSplitPrimary.module.scss';

export default ({ content }) => {
  return <div className={styles.BlockSplitPrimary}>{blockMarkup(content)}</div>;

  function blockMarkup(contentArray) {
    return contentArray.map((contentItem) => {
      return (
        <div>
          <Heading inverse>{contentItem.title}</Heading>
          <Body>{contentItem.content}</Body>
        </div>
      );
    });
  }
};
