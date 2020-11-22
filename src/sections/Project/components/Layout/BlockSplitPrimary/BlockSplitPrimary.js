import React from 'react';
import { Heading, Body } from 'components';

import * as styles from './BlockSplitPrimary.module.scss';

export default ({ content }) => {
  return (
    <section className={styles.BlockSplitPrimary} id={content.title}>
      {blockMarkup()}
    </section>
  );

  function blockMarkup() {
    return (
      <div className={styles.Block}>
        <Heading capitalize inverse>
          {content.title}
        </Heading>
        <Body inverse>{content.content}</Body>
      </div>
    );
  }
};
