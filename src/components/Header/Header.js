import React from 'react';

import { Body, Display, Link, Title } from 'components';
import content from './content.json';

import * as styles from './Header.module.scss';

export default ({ props }) => {
  return (
    <>
      <div className={styles.Breadcrumbs}>
        <Link to='/' autoWidth>
          <Title>{content.header.title}</Title>
        </Link>
        {breadcrumbMarkup()}
      </div>
      <div className={styles.Title}>
        <Display>{props.title}</Display>
        {props.slug && (
          <div className={styles.Slug}>
            <Body>{props.slug}</Body>
          </div>
        )}
      </div>
    </>
  );

  function breadcrumbMarkup() {
    if (props.breadcrumb) {
      return (
        <Link to={props.breadcrumb.link}>
          <Body primary>⟵ {props.breadcrumb.parent}</Body>
        </Link>
      );
    }
  }
};
