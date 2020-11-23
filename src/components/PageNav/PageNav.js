import React from 'react';

import { Link, Title } from 'components';
import * as styles from './PageNav.module.scss';

export default React.memo(({ sections, rows }) => {
  return (
    <div className={styles.PageNav} style={{ gridRow: 'span ' + rows }}>
      <nav className={styles.Nav}>{createNavList(sections)}</nav>
    </div>
  );

  function createNavList(sections) {
    return <ul>{createNavItems(sections)}</ul>;
  }

  function createNavItems(sections) {
    return sections.map((section, index) => (
      <li key={index}>
        <Link href={`#${section}`} nav>
          <Title>{section}</Title>
        </Link>
      </li>
    ));
  }
});
