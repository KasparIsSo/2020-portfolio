import React from 'react';
import {themeEnum} from 'enums';

const ThemeContext = React.createContext({
  theme: themeEnum.LIGHT,
  setTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
