/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Body } from 'components';
import { useDarkMode } from 'utilities';

import * as styles from './ToggleDarkMode.module.scss';

export default () => {
  const { theme, themeToggler } = useDarkMode();

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target);
    themeToggler();
  }

  const themeContent = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <a
      tabIndex='0'
      href='#'
      onClick={(e) => handleClick(e)}
      className={styles.Button}
    >
      <Body primary>{themeContent} mode</Body>
    </a>
  );
};
