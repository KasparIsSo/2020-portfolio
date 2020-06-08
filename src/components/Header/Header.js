import React from 'react';

import { Body, Display, Title } from 'components';
import * as styles from './Header.module.scss';

export default ({ props }) => {
  return (
    <>
      <div className={styles.Breadcrumbs}>
        <Title>{props.breadcrumbs.primary}</Title>
        {breadcrumbMarkup()}
      </div>
      <div className={styles.Title}>
        <Display>{props.title}</Display>
        <div className={styles.Slug}>
          <Body>{props.slug}</Body>
        </div>
      </div>
    </>
  );

  function breadcrumbMarkup() {
    if (props.breadcrumbs.link) {
      return <p>go back</p>;
    }
  }
};
