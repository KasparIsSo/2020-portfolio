import React from 'react';

import { Body, Display, Link } from 'components';

import listContent from './content.json';
import { MinorList, Project } from './components';
import * as styles from './Section.module.scss';

export default ({ title, listItems, content, id }) => {
  return (
    <>
      <section className={styles.Section} id={id}>
        <Display>{title}</Display>
        {listItems ? projectListMarkup(listItems) : contentMarkup(content)}
      </section>

      {id === 'Contact' ? contactSection() : null}
    </>
  );

  function projectListMarkup(projects) {
    return (
      <ul>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </ul>
    );
  }

  function contentMarkup(contents) {
    return (
      <ul className={styles.ContactContent}>
        {contents.map((content, index) => (
          <li key={index}>
            <Link href={content.url} external>
              <Body secondary>{content.text}</Body>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function contactSection() {
    return (
      <>
        <MinorList content={listContent.social} />
        <MinorList content={listContent.resume} />
      </>
    );
  }
};
