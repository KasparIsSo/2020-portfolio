import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { themedClass, ThemeProvider } from 'utilities';
import { Home } from 'sections';

import * as styles from './App.module.scss';

export default function App() {
  const storedTheme = () =>
    window.localStorage.getItem('kaspar-so-portfolio-theme')
      ? window.localStorage.getItem('kaspar-so-portfolio-theme')
      : 'light';

  const [theme] = useState(storedTheme);

  useEffect(() => {
    window.localStorage.setItem('shipping-prototype-test-orders', theme);
    if (theme === 'light') {
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
            <Route path='/project'>
              <p>project</p>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //           <Link to='/about'>About</Link>
    //         </li>
    //         <li>
    //           <Link to='/users'>Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path='/about'>
    //         <About />
    //       </Route>
    //       <Route path='/users'>
    //         <Users />
    //       </Route>
    //       <Route path='/'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
