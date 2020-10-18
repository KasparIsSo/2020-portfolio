import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { themedClass, ThemeProvider, useDarkMode } from 'utilities';
import { Home, Project } from 'sections';

import * as styles from './App.module.scss';

export default function App() {
  const { theme, mountedComponent } = useDarkMode();
  const [themeMode, setThemeMode] = useState(theme);

  const appWrapperClasses = () => {
    const themeVariation = themedClass(themeMode, styles, 'AppWrapper');
    let classNames = styles.AppWrapper;
    if (themeVariation) {
      classNames += ` ${themeVariation}`;
    }
    return classNames;
  };

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider value={{ theme: themeMode, setTheme: setThemeMode }}>
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
