import React from 'react';
import { Heading, Body } from 'components';

import * as styles from './BlockTextFull.module.scss';

export default ({ content }) => {
  return <section className={styles.BlockTextFull}>{blockMarkup()}</section>;

  function blockMarkup() {
    return (
      <div className={styles.Block}>
        <Heading capitalize>{content.title}</Heading>
        <Body>{content.content}</Body>
      </div>
    );
  }
};
