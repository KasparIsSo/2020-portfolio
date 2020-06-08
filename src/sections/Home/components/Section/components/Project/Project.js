import React from 'react';
import { Heading, Body, Link } from 'components';
import * as styles from './Project.module.scss';

export default ({ project }) => {
  return (
    <li>
      <Link to={project.path}>
        <div className={styles.Project}>
          <Heading>{project.title}</Heading>
          <Body>{project.slug}</Body>
        </div>
      </Link>
    </li>
  );
};
