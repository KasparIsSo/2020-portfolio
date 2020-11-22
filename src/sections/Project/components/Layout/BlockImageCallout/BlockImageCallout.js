import React from 'react';
import * as styles from './BlockImageCallout.module.scss';

export default ({ content }) => {
  return (
    <div className={styles.BlockImageCallout}>
      <img src={content.imageUrl} alt={content.alt}></img>
    </div>
  );
};
