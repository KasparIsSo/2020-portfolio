import React from 'react';
import { Heading, Body, Link } from 'components';

import { ResumeLink } from './components';
import * as styles from './MinorList.module.scss';

export default ({ content }) => {
  const classNames =
    content.title === 'Social'
      ? `${styles.MinorList} ${styles.Social} `
      : styles.MinorList;
  return (
    <div className={classNames}>
      <Heading>{content.title}</Heading>
      <ul>{listItemMarkup(content.listItems)}</ul>
      {content.title === 'Social' ? null : <ResumeLink />}
    </div>
  );

  function listItemMarkup(listItems) {
    return listItems.map((listItem, index) => (
      <li key={index}>
        <Link href={listItem.url} external autoWidth>
          <Body primary>{listItem.content}</Body>
        </Link>
      </li>
    ));
  }
};
