import React from 'react';
import { Heading, List } from 'components';

import * as styles from './BlockListFull.module.scss';

export default ({ content }) => {
  return <section className={styles.BlockListFull}>{blockMarkup()}</section>;

  function blockMarkup() {
    return (
      <div className={styles.Block}>
        <Heading capitalize>{content.title}</Heading>
        {content.lists.map((list, index) => (
          <List
            key={`${list.title}-list-item-${index}`}
            title={list.title}
            list={list.list}
          />
        ))}
      </div>
    );
  }
};
