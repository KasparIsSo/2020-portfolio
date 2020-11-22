import React from 'react';
import { Quote } from 'components';

import * as styles from './BlockQuoteFull.module.scss';

export default ({ content }) => {
  return (
    <section className={styles.BlockQuoteFull} id={content.title}>
      {blockMarkup()}
    </section>
  );

  function blockMarkup() {
    return (
      <div className={styles.Block}>
        <Quote>{content.content}</Quote>
      </div>
    );
  }
};
