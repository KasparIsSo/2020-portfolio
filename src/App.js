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

  const appWrapperClasses = themedClass(themeMode, styles, 'AppWrapper');

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider value={{ theme: themeMode, setTheme: setThemeMode }}>
      <div className={appWrapperClasses}>
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
