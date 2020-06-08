import React from 'react';

import { Body } from 'components';
import content from './content.json';

import * as styles from './Summary.module.scss';

export default ({ id }) => {
  return (
    <>
      <div className={styles.SummarySibling}></div>
      <div className={styles.Summary} id={id}>
        <Body>{content.summary}</Body>
      </div>
    </>
  );
};
