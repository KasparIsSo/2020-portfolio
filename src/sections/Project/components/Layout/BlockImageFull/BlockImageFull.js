import React from 'react';

import * as styles from './BlockImageFull.module.scss';

export default ({ content }) => {
  return (
    <div className={styles.BlockImageFull}>
      <img src={content.imageUrl} alt={content.alt}></img>
    </div>
  );
};
