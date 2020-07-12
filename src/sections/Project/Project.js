import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Layout, PageNav } from 'components';

// import { Section, Summary } from './components';
import { projectMapper, SectionMapper } from './utilities';
import content from './content.json';
// import * as styles from './Home.module.scss';

export default () => {
  let { projectId } = useParams();

  const project = projectMapper(projectId);

  const headerProps = {
    breadcrumb: content.header.breadcrumb,
    title: project.header.title,
  };

  const sections = ['About', 'Work', 'Experience', 'Experiments', 'Contact'];

  return (
    <Layout>
      <Header props={headerProps}></Header>
      <PageNav sections={sections} rows={sections.length + 1} />
      <div>Hello</div>
      <div>{projectId}</div>
      {contentMarkup()}
    </Layout>
  );

  function contentMarkup() {
    return project.sections.map((section, index) => (
      <SectionMapper key={index} section={section} />
    ));
  }
};
