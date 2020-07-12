import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { themeEnum } from './enums';
import { themedClass, ThemeProvider } from 'utilities';
import { Home, Project } from 'sections';

import * as styles from './App.module.scss';

export default function App() {
  const storedTheme = () =>
    window.localStorage.getItem('kaspar-so-portfolio-theme')
      ? window.localStorage.getItem('kaspar-so-portfolio-theme')
      : themeEnum.LIGHT;

  const [theme] = useState(storedTheme);

  useEffect(() => {
    window.localStorage.setItem('shipping-prototype-test-orders', theme);
    if (theme === themeEnum.LIGHT) {
      document.body.style.backgroundColor = '#fcf3f1';
    } else {
      document.body.style.backgroundColor = '#000';
    }
  }, [theme]);

  const themeVariation = themedClass(theme, styles, 'AppWrapper');

  const appWrapperClasses = () => {
    let classNames = styles.AppWrapper;
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  return (
    <ThemeProvider value={theme}>
      <div className={appWrapperClasses()}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path={`/project/:projectId`}>
              <Project />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
