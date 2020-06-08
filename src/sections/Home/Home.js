import React from 'react';
import { Header, Layout, PageNav } from 'components';

import { Section, Summary } from './components';
import content from './content.json';
import * as styles from './Home.module.scss';

export default () => {
  const headerProps = {
    breadcrumbs: { primary: content.header.breadcrumbs.primary },
    title: content.header.title,
    slug: content.header.slug,
  };

  const sections = ['About', 'Work', 'Experience', 'Experiments', 'Contact'];

  return (
    <Layout>
      <Header props={headerProps}></Header>
      <PageNav sections={sections} rows={sections.length + 1} />
      <Summary id={sections[0]} />
      <Section
        title={content.work.title}
        listItems={content.work.listItems}
        id={sections[1]}
      />
      <Section
        title={content.experience.title}
        listItems={content.experience.listItems}
        id={sections[2]}
      />
      <Section
        title={content.experiments.title}
        listItems={content.experiments.listItems}
        id={sections[3]}
      />
      <Section
        title={content.contact.title}
        content={content.contact.content}
        id={sections[4]}
      />
    </Layout>
  );
};
